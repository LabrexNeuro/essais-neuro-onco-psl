#!/usr/bin/env python3
"""Met à jour protocoles.csv (statut, inclusions, date) à partir des réponses du formulaire Google.

Une réponse peut contenir un ou plusieurs protocoles (formulaire à sections).
Pour chaque protocole, la réponse la plus récente fait foi.
Écrit resume-pr.md (modifications + anomalies) pour la demande de modification.
Usage : python3 maj_depuis_reponses.py [fichier_ou_url_des_reponses]
"""
import csv, io, os, re, sys, unicodedata, urllib.request
from datetime import datetime

# Libellé du formulaire (normalisé) -> valeur écrite dans protocoles.csv
STATUTS = {"ouvert_aux_inclusions": "ouvert", "ouvert": "ouvert",
           "en_preparation": "en preparation",
           "inclusions_suspendues": "suspendu", "suspendu": "suspendu",
           "clos_aux_inclusions": "clos", "clos": "clos"}
NOMS = {"ouvert": "Ouvert aux inclusions", "en_preparation": "En préparation",
        "suspendu": "Inclusions suspendues", "clos": "Clos aux inclusions"}
DATE_SI_CONFIRMATION = True        # une réponse sans changement met quand même à jour maj_le
FICHIER_IGNORES = "reponses_ignorees.txt"   # un horodateur par ligne, pour écarter une réponse


def nettoyer(s): return " ".join((s or "").replace("\xa0", " ").split())
def cle(s): return nettoyer(s).lower().replace("’", "'")
def md(s): return (s or "").replace("|", "\\|")


def norm_statut(x):
    """Même normalisation que normStatut() dans convertisseur.js."""
    s = unicodedata.normalize("NFD", str(x or "").strip().lower())
    s = "".join(c for c in s if not unicodedata.combining(c))
    return re.sub(r"[\s-]+", "_", s)


def en_date(s):
    m = re.match(r"(\d{1,2})/(\d{1,2})/(\d{4})", s or "")
    return datetime(int(m.group(3)), int(m.group(2)), int(m.group(1))) if m else None


def date_fr(horodateur):
    d = en_date(horodateur) or datetime.now()
    return d.strftime("%d/%m/%Y")


def lire_texte(source):
    if re.match(r"https?://", source):
        with urllib.request.urlopen(source, timeout=60) as r:
            return r.read().decode("utf-8-sig")
    return open(source, encoding="utf-8-sig").read()


def extraire(texte):
    """Une entrée par protocole renseigné. Les colonnes inconnues (ex. ancien Commentaire) sont ignorées."""
    lignes = list(csv.reader(io.StringIO(texte)))
    if not lignes: return []
    entetes = [cle(h) for h in lignes[0]]
    resultats = []
    for ligne in lignes[1:]:
        ligne += [""] * (len(entetes) - len(ligne))
        commun, blocs, bloc = {"horodateur": "", "initiales": ""}, [], None
        for h, v in zip(entetes, map(nettoyer, ligne)):
            if h.startswith("horodateur"):                     commun["horodateur"] = v
            elif "initiales" in h:                             commun["initiales"] = v
            elif h.startswith("protocole"):                    bloc = {"protocole": v}; blocs.append(bloc)
            elif bloc is not None and h.startswith("statut"):  bloc["statut"] = v
            elif bloc is not None and "inclusion" in h:        bloc["inclus"] = v
        resultats += [{**commun, **b} for b in blocs if b.get("protocole")]
    return resultats


def fleche(a, b, egal, nom=lambda x: x):
    return f"{nom(a) or '—'} (inchangé)" if egal else f"{nom(a) or '—'} → {nom(b) or '—'}"


def main():
    source = sys.argv[1] if len(sys.argv) > 1 else os.environ.get("REPONSES_CSV_URL", "")
    if not source: sys.exit("REPONSES_CSV_URL manquante.")
    reponses = extraire(lire_texte(source))

    ignores = set()
    if os.path.exists(FICHIER_IGNORES):
        ignores = {nettoyer(l) for l in open(FICHIER_IGNORES, encoding="utf-8") if l.strip()}

    # Conserver le format d'origine (BOM, fins de ligne) pour un diff lisible
    brut = open("protocoles.csv", encoding="utf-8", newline="").read()
    bom, fin = brut.startswith("\ufeff"), ("\r\n" if "\r\n" in brut else "\n")
    lecteur = csv.DictReader(io.StringIO(brut.lstrip("\ufeff")), delimiter=";")
    colonnes, protos = lecteur.fieldnames, list(lecteur)
    for p in protos:
        if None in p: sys.exit(f"Ligne « {p.get('id')} » : trop de champs (un « ; » non protégé ?).")

    par_nom = {}
    for p in protos:
        for k in (p["id"], p["acronyme"]): par_nom[cle(k)] = p

    anomalies, derniere = [], {}
    for r in reponses:
        if r["horodateur"] in ignores: continue
        p = par_nom.get(cle(r["protocole"]))
        if not p:
            anomalies.append(f"Protocole inconnu « {r['protocole']} » ({r['initiales'] or '?'}, {r['horodateur']})")
            continue
        derniere[p["id"]] = r            # le tableur est chronologique : la dernière fait foi

    modifs = []
    for pid, r in derniere.items():
        p = next(x for x in protos if x["id"] == pid)
        avant = {"statut": nettoyer(p["statut"]), "inclus": nettoyer(p.get("inclus")),
                 "maj_le": nettoyer(p.get("maj_le"))}

        statut_lu = r.get("statut", "")
        code = STATUTS.get(norm_statut(statut_lu), "")
        if statut_lu and not code:
            anomalies.append(f"{p['acronyme']} : statut non reconnu « {statut_lu} »")

        inclus = r.get("inclus", "").replace(" ", "")
        if inclus and not inclus.isdigit():
            anomalies.append(f"{p['acronyme']} : nombre d'inclusions invalide « {inclus} »")
            inclus = ""

        statut_egal = not code or norm_statut(code) == norm_statut(avant["statut"])
        inclus_egal = not inclus or inclus == avant["inclus"]
        date_rep = date_fr(r["horodateur"])
        plus_recente = (en_date(date_rep) or datetime.min) > (en_date(avant["maj_le"]) or datetime.min)

        apres = {"statut": avant["statut"] if statut_egal else code,
                 "inclus": avant["inclus"] if inclus_egal else inclus,
                 "maj_le": avant["maj_le"]}
        contenu_change = not (statut_egal and inclus_egal)
        if plus_recente and (contenu_change or DATE_SI_CONFIRMATION):
            apres["maj_le"] = date_rep
        if apres == avant: continue

        p.update(apres)
        modifs.append((p, avant, apres, r, statut_egal, inclus_egal))

    for a in anomalies: print("⚠️ " + a, file=sys.stderr)
    if not modifs:
        print("Aucune modification."); return

    with open("protocoles.csv", "w", encoding="utf-8-sig" if bom else "utf-8", newline="") as f:
        w = csv.DictWriter(f, colonnes, delimiter=";", lineterminator=fin)
        w.writeheader(); w.writerows(protos)

    nom_statut = lambda s: NOMS.get(norm_statut(s), s)
    lignes = ["Mise à jour à partir des réponses du formulaire. **À relire avant d'accepter.**\n",
              "| Protocole | Statut | Inclusions | Mis à jour le | Initiales | Réponse du |",
              "|---|---|---|---|---|---|"]
    for p, a, n, r, s_eg, i_eg in modifs:
        lignes.append(f"| {md(p['acronyme'].strip())} "
                      f"| {fleche(a['statut'], n['statut'], s_eg, nom_statut)} "
                      f"| {fleche(a['inclus'], n['inclus'], i_eg)} "
                      f"| {fleche(a['maj_le'], n['maj_le'], a['maj_le'] == n['maj_le'])} "
                      f"| {md(r['initiales']) or 'non précisé'} | {r['horodateur']} |")
    if anomalies:
        lignes += ["\n### ⚠️ Anomalies (non appliquées)\n"] + [f"- {md(a)}" for a in anomalies]
    lignes.append(f"\n_Pour écarter définitivement une réponse, ajoutez son horodateur dans `{FICHIER_IGNORES}`._")
    open("resume-pr.md", "w", encoding="utf-8").write("\n".join(lignes) + "\n")
    print(f"{len(modifs)} protocole(s) mis à jour.")


if __name__ == "__main__":
    main()
