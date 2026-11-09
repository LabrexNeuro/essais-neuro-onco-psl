#!/usr/bin/env python3
"""Rappel mensuel aux investigateurs : statut et inclusions de leur protocole.

Lancé par GitHub Actions (voir .github/workflows/rappel-mensuel.yml). Il lit protocoles.csv,
envoie un courriel par investigateur (un seul courriel s'il a plusieurs protocoles) avec les
informations actuelles et un lien vers un formulaire pré-rempli pour les corriger.

Les adresses des investigateurs ne sont PAS dans le dépôt : elles viennent du secret GitHub
INVESTIGATEURS, au format JSON : {"LEGATO": ["prenom.nom@hopital.fr"], "SONOBIRD": ["..."]}
(la clé est l'identifiant `id` de protocoles.csv).
"""
import csv, json, os, smtplib, ssl, sys, urllib.parse
from email.message import EmailMessage

# ------------------------------------------------------------------
# À ADAPTER : le formulaire Google. Pas un secret, pas de données personnelles.
# FORM_URL : l'adresse du formulaire se terminant par /viewform
# ENTREES : numéros des questions (entry.XXXXXXX) obtenus avec « Obtenir le lien pré-rempli »
# ------------------------------------------------------------------
FORM_URL = os.environ.get("FORM_URL", "")
ENTREES = {
    "protocole": os.environ.get("ENTREE_PROTOCOLE", ""),   # question « Protocole »
    "statut": os.environ.get("ENTREE_STATUT", ""),         # question « Statut »
    "inclus": os.environ.get("ENTREE_INCLUS", ""),         # question « Nombre d'inclusions »
}
STATUTS = {"ouvert": "Ouvert aux inclusions", "en_preparation": "En préparation",
           "suspendu": "Inclusions suspendues", "clos": "Clos aux inclusions"}
SERVICE = "Service de neuro-oncologie"


def lire_protocoles(chemin):
    with open(chemin, encoding="utf-8-sig", newline="") as f:
        lignes = list(csv.DictReader(f, delimiter=";"))
    for l in lignes:
        l["id"] = " ".join((l.get("id") or "").split())
    return [l for l in lignes if l["id"]]


def lien_formulaire(p):
    if not FORM_URL:
        return ""
    champs = {"usp": "pp_url"}
    if ENTREES["protocole"]: champs[ENTREES["protocole"]] = p["acronyme"].strip()
    if ENTREES["statut"]: champs[ENTREES["statut"]] = STATUTS.get(p["statut"].strip(), p["statut"])
    if ENTREES["inclus"] and p.get("inclus", "").strip(): champs[ENTREES["inclus"]] = p["inclus"].strip()
    return FORM_URL + ("&" if "?" in FORM_URL else "?") + urllib.parse.urlencode(champs)


def bloc(p):
    inclus, objectif = (p.get("inclus") or "").strip(), (p.get("objectif") or "").strip()
    incl = f"{inclus} / {objectif}" if inclus and objectif else (inclus or "non renseigné")
    lien = lien_formulaire(p)
    return (f"{p['acronyme'].strip()} : {p['titre'].strip()[:110]}\n"
            f"  Statut actuel : {STATUTS.get(p['statut'].strip(), p['statut'])}\n"
            f"  Inclusions : {incl}\n"
            f"  Dernière mise à jour : {(p.get('maj_le') or 'non renseignée').strip()}\n"
            + (f"  Corriger ou confirmer : {lien}\n" if lien else ""))


def main():
    reel = "--envoyer" in sys.argv
    protocoles = {p["id"]: p for p in lire_protocoles("protocoles.csv")}
    investigateurs = json.loads(os.environ.get("INVESTIGATEURS") or "{}")
    par_adresse = {}
    for pid, adresses in investigateurs.items():
        pid = " ".join(pid.split())
        p = protocoles.get(pid)
        if not p:
            print(f"Attention : « {pid} » du secret INVESTIGATEURS n'existe pas dans protocoles.csv", file=sys.stderr)
            continue
        if p["statut"].strip() == "clos":
            continue
        for a in ([adresses] if isinstance(adresses, str) else adresses):
            par_adresse.setdefault(a.strip(), []).append(p)
    if not par_adresse:
        print("Aucun destinataire."); return 0
    expediteur = os.environ.get("GMAIL_ADRESSE", "")
    ctx = ssl.create_default_context()
    serveur = smtplib.SMTP_SSL("smtp.gmail.com", 465, context=ctx) if reel else None
    if reel: serveur.login(expediteur, os.environ["GMAIL_MOT_DE_PASSE_APPLICATION"])
    for adresse, liste in sorted(par_adresse.items()):
        msg = EmailMessage()
        msg["Subject"] = "Rappel mensuel : statut et inclusions de vos protocoles de recherche"
        msg["From"] = expediteur or "rappel@exemple.invalid"
        msg["To"] = adresse
        msg.set_content(
            "Bonjour,\n\n"
            "Voici les informations actuellement affichées sur le site des essais cliniques du "
            f"{SERVICE.lower()}. Merci de les confirmer ou de les corriger en cliquant sur le lien "
            "sous chaque protocole (une minute).\n\n"
            + "\n".join(bloc(p) for p in liste) +
            "\nMerci de votre aide.\nL'équipe de recherche clinique\n\n"
            "Message automatique envoyé chaque mois. Aucune donnée patient ne doit être indiquée.\n")
        if reel:
            serveur.send_message(msg); print("Envoyé :", adresse, [p["acronyme"].strip() for p in liste])
        else:
            print("=== SIMULATION (rien n'est envoyé) ===\nÀ :", adresse); print(msg.get_content())
    if serveur: serveur.quit()
    return 0


if __name__ == "__main__":
    sys.exit(main())
