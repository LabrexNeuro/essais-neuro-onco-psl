/* ------------------------------------------------------------------
   MOTEUR D'ÉLIGIBILITÉ
   Fichier technique : il n'y a normalement rien à modifier ici.
   Les protocoles se modifient dans protocoles.js, les champs de saisie
   dans champs.js, les réglages dans config.js.
   ------------------------------------------------------------------ */
(function (racine) {
  "use strict";

  var OPERATEURS = ["=", "!=", ">=", "<=", ">", "<", "dans", "pasdans"];
  var STATUTS_VALIDES = ["ouvert", "en_preparation", "suspendu", "clos"];

  // Index des champs par identifiant.
  function indexer(champs) {
    var idx = {};
    champs.forEach(function (s) {
      s.champs.forEach(function (c) {
        // La condition d'affichage de la section s'ajoute à celle du champ.
        var si = s.si ? (c.si ? { et: [s.si, c.si] } : s.si) : c.si;
        var def = {}; for (var k in c) def[k] = c[k];
        if (si) def.si = si;
        idx[c.id] = def;
      });
    });
    return idx;
  }

  // Valeur "effective" d'un champ : un champ masqué compte comme non renseigné
  // (ou "Non" pour une case à cocher). Renvoie null quand l'information manque.
  function valeur(id, idx, brut) {
    var def = idx[id];
    var v = brut[id];
    if (def && def.si) {
      var visible = evaluerCondition(def.si, function (i) { return valeur(i, idx, brut); });
      if (visible !== true) v = undefined;
      // Masqué faute de réponse préalable (condition inconnue) : on ne sait pas, ce n'est pas « absent ».
      if (visible === null && def.type === "case") return null;
    }
    if (def && def.type === "case") return v === true;
    if (v === undefined || v === null || v === "") return null;
    if (def && def.type === "nombre") {
      var n = Number(v);
      return isFinite(n) ? n : null;
    }
    return v;
  }

  function et(liste) {
    if (liste.indexOf(false) !== -1) return false;
    if (liste.indexOf(null) !== -1) return null;
    return true;
  }
  function ou(liste) {
    if (liste.indexOf(true) !== -1) return true;
    if (liste.indexOf(null) !== -1) return null;
    return false;
  }

  // Logique à trois valeurs : true, false, ou null (information manquante).
  function evaluerCondition(c, get) {
    if (c.et) return et(c.et.map(function (x) { return evaluerCondition(x, get); }));
    if (c.ou) return ou(c.ou.map(function (x) { return evaluerCondition(x, get); }));
    if (c.non) {
      var r = evaluerCondition(c.non, get);
      return r === null ? null : !r;
    }
    var v = get(c.champ);
    if (v === null || v === undefined) return null;
    switch (c.op) {
      case "=": return String(v) === String(c.val);
      case "!=": return String(v) !== String(c.val);
      case ">=": return Number(v) >= c.val;
      case "<=": return Number(v) <= c.val;
      case ">": return Number(v) > c.val;
      case "<": return Number(v) < c.val;
      case "dans": return c.val.map(String).indexOf(String(v)) !== -1;
      case "pasdans": return c.val.map(String).indexOf(String(v)) === -1;
      default: throw new Error("Opérateur inconnu : " + c.op);
    }
  }

  // Identifiants de champs cités dans une condition.
  function champsCites(c, sortie) {
    sortie = sortie || [];
    if (!c) return sortie;
    ["et", "ou"].forEach(function (k) {
      if (c[k]) c[k].forEach(function (x) { champsCites(x, sortie); });
    });
    if (c.non) champsCites(c.non, sortie);
    if (c.champ && sortie.indexOf(c.champ) === -1) sortie.push(c.champ);
    return sortie;
  }

  // Évalue un protocole. Chaque critère reçoit un état :
  //   ok      critère d'inclusion rempli / critère de non-inclusion absent
  //   ko      critère d'inclusion non rempli / critère de non-inclusion présent
  //   inconnu information manquante pour trancher
  //   manuel  critère que l'outil ne peut pas évaluer (à confirmer en consultation)
  function evaluerProtocole(p, get) {
    var resultats = p.criteres.map(function (c) {
      if (c.manuel) return { critere: c, etat: "manuel" };
      var r = evaluerCondition(c.cond, get);
      var etat;
      if (r === null) etat = "inconnu";
      else if (c.type === "inclusion") etat = r ? "ok" : "ko";
      else etat = r ? "ko" : "ok";
      return { critere: c, etat: etat };
    });
    var bloquants = resultats.filter(function (x) { return x.etat === "ko"; });
    var manquants = resultats.filter(function (x) { return x.etat === "inconnu"; });
    var manuels = resultats.filter(function (x) { return x.etat === "manuel"; });
    var statut = bloquants.length ? "non" : manquants.length ? "verifier" : "compatible";
    return { resultats: resultats, bloquants: bloquants, manquants: manquants, manuels: manuels, statut: statut };
  }

  // Mise en forme d'une valeur saisie (affichage).
  function formater(def, v) {
    if (v === null || v === undefined) return "Non renseigné";
    if (def.type === "case") return v ? "Oui" : "Non";
    if (def.type === "liste") {
      for (var i = 0; i < def.options.length; i++) {
        if (String(def.options[i][0]) === String(v)) return def.options[i][1];
      }
      return String(v);
    }
    return String(v).replace(".", ",") + (def.unite ? " " + def.unite : "");
  }

  // Contrôle du fichier protocoles.js : renvoie la liste des anomalies détectées.
  function valider(protocoles, idx) {
    var msgs = [];
    var vus = {};
    function verifCond(c, ou_, p) {
      if (!c || typeof c !== "object") { msgs.push(ou_ + " : condition manquante."); return; }
      if (c.et || c.ou) {
        var liste = c.et || c.ou;
        if (!Array.isArray(liste)) { msgs.push(ou_ + " : 'et'/'ou' doit contenir une liste."); return; }
        liste.forEach(function (x) { verifCond(x, ou_, p); });
        return;
      }
      if (c.non) { verifCond(c.non, ou_, p); return; }
      var def = idx[c.champ];
      if (!def) { msgs.push(ou_ + " : champ inconnu « " + c.champ + " »."); return; }
      if (OPERATEURS.indexOf(c.op) === -1) { msgs.push(ou_ + " : opérateur inconnu « " + c.op + " »."); return; }
      if (c.op === "dans" || c.op === "pasdans") {
        if (!Array.isArray(c.val)) { msgs.push(ou_ + " : « " + c.op + " » attend une liste de valeurs entre crochets."); return; }
      }
      if (def.type === "nombre" && [">=", "<=", ">", "<", "=", "!="].indexOf(c.op) !== -1 && typeof c.val !== "number") {
        msgs.push(ou_ + " : le champ « " + c.champ + " » attend un nombre.");
      }
      if (def.type === "liste") {
        var permis = def.options.map(function (o) { return String(o[0]); });
        [].concat(c.val).forEach(function (x) {
          if (permis.indexOf(String(x)) === -1) msgs.push(ou_ + " : valeur « " + x + " » absente des choix du champ « " + c.champ + " ».");
        });
      }
    }
    protocoles.forEach(function (p, i) {
      var nom = p.acronyme || p.id || "Protocole n°" + (i + 1);
      if (!p.id) msgs.push(nom + " : identifiant 'id' manquant.");
      else if (vus[p.id]) msgs.push(nom + " : identifiant 'id' en double (" + p.id + ").");
      vus[p.id] = true;
      if (!p.acronyme) msgs.push(nom + " : 'acronyme' manquant.");
      if (!p.titre) msgs.push(nom + " : 'titre' manquant.");
      if (STATUTS_VALIDES.indexOf(p.statut) === -1) msgs.push(nom + " : 'statut' doit valoir " + STATUTS_VALIDES.join(", ") + ".");
      if (!Array.isArray(p.criteres) || !p.criteres.length) { msgs.push(nom + " : aucun critère."); return; }
      p.criteres.forEach(function (c, j) {
        var ou_ = nom + ", critère " + (j + 1);
        if (c.type !== "inclusion" && c.type !== "non-inclusion") msgs.push(ou_ + " : 'type' doit valoir inclusion ou non-inclusion.");
        if (!c.texte) msgs.push(ou_ + " : 'texte' manquant.");
        if (!c.manuel) verifCond(c.cond, ou_, p);
      });
    });
    return msgs;
  }

  var API = {
    OPERATEURS: OPERATEURS,
    indexer: indexer,
    valeur: valeur,
    evaluerCondition: evaluerCondition,
    evaluerProtocole: evaluerProtocole,
    champsCites: champsCites,
    formater: formater,
    valider: valider
  };
  racine.MOTEUR = API;
  if (typeof module !== "undefined" && module.exports) module.exports = API;
})(typeof window !== "undefined" ? window : globalThis);
