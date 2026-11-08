/* ------------------------------------------------------------------
   CHAMPS DE SAISIE (page « Orienter un patient ») - version 35 essais
   Ordre : 1. Maladie  2. Chirurgie et imagerie  3. Traitements  4. Patient.
   Le formulaire s'adapte : chaque question n'apparaît que si elle sert à
   départager des essais pour le diagnostic choisi (propriété « si »).
   Une section sans question visible est masquée.
   Aucun résultat biologique n'est demandé : ces critères sont signalés
   « à confirmer en consultation ».

   type : "nombre" (valeur libre) | "liste" (options : [valeur, libellé]) | "case"
   si   : le champ (ou la section) n'apparaît que si la condition est vraie.
          Un champ masqué compte comme « non renseigné » (case : « absent »).
   Règle : une situation dont l'ABSENCE est la règle est une case (décochée = absente) ;
   une information qui doit être POSITIVE pour inclure est une liste (« non renseigné »
   laisse l'essai « à vérifier » au lieu de l'exclure à tort).
   Éviter les valeurs oui / non / vrai / faux dans les listes (réservées à l'import CSV).
   ------------------------------------------------------------------ */
(function () {
  var GLIOMES = ["glioblastome", "astro_idh", "oligo", "dmg", "gliome_autre"];
  var NEURO = ["encephalite_ai", "nsp"];
  var GBM = { champ: "diagnostic", op: "=", val: "glioblastome" };
  var GLIO = { champ: "diagnostic", op: "dans", val: GLIOMES };
  var GLIO_AUTRE = { champ: "diagnostic", op: "dans", val: GLIOMES.concat(["autre"]) };
  var PAS_NEURO = { champ: "diagnostic", op: "pasdans", val: NEURO };
  var APRES_DEBUT = ["traitement_initial", "recidive1", "recidive2", "surveillance"];
  var KPS = [
    ["100", "100 · Aucun symptôme (OMS 0)"], ["90", "90 · Symptômes mineurs (OMS 0)"],
    ["80", "80 · Activité normale avec effort (OMS 1)"], ["70", "70 · Autonome, activité normale impossible (OMS 1)"],
    ["60", "60 · Aide occasionnelle (OMS 2)"], ["50", "50 · Aide et soins fréquents (OMS 2)"],
    ["40", "40 · Invalide (OMS 3)"], ["30", "30 · Grabataire (OMS 3)"], ["20", "20 · Très malade (OMS 4)"], ["10", "10 · Moribond (OMS 4)"]
  ];
  var MRS = [
    ["0", "0 · Aucun symptôme"], ["1", "1 · Pas de handicap significatif"], ["2", "2 · Handicap léger"],
    ["3", "3 · Handicap modéré, marche sans aide"], ["4", "4 · Handicap modérément sévère"], ["5", "5 · Handicap sévère, alité"]
  ];

  window.CHAMPS = [
    { section: "Maladie", champs: [
      { id: "diagnostic", type: "liste", label: "Diagnostic", options: [
        ["glioblastome", "Glioblastome"], ["astro_idh", "Astrocytome"],
        ["oligo", "Oligodendrogliome"], ["dmg", "Gliome de la ligne médiane"],
        ["gliome_autre", "Autre gliome"], ["meningiome", "Méningiome"],
        ["lcp", "Lymphome cérébral primitif"], ["meta_melanome", "Métastases cérébrales de mélanome"],
        ["meta_autre", "Autres métastases cérébrales"], ["encephalite_ai", "Encéphalite auto-immune"],
        ["nsp", "Neuronopathie sensitive"], ["autre", "Autre diagnostic"]] },
      { id: "grade", type: "liste", label: "Grade OMS", options: [["1", "Grade 1"], ["2", "Grade 2"], ["3", "Grade 3"], ["4", "Grade 4"]],
        si: { champ: "diagnostic", op: "dans", val: ["astro_idh", "oligo", "gliome_autre", "meningiome"] } },
      { id: "situation", type: "liste", label: "Où en est la maladie ?", options: [
        ["nouveau", "Nouveau diagnostic, avant tout traitement (hors chirurgie)"],
        ["traitement_initial", "Traitement initial en cours ou terminé (1re ligne)"],
        ["recidive1", "Première récidive ou progression, pas encore traitée"],
        ["recidive2", "Récidive ultérieure, ou récidive déjà traitée"],
        ["surveillance", "Surveillance, maladie stable, à distance des traitements"]],
        si: { champ: "diagnostic", op: "pasdans", val: NEURO.concat(["meningiome", "meta_melanome", "meta_autre", "autre"]) } }
    ] },

    { section: "Marqueurs tumoraux", champs: [
      { id: "mgmt", type: "liste", label: "Promoteur MGMT", options: [["methyle", "Méthylé"], ["non_methyle", "Non méthylé"]],
        si: { et: [GBM, { champ: "situation", op: "=", val: "nouveau" }] } },
      { id: "hla_a2", type: "liste", label: "Typage HLA-A2", options: [["positif", "HLA-A2 positif"], ["negatif", "HLA-A2 négatif"]],
        si: { et: [GBM, { champ: "situation", op: "dans", val: ["nouveau", "traitement_initial"] }] } },
      { id: "ptprz1", type: "liste", label: "Expression de PTPRZ1", options: [["exprime", "Exprimé"], ["non_exprime", "Non exprimé"]],
        si: { et: [GBM, { champ: "situation", op: "dans", val: ["nouveau", "traitement_initial"] }] } },
      { id: "braf", type: "liste", label: "Mutation BRAF V600 ou fusion BRAF", options: [["presente", "Présente"], ["absente", "Absente"]], si: GLIO_AUTRE },
      { id: "mtap", type: "liste", label: "Délétion MTAP", options: [["presente", "Présente"], ["absente", "Absente"]], si: GLIO_AUTRE },
      { id: "fgfr", type: "liste", label: "Altération FGFR1/2/3 (fusion ou mutation)", options: [["presente", "Présente"], ["absente", "Absente"]],
        si: { champ: "diagnostic", op: "pasdans", val: NEURO.concat(["lcp"]) } }
    ] },

    { section: "Chirurgie et imagerie", si: GLIO, champs: [
      { id: "chirurgie", type: "liste", label: "Chirurgie (de la tumeur ou de la récidive)", options: [
        ["a_venir", "Réalisable, pas encore faite"], ["biopsie", "Biopsie seule"],
        ["partielle", "Exérèse partielle (reliquat)"], ["complete", "Exérèse complète"]], si: GBM },
      { id: "taille", type: "liste", label: "Plus grande lésion à l'IRM", options: [
        ["t35", "Moins de 3,5 cm"], ["t5", "De 3,5 à 5 cm"], ["t7", "De 5 à 7 cm"], ["t7plus", "Plus de 7 cm"]], si: GBM },
      { id: "siege", type: "liste", label: "Siège de la tumeur", options: [["sus", "Sus-tentoriel"], ["sous", "Sous-tentoriel (tronc cérébral, cervelet)"]] },
      { id: "leptomeninge", type: "case", label: "Atteinte leptoméningée" }
    ] },

    { section: "Méningiome", si: { champ: "diagnostic", op: "=", val: "meningiome" }, champs: [
      { id: "evolution_men", type: "liste", label: "Où en est le méningiome ?", options: [
        ["a_traiter", "Pas encore traité (avant chirurgie ou radiothérapie)"],
        ["apres_chir", "Opéré, sans radiothérapie"],
        ["apres_rt", "Opéré et irradié, sans progression"],
        ["refractaire", "Opéré et irradié, en progression (réfractaire)"]] },
      { id: "ttt_syst", type: "case", label: "Traitement systémique déjà reçu (hors chirurgie et radiothérapie)" },
      { id: "localisation", type: "liste", label: "Localisation", options: [["sinus", "Sinus caverneux (ou base du crâne antérieure envahissant le sinus caverneux)"], ["autre", "Autre localisation"]] },
      { id: "tep_somato", type: "liste", label: "TEP aux récepteurs de la somatostatine", options: [["positive", "Positive"], ["negative", "Négative"]] }
    ] },

    { section: "Lymphome cérébral primitif", si: { champ: "diagnostic", op: "=", val: "lcp" }, champs: [
      { id: "lcp_extension", type: "liste", label: "Localisation de la maladie", options: [
        ["cerebral", "Cérébrale uniquement"], ["lcr", "Liquide cérébrospinal isolé"], ["oeil", "Oculaire isolée"], ["systemique", "Cérébrale et systémique"]] },
      { id: "mtx_hd", type: "liste", label: "Méthotrexate haute dose en 1re ligne", options: [["recu", "Reçu"], ["non_recu", "Non reçu"]] },
      { id: "ibtk", type: "liste", label: "Ibrutinib (ou autre inhibiteur de BTK)", options: [["recu", "Déjà reçu"], ["non_recu", "Jamais reçu"]] },
      { id: "retard_mtx", type: "liste", label: "Élimination du méthotrexate", options: [["retard", "Retard d'élimination ou risque de toxicité"], ["normale", "Normale"]] }
    ] },

    { section: "Encéphalite et neuronopathie", si: { champ: "diagnostic", op: "dans", val: NEURO }, champs: [
      { id: "anticorps", type: "liste", label: "Anticorps", options: [["nmda", "Anti-NMDAR"], ["lgi1", "Anti-LGI1"], ["hu", "Anti-Hu"], ["autre", "Autre anticorps ou séronégatif"]] },
      { id: "debut_sympt", type: "nombre", label: "Délai depuis le début des symptômes", unite: "mois", min: 0, max: 600, step: "any" },
      { id: "mrs", type: "liste", label: "Score de Rankin modifié (mRS)", options: MRS }
    ] },

    { section: "Traitements", si: GLIO, champs: [
      { id: "traitement_prevu", type: "liste", label: "Traitement envisagé", options: [
        ["stupp", "Radiochimiothérapie de Stupp standard (60 Gy)"], ["hypofractionne", "Radiothérapie hypofractionnée ou Stupp accéléré (patient âgé)"],
        ["pas_stupp", "Pas de Stupp standard (patient fragile)"]],
        si: { et: [GBM, { champ: "situation", op: "=", val: "nouveau" }] } },
      { id: "rt_cerebrale", type: "case", label: "Radiothérapie cérébrale déjà reçue",
        si: { champ: "situation", op: "dans", val: APRES_DEBUT } },
      { id: "delai_rt", type: "nombre", label: "Délai depuis la fin de la radiothérapie", unite: "semaines", min: 0, max: 1000, step: 1,
        si: { champ: "rt_cerebrale", op: "=", val: true } },
      { id: "chimio", type: "case", label: "Chimiothérapie antérieure (témozolomide, PCV…), hors vorasidenib",
        si: { champ: "situation", op: "dans", val: APRES_DEBUT } },
      { id: "nitrosouree", type: "case", label: "Nitroso-urée déjà reçue (lomustine, carmustine, PCV)",
        si: { et: [GLIO, { champ: "situation", op: "dans", val: APRES_DEBUT }] } },
      { id: "bevacizumab", type: "case", label: "Bévacizumab déjà reçu",
        si: { et: [GLIO, { champ: "situation", op: "dans", val: APRES_DEBUT }] } }
    ] },

    { section: "Patient", champs: [
      { id: "age", type: "nombre", label: "Âge", unite: "ans", min: 0, max: 120, step: "any" },
      { id: "kps", type: "liste", label: "Indice de performance (Karnofsky, équivalent OMS)", options: KPS, si: PAS_NEURO },
      { id: "dexa", type: "nombre", label: "Corticoïdes, en équivalent dexaméthasone", unite: "mg/j", min: 0, max: 100, step: "any",
        placeholder: "0 si aucun", si: PAS_NEURO },
      { id: "cortico_stable", type: "liste", label: "Corticoïdes sur les 7 derniers jours", options: [["stable", "Dose stable ou en baisse"], ["hausse", "Dose augmentée"]],
        si: { champ: "dexa", op: ">", val: 0 } }
    ] },

    { section: "À cocher si présent", champs: [
      { id: "grossesse", type: "case", label: "Grossesse ou allaitement", si: PAS_NEURO },
      { id: "epilepsie_nc", type: "case", label: "Épilepsie non contrôlée", si: PAS_NEURO },
      { id: "auto_immune", type: "case", label: "Maladie auto-immune ou dysimmunitaire", si: PAS_NEURO },
      { id: "irm_ci", type: "case", label: "Contre-indication à l'IRM ou au gadolinium", si: PAS_NEURO },
      { id: "autre_cancer", type: "case", label: "Autre cancer actif ou dans les 5 dernières années" },
      { id: "immunodep", type: "case", label: "Immunodépression (dont VIH, hépatite B ou C)" }
    ] }
  ];
})();
