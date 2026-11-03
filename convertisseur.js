/* ------------------------------------------------------------------
   CONVERTISSEUR CSV -> protocoles.js
   Fichier technique : rien à modifier ici. Le mode d'emploi est dans la
   page « Études en cours », rubrique « Mettre à jour le dossier ».
   ------------------------------------------------------------------ */
(function (racine) {
  "use strict";

  var OPERATEURS = { egal: "=", "=": "=", different: "!=", "!=": "!=", ">=": ">=", "<=": "<=", ">": ">", "<": "<", dans: "dans", pasdans: "pasdans" };
  var STATUTS = ["ouvert", "en_preparation", "suspendu", "clos"];

  // Lecture d'un CSV (séparateur ; , ou tabulation détecté, guillemets, UTF-8 avec ou sans BOM).
  function lireCSV(texte) {
    texte = String(texte || "").replace(/^﻿/, "");
    var premiere = texte.split(/\r?\n/)[0] || "";
    var delim = ";";
    var nbPv = (premiere.match(/;/g) || []).length, nbV = (premiere.match(/,/g) || []).length, nbT = (premiere.match(/\t/g) || []).length;
    if (nbT > nbPv && nbT > nbV) delim = "\t"; else if (nbV > nbPv) delim = ",";
    var lignes = [], ligne = [], champ = "", guillemets = false;
    for (var i = 0; i < texte.length; i++) {
      var c = texte[i];
      if (guillemets) {
        if (c === '"') { if (texte[i + 1] === '"') { champ += '"'; i++; } else guillemets = false; }
        else champ += c;
      } else if (c === '"') guillemets = true;
      else if (c === delim) { ligne.push(champ); champ = ""; }
      else if (c === "\n" || c === "\r") {
        if (c === "\r" && texte[i + 1] === "\n") i++;
        ligne.push(champ); champ = ""; lignes.push(ligne); ligne = [];
      } else champ += c;
    }
    if (champ !== "" || ligne.length) { ligne.push(champ); lignes.push(ligne); }
    if (!lignes.length) return [];
    var entete = lignes[0].map(function (h) { return h.trim(); });
    var sortie = [];
    for (var n = 1; n < lignes.length; n++) {
      var l = lignes[n];
      if (!l.some(function (v) { return v.trim() !== ""; })) continue;
      var o = { _ligne: n + 1 };
      entete.forEach(function (h, j) { if (h) o[h] = (l[j] || "").trim(); });
      sortie.push(o);
    }
    return sortie;
  }

  function valeur(brut) {
    var b = String(brut).trim(), m = b.toLowerCase();
    if (m === "vrai" || m === "true" || m === "oui") return true;
    if (m === "faux" || m === "false" || m === "non") return false;
    if (/^-?\d+([.,]\d+)?$/.test(b)) return Number(b.replace(",", "."));
    return b;
  }
  // Tolère « Ouvert », « En préparation », « Clos »… (majuscules, accents, espaces).
  function normStatut(x) {
    var s = String(x || "").trim().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[\s-]+/g, "_");
    return s;
  }
  function oui(x) { return ["oui", "o", "vrai", "true", "1", "x"].indexOf(String(x || "").trim().toLowerCase()) !== -1; }
  // Excel réécrit parfois 2026-09-14 en 14/09/2026.
  function dateIso(d) {
    var m = /^(\d{1,2})\/(\d{1,2})\/(\d{4})$/.exec(d || "");
    if (!m) return d || "";
    return m[3] + "-" + ("0" + m[2]).slice(-2) + "-" + ("0" + m[1]).slice(-2);
  }
  function jourIso(date) {
    var d = date || new Date();
    return d.getFullYear() + "-" + ("0" + (d.getMonth() + 1)).slice(-2) + "-" + ("0" + d.getDate()).slice(-2);
  }

  function convertir(texteProtocoles, texteCriteres, options) {
    options = options || {};
    var erreurs = [];
    var prots = lireCSV(texteProtocoles), crits = lireCSV(texteCriteres);
    if (!prots.length) erreurs.push("protocoles.csv : aucune ligne lue. Vérifier que le bon fichier a été choisi.");
    if (!crits.length) erreurs.push("criteres.csv : aucune ligne lue. Vérifier que le bon fichier a été choisi.");
    if (erreurs.length) return { erreurs: erreurs };

    var vus = {};
    var sortie = prots.map(function (p) {
      var id = p.id || "";
      p.statut = normStatut(p.statut);
      if (!id) erreurs.push("protocoles.csv ligne " + p._ligne + " : identifiant « id » manquant");
      else if (vus[id]) erreurs.push("protocoles.csv : identifiant en double « " + id + " »");
      vus[id] = true;
      if (STATUTS.indexOf(p.statut) === -1) erreurs.push(id + " : statut « " + (p.statut || "") + " » invalide (" + STATUTS.join(", ") + ")");
      var o = {
        id: id, acronyme: p.acronyme || "", titre: p.titre || "", resume: p.resume || "", phase: p.phase || "",
        pathologie: p.pathologie || "", promoteur: p.promoteur || "", investigateur: p.investigateur || "", identifiant: p.identifiant || "",
        contact: { nom: p.contact_nom || "", email: p.contact_email || "", tel: p.contact_tel || "" },
        statut: p.statut
      };
      if (p.objectif || p.inclus) {
        var inc = parseInt(p.inclus || "0", 10), obj = parseInt(p.objectif || "0", 10);
        if (isNaN(inc) || isNaN(obj)) erreurs.push(id + " : « inclus » et « objectif » doivent être des nombres entiers");
        else o.recrutement = { inclus: inc, objectif: obj };
      }
      o.document = p.document || "";
      o.majLe = dateIso(p.maj_le);
      if (oui(p.fictif)) o.fictif = true;
      o.criteres = [];
      return o;
    });
    var parId = {};
    sortie.forEach(function (o) { parId[o.id] = o; });

    // Les lignes consécutives de même protocole, type et texte forment un seul critère.
    var clePrec = null, courant = null;
    crits.forEach(function (c) {
      var pid = c.protocole_id || "";
      var ou = "criteres.csv ligne " + c._ligne;
      if (!parId[pid]) { erreurs.push(ou + " : protocole « " + pid + " » absent de protocoles.csv"); return; }
      if (c.type !== "inclusion" && c.type !== "non-inclusion") { erreurs.push(ou + " : type « " + (c.type || "") + " » invalide (inclusion ou non-inclusion)"); return; }
      if (!c.texte) { erreurs.push(ou + " : texte du critère manquant"); return; }
      var cle = pid + "\u0001" + c.type + "\u0001" + c.texte;
      if (oui(c.a_confirmer)) {
        parId[pid].criteres.push({ type: c.type, texte: c.texte, manuel: true });
        clePrec = null; courant = null; return;
      }
      var op = OPERATEURS[(c.operateur || "").toLowerCase()];
      if (!c.champ || !op) { erreurs.push(ou + " : champ ou opérateur manquant ou invalide (« " + (c.operateur || "") + " »)"); return; }
      var val;
      if (op === "dans" || op === "pasdans") val = (c.valeur || "").split("|").filter(function (x) { return x.trim() !== ""; }).map(valeur);
      else if ((c.valeur || "") === "") { erreurs.push(ou + " : valeur manquante"); return; }
      else val = valeur(c.valeur);
      var simple = { champ: c.champ, op: op, val: val };
      if (cle === clePrec && courant) {
        var liste = courant.cond.et || courant.cond.ou;
        if (liste) liste.push(simple);
        else { var lien = (c.combinaison || "et").toLowerCase() === "ou" ? "ou" : "et"; var cond = {}; cond[lien] = [courant.cond, simple]; courant.cond = cond; }
      } else {
        courant = { type: c.type, texte: c.texte, cond: simple };
        parId[pid].criteres.push(courant);
        clePrec = cle;
      }
    });
    sortie.forEach(function (o) { if (o.id && !o.criteres.length) erreurs.push(o.id + " : aucun critère dans criteres.csv"); });
    if (erreurs.length) return { erreurs: erreurs };

    var meta = { majLe: jourIso(options.aujourdhui), responsable: options.responsable || "" };
    var contenu =
      "/* Fichier généré à partir de protocoles.csv et criteres.csv.\n" +
      "   Pour modifier le dossier : corriger les CSV puis refaire la conversion dans la page « Études en cours ». */\n\n" +
      "window.DOSSIER_META = " + JSON.stringify(meta, null, 2) + ";\n\n" +
      "window.PROTOCOLES = " + JSON.stringify(sortie, null, 2) + ";\n";
    return { erreurs: [], contenu: contenu, protocoles: sortie };
  }

  var API = { lireCSV: lireCSV, convertir: convertir };
  racine.CONVERTISSEUR = API;
  if (typeof module !== "undefined" && module.exports) module.exports = API;
})(typeof window !== "undefined" ? window : globalThis);
