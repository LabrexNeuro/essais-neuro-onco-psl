/* ------------------------------------------------------------------
   CHAMPS DE SAISIE (page « Orienter un patient »)
   Chaque champ a un identifiant (id) que les protocoles utilisent dans
   leurs critères. Pour ajouter un champ : copier une ligne, changer
   l'id et le libellé, puis l'utiliser dans protocoles.js (ou criteres.csv).

   type : "nombre"  valeur libre (unite, min, max, step, placeholder)
          "liste"   liste déroulante (options : [valeur, libellé])
          "case"    case à cocher (décochée = absent)
   si   : (facultatif) le champ n'apparaît que si cette condition est vraie.
          Un champ masqué compte comme « non renseigné ».

   Règle de conception :
   - une information dont l'ABSENCE est la situation normale (allergie, comorbidité,
     traitement interdit) est une case à cocher : décochée = absente ;
   - une information qui doit être POSITIVE pour inclure (marqueur, maladie mesurable,
     résection possible) est une liste : « non renseigné » laisse le protocole « à vérifier »
     au lieu de l'exclure à tort.
   Dans les listes, éviter les valeurs oui / non / vrai / faux (réservées par l'import CSV).
   ------------------------------------------------------------------ */
window.CHAMPS = [
  {
    section: "Patient",
    champs: [
      { id: "age", type: "nombre", label: "Âge", unite: "ans", min: 0, max: 120, step: 1 },
      { id: "sexe", type: "liste", label: "Sexe", options: [["F", "Femme"], ["M", "Homme"]] },
      {
        id: "kps", type: "liste", label: "Indice de Karnofsky",
        options: [
          ["100", "100 · Aucun symptôme"],
          ["90", "90 · Activité normale, symptômes mineurs"],
          ["80", "80 · Activité normale avec effort"],
          ["70", "70 · Autonome, activité normale impossible"],
          ["60", "60 · Aide occasionnelle"],
          ["50", "50 · Aide et soins fréquents"],
          ["40", "40 · Invalide, soins spécialisés"],
          ["30", "30 · Grabataire, hospitalisation"],
          ["20", "20 · Très malade"],
          ["10", "10 · Moribond"]
        ]
      },
      {
        id: "oms", type: "liste", label: "Indice de performance OMS (ECOG)",
        options: [
          ["0", "0 · Activité normale"],
          ["1", "1 · Symptomatique, ambulatoire"],
          ["2", "2 · Alité moins de 50 % du temps"],
          ["3", "3 · Alité plus de 50 % du temps"],
          ["4", "4 · Alité en permanence"]
        ]
      }
    ]
  },
  {
    section: "Maladie",
    champs: [
      {
        id: "diagnostic", type: "liste", label: "Diagnostic",
        options: [
          ["glioblastome", "Glioblastome, IDH-sauvage"],
          ["astro_idh", "Astrocytome IDH-muté"],
          ["oligo", "Oligodendrogliome IDH-muté, codélété 1p/19q"],
          ["dmg", "Gliome diffus de la ligne médiane, H3 K27-altéré"],
          ["meningiome", "Méningiome"],
          ["metastases", "Métastases cérébrales"],
          ["lcp", "Lymphome cérébral primitif"],
          ["autre", "Autre diagnostic"]
        ]
      },
      {
        id: "grade", type: "liste", label: "Grade OMS",
        options: [["1", "Grade 1"], ["2", "Grade 2"], ["3", "Grade 3"], ["4", "Grade 4"]],
        si: { champ: "diagnostic", op: "dans", val: ["astro_idh", "oligo", "meningiome", "autre"] }
      },
      {
        id: "situation", type: "liste", label: "Situation actuelle",
        options: [
          ["nouveau", "Nouveau diagnostic, avant traitement adjuvant"],
          ["recidive1", "Première récidive ou progression"],
          ["recidive2", "Récidive ultérieure (2e et plus)"],
          ["surveillance", "Surveillance, maladie stable"]
        ]
      },
      {
        id: "chirurgie", type: "liste", label: "Chirurgie",
        options: [
          ["aucune", "Aucune"],
          ["biopsie", "Biopsie seule"],
          ["partielle", "Exérèse partielle"],
          ["complete", "Exérèse complète"]
        ]
      },
      {
        id: "mgmt", type: "liste", label: "Promoteur MGMT",
        options: [["methyle", "Méthylé"], ["non_methyle", "Non méthylé"]],
        si: { champ: "diagnostic", op: "=", val: "glioblastome" }
      },
      {
        id: "hla_a2", type: "liste", label: "Typage HLA-A2",
        options: [["positif", "HLA-A2 positif"], ["negatif", "HLA-A2 négatif"]],
        si: { champ: "diagnostic", op: "=", val: "glioblastome" }
      },
      {
        id: "ptprz1", type: "liste", label: "Expression de PTPRZ1",
        options: [["exprime", "Exprimé"], ["non_exprime", "Non exprimé"]],
        si: { champ: "diagnostic", op: "=", val: "glioblastome" }
      },
      {
        id: "primitif", type: "liste", label: "Cancer primitif",
        options: [
          ["poumon", "Poumon non à petites cellules"],
          ["melanome", "Mélanome"],
          ["sein", "Sein"],
          ["colorectal", "Colorectal"],
          ["rein", "Rein"],
          ["autre", "Autre"]
        ],
        si: { champ: "diagnostic", op: "=", val: "metastases" }
      },
      {
        id: "nb_metas", type: "nombre", label: "Nombre de métastases", min: 0, max: 100, step: 1,
        si: { champ: "diagnostic", op: "=", val: "metastases" }
      }
    ]
  },
  {
    section: "Imagerie et chirurgie",
    champs: [
      { id: "diametre_cm", type: "nombre", label: "Diamètre tumoral maximal à l'IRM actuelle", unite: "cm", min: 0, max: 20, step: "any", placeholder: "Après chirurgie si opéré" },
      {
        id: "mesurable", type: "liste", label: "Maladie mesurable (RANO)",
        options: [["mesurable", "Mesurable"], ["non_mesurable", "Non mesurable"]]
      },
      {
        id: "resecable", type: "liste", label: "Résection chirurgicale (totale ou partielle)",
        options: [["possible", "Possible"], ["impossible", "Non envisageable"]]
      },
      {
        id: "stupp", type: "liste", label: "Radiochimiothérapie de Stupp",
        options: [
          ["a_venir", "Éligible, pas encore débutée"],
          ["terminee", "Terminée (45 Gy ou plus), éligible au témozolomide adjuvant"],
          ["non_eligible", "Non éligible"]
        ],
        si: { champ: "situation", op: "=", val: "nouveau" }
      },
      { id: "infratentorielle", type: "case", label: "Tumeur infratentorielle (fosse postérieure)" },
      { id: "multifocal_large", type: "case", label: "Lésions multifocales non contenues dans une zone de 70 mm" },
      { id: "gliomatose", type: "case", label: "Gliomatose (anomalies FLAIR diffuses)" },
      { id: "engagement_falcoriel", type: "case", label: "Engagement sous-falcoriel à l'IRM" },
      { id: "zone_fonctionnelle", type: "case", label: "Prise de contraste en zone fonctionnelle" },
      { id: "htic", type: "case", label: "Hypertension intracrânienne non contrôlée" }
    ]
  },
  {
    section: "Traitements",
    champs: [
      { id: "lignes", type: "nombre", label: "Lignes systémiques antérieures", min: 0, max: 10, step: 1, placeholder: "0 si aucune" },
      { id: "dexa", type: "nombre", label: "Dexaméthasone (ou équivalent)", unite: "mg/j", min: 0, max: 100, step: "any", placeholder: "0 si aucune" },
      {
        id: "cortico_stable", type: "liste", label: "Évolution des corticoïdes sur les 7 derniers jours",
        options: [["stable", "Dose stable ou en baisse"], ["hausse", "Dose augmentée"]],
        si: { champ: "dexa", op: ">", val: 0 }
      },
      {
        id: "delai_rt", type: "nombre", label: "Délai depuis la fin de la radiothérapie", unite: "semaines", min: 0, max: 1000, step: 1,
        si: { champ: "rt_cerebrale", op: "=", val: true }
      },
      {
        id: "rt_fractions", type: "nombre", label: "Nombre de fractions de la radiothérapie", min: 0, max: 60, step: 1,
        si: { champ: "rt_cerebrale", op: "=", val: true }
      },
      { id: "rt_cerebrale", type: "case", label: "Radiothérapie cérébrale" },
      { id: "temozolomide", type: "case", label: "Témozolomide" },
      { id: "nitrosouree", type: "case", label: "Nitroso-urée" },
      { id: "bevacizumab", type: "case", label: "Bévacizumab" },
      { id: "immunotherapie", type: "case", label: "Immunothérapie" },
      {
        id: "ttt_recidive", type: "case", label: "Traitement anticancéreux déjà reçu pour la récidive (hors chirurgie)",
        si: { champ: "situation", op: "dans", val: ["recidive1", "recidive2"] }
      },
      { id: "anticoag", type: "case", label: "Anticoagulation curative" },
      { id: "antiplaquettaire", type: "case", label: "Antiagrégant plaquettaire à poursuivre" },
      { id: "vaccin_vivant", type: "case", label: "Vaccin vivant atténué dans les 3 derniers mois" },
      { id: "med_experimental", type: "case", label: "Médicament expérimental dans les 30 derniers jours" },
      { id: "antibio_neurotoxique", type: "case", label: "Antibiotique neurotoxique (aminosides, céphalosporines, quinolones)" }
    ]
  },
  {
    section: "Biologie",
    champs: [
      { id: "hemoglobine", type: "nombre", label: "Hémoglobine", unite: "g/dL", min: 0, max: 25, step: "any" },
      { id: "leucocytes", type: "nombre", label: "Leucocytes", unite: "G/L", min: 0, max: 200, step: "any" },
      { id: "pnn", type: "nombre", label: "Polynucléaires neutrophiles", unite: "G/L", min: 0, max: 100, step: "any" },
      { id: "plaquettes", type: "nombre", label: "Plaquettes", unite: "G/L", min: 0, max: 2000, step: "any" },
      { id: "lymphocytes", type: "nombre", label: "Lymphocytes", unite: "G/L", min: 0, max: 100, step: "any" },
      { id: "dfg", type: "nombre", label: "Débit de filtration glomérulaire", unite: "mL/min", min: 0, max: 200, step: "any" },
      { id: "transaminases", type: "nombre", label: "ASAT / ALAT", unite: "× limite sup.", min: 0, max: 100, step: "any" },
      { id: "bilirubine", type: "nombre", label: "Bilirubine totale", unite: "× limite sup.", min: 0, max: 100, step: "any" },
      { id: "pal", type: "nombre", label: "Phosphatases alcalines", unite: "× limite sup.", min: 0, max: 100, step: "any" },
      { id: "coag_anormale", type: "case", label: "TP ou TCA hors des limites du laboratoire" }
    ]
  },
  {
    section: "Comorbidités à cocher si présentes",
    champs: [
      { id: "grossesse", type: "case", label: "Grossesse ou allaitement" },
      { id: "epilepsie", type: "case", label: "Épilepsie non contrôlée" },
      { id: "hemorragie", type: "case", label: "Hémorragie intracrânienne récente" },
      { id: "leptomeninge", type: "case", label: "Atteinte leptoméningée" },
      { id: "cancer_actif", type: "case", label: "Autre cancer actif ou traité depuis moins de 3 ans" },
      { id: "infection", type: "case", label: "Infection active ou chronique instable nécessitant un traitement" },
      { id: "vih", type: "case", label: "Infection par le VIH" },
      { id: "immunosupp", type: "case", label: "Traitement immunosuppresseur" },
      { id: "dysimmune", type: "case", label: "Maladie dysimmunitaire" },
      { id: "hemopathie", type: "case", label: "Leucémie aiguë ou maladie myéloïde (antécédent ou actuelle)" },
      { id: "insuff_organe", type: "case", label: "Myélosuppression ou insuffisance rénale sévère" },
      { id: "hta3", type: "case", label: "Hypertension artérielle de grade 3 ou plus non contrôlée" },
      { id: "cardiopathie", type: "case", label: "Maladie cardiaque importante" },
      { id: "pneumopathie", type: "case", label: "Maladie pulmonaire importante" },
      { id: "psy", type: "case", label: "Maladie psychiatrique ou situation sociale limitant le suivi" },
      { id: "maladie_grave", type: "case", label: "Autre affection grave ou non contrôlée, selon l'investigateur" },
      { id: "protection_judiciaire", type: "case", label: "Protection judiciaire" }
    ]
  },
  {
    section: "Allergies et contre-indications à cocher si présentes",
    champs: [
      { id: "irm_ci", type: "case", label: "Contre-indication à l'IRM" },
      { id: "allergie_contraste", type: "case", label: "Allergie au gadolinium ou aux produits de contraste" },
      { id: "allergie_lomustine", type: "case", label: "Hypersensibilité à la lomustine" },
      { id: "coeliaque", type: "case", label: "Maladie cœliaque ou allergie au blé" },
      { id: "allergie_perflutren", type: "case", label: "Hypersensibilité aux microsphères de perflutrène (Luminity, Definity)" },
      { id: "anevrisme_materiel", type: "case", label: "Anévrisme intracrânien ou matériel implanté (clips, shunt, stent, wafer…)" },
      { id: "ci_tmz", type: "case", label: "Contre-indication au témozolomide ou hypersensibilité à la dacarbazine" }
    ]
  }
];
