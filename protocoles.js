/* Fichier généré à partir de protocoles.csv et criteres.csv.
   Pour modifier le dossier : corriger les CSV puis refaire la conversion dans la page « Études en cours ». */

window.DOSSIER_META = {
  "majLe": "2026-11-03",
  "responsable": "Unité de recherche clinique"
};

window.PROTOCOLES = [
  {
    "id": "LEGATO",
    "acronyme": "LEGATO",
    "titre": "GBM en première progression (essai randomisé Lomustine +/- réirradiation 35 Gy en 10 fractions)",
    "resume": "Essai de supériorité pragmatique de phase III multicentrique, comparatif, randomisé (1:1), en ouvert, avec règle d’arrêt prématuré",
    "phase": "III",
    "pathologie": "Glioblastome",
    "promoteur": "EORTC",
    "investigateur": "Ahmed IDBAIH",
    "identifiant": "NCT05904119",
    "contact": {
      "nom": "Lamine BERNEZKALLAH",
      "email": "lamine.bernezkallah-ext@aphp.fr",
      "tel": "01 42 16 04 41"
    },
    "statut": "ouvert",
    "recrutement": {
      "inclus": 0,
      "objectif": 411
    },
    "document": "",
    "majLe": "2026-10-30",
    "criteres": [
      {
        "type": "inclusion",
        "texte": "Âge d'au moins 18 ans",
        "cond": {
          "champ": "age",
          "op": ">=",
          "val": 18
        }
      },
      {
        "type": "inclusion",
        "texte": "Glioblastome IDH-sauvage prouvé histologiquement (diagnostic ou récidive)",
        "cond": {
          "champ": "diagnostic",
          "op": "=",
          "val": "glioblastome"
        }
      },
      {
        "type": "inclusion",
        "texte": "Première progression ou récidive après le traitement de première intention",
        "cond": {
          "champ": "situation",
          "op": "=",
          "val": "recidive1"
        }
      },
      {
        "type": "inclusion",
        "texte": "Radiothérapie antérieure terminée depuis au moins 6 mois (26 semaines)",
        "cond": {
          "et": [
            {
              "champ": "rt_cerebrale",
              "op": "=",
              "val": true
            },
            {
              "champ": "delai_rt",
              "op": ">=",
              "val": 26
            }
          ]
        }
      },
      {
        "type": "inclusion",
        "texte": "Radiothérapie fractionnée ou abrégée d'au moins 15 fractions",
        "cond": {
          "champ": "rt_fractions",
          "op": ">=",
          "val": 15
        }
      },
      {
        "type": "inclusion",
        "texte": "Indice de performance OMS de 0 à 2",
        "cond": {
          "champ": "oms",
          "op": "<=",
          "val": 2
        }
      },
      {
        "type": "inclusion",
        "texte": "Maladie mesurable selon RANO, diamètre tumoral maximal de 5 cm au plus",
        "cond": {
          "et": [
            {
              "champ": "mesurable",
              "op": "=",
              "val": "mesurable"
            },
            {
              "champ": "diametre_cm",
              "op": "<=",
              "val": 5
            }
          ]
        }
      },
      {
        "type": "inclusion",
        "texte": "Corticoïdes : dose stable ou en baisse pendant les 7 jours précédant l'inclusion (ou aucun corticoïde)",
        "cond": {
          "ou": [
            {
              "champ": "dexa",
              "op": "<=",
              "val": 0
            },
            {
              "champ": "cortico_stable",
              "op": "=",
              "val": "stable"
            }
          ]
        }
      },
      {
        "type": "inclusion",
        "texte": "Si chirurgie pour la récidive : rétablissement complet et récidive confirmée par l'histologie",
        "manuel": true
      },
      {
        "type": "non-inclusion",
        "texte": "Traitement antérieur par nitroso-urée",
        "cond": {
          "champ": "nitrosouree",
          "op": "=",
          "val": true
        }
      },
      {
        "type": "non-inclusion",
        "texte": "Traitement anticancéreux déjà reçu pour la récidive (sauf chirurgie)",
        "cond": {
          "champ": "ttt_recidive",
          "op": "=",
          "val": true
        }
      },
      {
        "type": "non-inclusion",
        "texte": "Leucémie aiguë ou maladie myéloïde (antécédent ou actuelle)",
        "cond": {
          "champ": "hemopathie",
          "op": "=",
          "val": true
        }
      },
      {
        "type": "non-inclusion",
        "texte": "Baisse significative des plaquettes ou des leucocytes, ou insuffisance rénale sévère",
        "cond": {
          "champ": "insuff_organe",
          "op": "=",
          "val": true
        }
      },
      {
        "type": "non-inclusion",
        "texte": "Hypersensibilité connue à la lomustine ou à ses excipients",
        "cond": {
          "champ": "allergie_lomustine",
          "op": "=",
          "val": true
        }
      },
      {
        "type": "non-inclusion",
        "texte": "Maladie cœliaque ou allergie au blé connue",
        "cond": {
          "champ": "coeliaque",
          "op": "=",
          "val": true
        }
      },
      {
        "type": "non-inclusion",
        "texte": "Vaccin vivant atténué dans les 3 mois précédant la lomustine",
        "cond": {
          "champ": "vaccin_vivant",
          "op": "=",
          "val": true
        }
      },
      {
        "type": "non-inclusion",
        "texte": "Affection médicale grave ou non contrôlée (infection, alcoolisme chronique, toxicomanie…) selon l'investigateur",
        "cond": {
          "ou": [
            {
              "champ": "maladie_grave",
              "op": "=",
              "val": true
            },
            {
              "champ": "infection",
              "op": "=",
              "val": true
            }
          ]
        }
      },
      {
        "type": "non-inclusion",
        "texte": "Contre-indication à l'IRM, au traceur d'imagerie ou au produit de contraste",
        "cond": {
          "ou": [
            {
              "champ": "irm_ci",
              "op": "=",
              "val": true
            },
            {
              "champ": "allergie_contraste",
              "op": "=",
              "val": true
            }
          ]
        }
      }
    ]
  },
  {
    "id": "SONOBIRD",
    "acronyme": "SONOBIRD",
    "titre": "Essai clinique de phase 3 randomisé, multicentrique, international, testant Carboplatine+Sonication par Sonocloud versus Standard de soins (i.e. Lomustine ou Témozolomide) seul chez les patients présentant un glioblastome en première récidive et éligible à une résection",
    "resume": "Essai clinique de phase 3 randomisée comparant Carboplatine+Sonication versus Standard de soins (Lomustine ou Témozolomide) chez les patients présentant un glioblastome en première récidive opérable",
    "phase": "III",
    "pathologie": "Glioblastome",
    "promoteur": "CARTHERA",
    "investigateur": "Ahmed IDBAIH",
    "identifiant": "NCT05902169",
    "contact": {
      "nom": "Nabila ROUSSEAUX",
      "email": "nabila.rousseaux@aphp.fr",
      "tel": "01 42 16 04 31"
    },
    "statut": "ouvert",
    "recrutement": {
      "inclus": 18,
      "objectif": 15
    },
    "document": "",
    "majLe": "2026-10-30",
    "criteres": [
      {
        "type": "inclusion",
        "texte": "Âge d'au moins 18 ans",
        "cond": {
          "champ": "age",
          "op": ">=",
          "val": 18
        }
      },
      {
        "type": "inclusion",
        "texte": "Indice de Karnofsky d'au moins 70",
        "cond": {
          "champ": "kps",
          "op": ">=",
          "val": 70
        }
      },
      {
        "type": "inclusion",
        "texte": "Glioblastome en première récidive après le traitement de première ligne",
        "cond": {
          "et": [
            {
              "champ": "diagnostic",
              "op": "=",
              "val": "glioblastome"
            },
            {
              "champ": "situation",
              "op": "=",
              "val": "recidive1"
            }
          ]
        }
      },
      {
        "type": "inclusion",
        "texte": "Taille tumorale de 5 cm au plus (après chirurgie)",
        "cond": {
          "champ": "diametre_cm",
          "op": "<=",
          "val": 5
        }
      },
      {
        "type": "inclusion",
        "texte": "Récidive éligible à une résection chirurgicale",
        "cond": {
          "champ": "resecable",
          "op": "=",
          "val": "possible"
        }
      },
      {
        "type": "non-inclusion",
        "texte": "Tumeur infratentorielle",
        "cond": {
          "champ": "infratentorielle",
          "op": "=",
          "val": true
        }
      },
      {
        "type": "non-inclusion",
        "texte": "Corticoïdes pour la tumeur : 6 mg ou plus d'équivalent dexaméthasone",
        "cond": {
          "champ": "dexa",
          "op": ">=",
          "val": 6
        }
      },
      {
        "type": "non-inclusion",
        "texte": "Problème médical compromettant le traitement par ultrasons",
        "manuel": true
      }
    ]
  },
  {
    "id": "NAVIG-1",
    "acronyme": "NAVIG-1",
    "titre": "Essai clinique de phase 1/2 simple bras, en ouvert, multicentrique, national, testant le vaccin peptidique anti-TERT/anti-PTPRZ1 associé au Litenimod en combinaison avec le témozolomide adjuvant chez les patients traités selon le protocole Stupp pour un glioblastome nouvellement diagnostiqué",
    "resume": "Essai de phase 1/2 simple bras, en ouvert, multicentrique, national, testant le vaccin peptidique anti-TERT/anti-PTPRZ1 associé au Litenimod en combinaison avec le témozolomide adjuvant chez les patients traités selon le protocole Stupp pour un glioblastome nouvellement diagnostiqué",
    "phase": "I/II",
    "pathologie": "Glioblastome",
    "promoteur": "Altevax",
    "investigateur": "Ahmed IDBAIH",
    "identifiant": "NCT06622434",
    "contact": {
      "nom": "Nabila ROUSSEAUX",
      "email": "nabila.rousseaux@aphp.fr",
      "tel": "01 42 16 04 31"
    },
    "statut": "ouvert",
    "recrutement": {
      "inclus": 22,
      "objectif": 10
    },
    "document": "",
    "majLe": "2026-10-30",
    "criteres": [
      {
        "type": "inclusion",
        "texte": "Âge d'au moins 18 ans",
        "cond": {
          "champ": "age",
          "op": ">=",
          "val": 18
        }
      },
      {
        "type": "inclusion",
        "texte": "Indice de Karnofsky d'au moins 60",
        "cond": {
          "champ": "kps",
          "op": ">=",
          "val": 60
        }
      },
      {
        "type": "inclusion",
        "texte": "Glioblastome nouvellement diagnostiqué",
        "cond": {
          "et": [
            {
              "champ": "diagnostic",
              "op": "=",
              "val": "glioblastome"
            },
            {
              "champ": "situation",
              "op": "=",
              "val": "nouveau"
            }
          ]
        }
      },
      {
        "type": "inclusion",
        "texte": "Radiochimiothérapie de Stupp terminée (45 Gy ou plus), éligible au témozolomide adjuvant",
        "cond": {
          "champ": "stupp",
          "op": "=",
          "val": "terminee"
        }
      },
      {
        "type": "inclusion",
        "texte": "Patient HLA-A2",
        "cond": {
          "champ": "hla_a2",
          "op": "=",
          "val": "positif"
        }
      },
      {
        "type": "inclusion",
        "texte": "Expression de PTPRZ1",
        "cond": {
          "champ": "ptprz1",
          "op": "=",
          "val": "exprime"
        }
      },
      {
        "type": "non-inclusion",
        "texte": "Mutation IDH",
        "cond": {
          "champ": "diagnostic",
          "op": "dans",
          "val": [
            "astro_idh",
            "oligo"
          ]
        }
      },
      {
        "type": "non-inclusion",
        "texte": "Corticoïdes : plus de 10 mg équivalent prednisone (environ 1,5 mg de dexaméthasone)",
        "cond": {
          "champ": "dexa",
          "op": ">",
          "val": 1.5
        }
      },
      {
        "type": "non-inclusion",
        "texte": "Optune / champs électriques (TTFields) : exclus en phase 1, autorisés en phase 2",
        "manuel": true
      },
      {
        "type": "non-inclusion",
        "texte": "Maladie dysimmunitaire",
        "cond": {
          "champ": "dysimmune",
          "op": "=",
          "val": true
        }
      },
      {
        "type": "non-inclusion",
        "texte": "Traitement antérieur par bévacizumab",
        "cond": {
          "champ": "bevacizumab",
          "op": "=",
          "val": true
        }
      }
    ]
  },
  {
    "id": "RESURGE",
    "acronyme": "RESURGE",
    "titre": "Étude de phase 2 randomisée évaluant l’intérêt d’une nouvelle chirurgie chez des patients atteints de glioblastome en récidive",
    "resume": "phase 2 randomisée évaluant l’intérêt d’une nouvelle chirurgie chez des patients atteints de glioblastome en récidive",
    "phase": "II",
    "pathologie": "Glioblastome",
    "promoteur": "APHP?",
    "investigateur": "Bertrand Mathon",
    "identifiant": "",
    "contact": {
      "nom": "Lamine BERNEZKALLAH",
      "email": "lamine.bernezkallah-ext@aphp.fr",
      "tel": "01 42 16 04 41"
    },
    "statut": "ouvert",
    "recrutement": {
      "inclus": 0,
      "objectif": 50
    },
    "document": "",
    "majLe": "2026-10-30",
    "criteres": [
      {
        "type": "inclusion",
        "texte": "Âge d'au moins 18 ans",
        "cond": {
          "champ": "age",
          "op": ">=",
          "val": 18
        }
      },
      {
        "type": "inclusion",
        "texte": "Glioblastome prouvé lors de la première chirurgie",
        "cond": {
          "champ": "diagnostic",
          "op": "=",
          "val": "glioblastome"
        }
      },
      {
        "type": "inclusion",
        "texte": "Traitement antérieur par radiothérapie, avec ou sans témozolomide",
        "cond": {
          "champ": "rt_cerebrale",
          "op": "=",
          "val": true
        }
      },
      {
        "type": "inclusion",
        "texte": "Intervention chirurgicale réalisable",
        "cond": {
          "champ": "resecable",
          "op": "=",
          "val": "possible"
        }
      },
      {
        "type": "inclusion",
        "texte": "Première progression selon RANO",
        "cond": {
          "champ": "situation",
          "op": "=",
          "val": "recidive1"
        }
      },
      {
        "type": "inclusion",
        "texte": "Indice de Karnofsky d'au moins 70",
        "cond": {
          "champ": "kps",
          "op": ">=",
          "val": 70
        }
      },
      {
        "type": "non-inclusion",
        "texte": "Engagement sous-falcoriel à l'IRM",
        "cond": {
          "champ": "engagement_falcoriel",
          "op": "=",
          "val": true
        }
      },
      {
        "type": "non-inclusion",
        "texte": "Prise de contraste en zone fonctionnelle",
        "cond": {
          "champ": "zone_fonctionnelle",
          "op": "=",
          "val": true
        }
      }
    ]
  },
  {
    "id": "SONOFIRST",
    "acronyme": "SONOFISRT",
    "titre": "Essai clinique de phase II randomisé, ouvert et multi-site dans le glioblastome nouvellement diagnostiqué et traité par chirurgie, Témoradiation concomitante et témozolomide adjuvant +/- ouverture de la barrière hémato-encéphalique induite par ultrasons",
    "resume": "Projet Européen de phase II evaluant l'efficacité clinique basée sur la comparaison de la médiane de la PFS (survie sans progression) évaluée par l'investigateur local entre le traitement standard de soins avec ouverture de la BHE par ultrasons et le traitement de soin standard seul.",
    "phase": "II",
    "pathologie": "Glioblastome",
    "promoteur": "APHP",
    "investigateur": "Ahmed IDBAIH",
    "identifiant": "NCT04614493",
    "contact": {
      "nom": "Nabila ROUSSEAUX",
      "email": "nabila.rousseaux@aphp.fr",
      "tel": "01 42 16 04 31"
    },
    "statut": "clos",
    "recrutement": {
      "inclus": 30,
      "objectif": 10
    },
    "document": "",
    "majLe": "2026-11-02",
    "criteres": [
      {
        "type": "inclusion",
        "texte": "Âge de 18 à 70 ans",
        "cond": {
          "et": [
            {
              "champ": "age",
              "op": ">=",
              "val": 18
            },
            {
              "champ": "age",
              "op": "<=",
              "val": 70
            }
          ]
        }
      },
      {
        "type": "inclusion",
        "texte": "Apte à donner un consentement libre et éclairé",
        "manuel": true
      },
      {
        "type": "inclusion",
        "texte": "Glioblastome IDH-sauvage nouvellement diagnostiqué (biopsie stéréotaxique ou « king size » possible)",
        "cond": {
          "et": [
            {
              "champ": "diagnostic",
              "op": "=",
              "val": "glioblastome"
            },
            {
              "champ": "situation",
              "op": "=",
              "val": "nouveau"
            }
          ]
        }
      },
      {
        "type": "inclusion",
        "texte": "Indice de Karnofsky d'au moins 70",
        "cond": {
          "champ": "kps",
          "op": ">=",
          "val": 70
        }
      },
      {
        "type": "inclusion",
        "texte": "Admissible à une résection chirurgicale totale ou partielle",
        "cond": {
          "champ": "resecable",
          "op": "=",
          "val": "possible"
        }
      },
      {
        "type": "inclusion",
        "texte": "Extension tumorale de 70 mm au plus (IRM T1)",
        "cond": {
          "champ": "diametre_cm",
          "op": "<=",
          "val": 7
        }
      },
      {
        "type": "inclusion",
        "texte": "Admissible à la radiochimiothérapie de Stupp",
        "cond": {
          "champ": "stupp",
          "op": "=",
          "val": "a_venir"
        }
      },
      {
        "type": "inclusion",
        "texte": "Hémoglobine d'au moins 10 g/dL",
        "cond": {
          "champ": "hemoglobine",
          "op": ">=",
          "val": 10
        }
      },
      {
        "type": "inclusion",
        "texte": "Leucocytes d'au moins 3 G/L",
        "cond": {
          "champ": "leucocytes",
          "op": ">=",
          "val": 3
        }
      },
      {
        "type": "inclusion",
        "texte": "Neutrophiles d'au moins 1,5 G/L",
        "cond": {
          "champ": "pnn",
          "op": ">=",
          "val": 1.5
        }
      },
      {
        "type": "inclusion",
        "texte": "Plaquettes d'au moins 100 G/L",
        "cond": {
          "champ": "plaquettes",
          "op": ">=",
          "val": 100
        }
      },
      {
        "type": "inclusion",
        "texte": "Bilirubine totale inférieure à 1,5 fois la limite supérieure",
        "cond": {
          "champ": "bilirubine",
          "op": "<",
          "val": 1.5
        }
      },
      {
        "type": "inclusion",
        "texte": "ASAT et ALAT à 3 fois la limite supérieure au plus",
        "cond": {
          "champ": "transaminases",
          "op": "<=",
          "val": 3
        }
      },
      {
        "type": "inclusion",
        "texte": "Phosphatases alcalines inférieures à 3 fois la limite supérieure",
        "cond": {
          "champ": "pal",
          "op": "<",
          "val": 3
        }
      },
      {
        "type": "inclusion",
        "texte": "Clairance de la créatinine d'au moins 60 mL/min",
        "cond": {
          "champ": "dfg",
          "op": ">=",
          "val": 60
        }
      },
      {
        "type": "inclusion",
        "texte": "Femme en âge de procréer : test de grossesse négatif et contraception acceptée ; homme : contraception acceptée",
        "manuel": true
      },
      {
        "type": "inclusion",
        "texte": "Consentement éclairé écrit, daté et signé",
        "manuel": true
      },
      {
        "type": "inclusion",
        "texte": "Affiliation à la sécurité sociale française (hors AME)",
        "manuel": true
      },
      {
        "type": "non-inclusion",
        "texte": "Tumeur multifocale hors d'une zone de 70 mm, ou de la fosse postérieure",
        "cond": {
          "ou": [
            {
              "champ": "multifocal_large",
              "op": "=",
              "val": true
            },
            {
              "champ": "infratentorielle",
              "op": "=",
              "val": true
            }
          ]
        }
      },
      {
        "type": "non-inclusion",
        "texte": "Anomalies FLAIR diffuses attribuables à une gliomatose",
        "cond": {
          "champ": "gliomatose",
          "op": "=",
          "val": true
        }
      },
      {
        "type": "non-inclusion",
        "texte": "Signes d'hypertension intracrânienne non contrôlée",
        "cond": {
          "champ": "htic",
          "op": "=",
          "val": true
        }
      },
      {
        "type": "non-inclusion",
        "texte": "Épilepsie non contrôlée",
        "cond": {
          "champ": "epilepsie",
          "op": "=",
          "val": true
        }
      },
      {
        "type": "non-inclusion",
        "texte": "Traitement antiplaquettaire ou antithrombotique à poursuivre",
        "cond": {
          "ou": [
            {
              "champ": "antiplaquettaire",
              "op": "=",
              "val": true
            },
            {
              "champ": "anticoag",
              "op": "=",
              "val": true
            }
          ]
        }
      },
      {
        "type": "non-inclusion",
        "texte": "Grossesse ou allaitement",
        "cond": {
          "champ": "grossesse",
          "op": "=",
          "val": true
        }
      },
      {
        "type": "non-inclusion",
        "texte": "Contre-indication à l'IRM, ou allergie au gadolinium ou à un produit de contraste",
        "cond": {
          "ou": [
            {
              "champ": "irm_ci",
              "op": "=",
              "val": true
            },
            {
              "champ": "allergie_contraste",
              "op": "=",
              "val": true
            }
          ]
        }
      },
      {
        "type": "non-inclusion",
        "texte": "Hypersensibilité aux microsphères de perflutrène (Luminity, Definity)",
        "cond": {
          "champ": "allergie_perflutren",
          "op": "=",
          "val": true
        }
      },
      {
        "type": "non-inclusion",
        "texte": "Anévrisme intracrânien connu, ou matériel implanté (clips, shunt, stent, wafer, substitut de dure-mère non résorbable)",
        "cond": {
          "champ": "anevrisme_materiel",
          "op": "=",
          "val": true
        }
      },
      {
        "type": "non-inclusion",
        "texte": "Maladie intercurrente ou comorbidité pouvant gêner le dispositif ou l'évaluation (selon l'investigateur)",
        "cond": {
          "champ": "maladie_grave",
          "op": "=",
          "val": true
        }
      },
      {
        "type": "non-inclusion",
        "texte": "Hypertension artérielle de grade 3 ou plus non contrôlée",
        "cond": {
          "champ": "hta3",
          "op": "=",
          "val": true
        }
      },
      {
        "type": "non-inclusion",
        "texte": "Infection connue ou suspectée, ou chronique instable, nécessitant un traitement systémique",
        "cond": {
          "champ": "infection",
          "op": "=",
          "val": true
        }
      },
      {
        "type": "non-inclusion",
        "texte": "Maladie cardiaque importante",
        "cond": {
          "champ": "cardiopathie",
          "op": "=",
          "val": true
        }
      },
      {
        "type": "non-inclusion",
        "texte": "Maladie pulmonaire importante",
        "cond": {
          "champ": "pneumopathie",
          "op": "=",
          "val": true
        }
      },
      {
        "type": "non-inclusion",
        "texte": "Insuffisance rénale grave ou myélosuppression grave",
        "cond": {
          "champ": "insuff_organe",
          "op": "=",
          "val": true
        }
      },
      {
        "type": "non-inclusion",
        "texte": "Maladie psychiatrique ou situation sociale limitant le respect de l'étude",
        "cond": {
          "champ": "psy",
          "op": "=",
          "val": true
        }
      },
      {
        "type": "non-inclusion",
        "texte": "Immunodéficience (VIH)",
        "cond": {
          "champ": "vih",
          "op": "=",
          "val": true
        }
      },
      {
        "type": "non-inclusion",
        "texte": "Patient sous protection judiciaire",
        "cond": {
          "champ": "protection_judiciaire",
          "op": "=",
          "val": true
        }
      },
      {
        "type": "non-inclusion",
        "texte": "Médicament expérimental dans les 30 jours précédant l'inclusion",
        "cond": {
          "champ": "med_experimental",
          "op": "=",
          "val": true
        }
      },
      {
        "type": "non-inclusion",
        "texte": "Antibiotique de neurotoxicité connue, sauf substitution impossible",
        "cond": {
          "champ": "antibio_neurotoxique",
          "op": "=",
          "val": true
        }
      },
      {
        "type": "non-inclusion",
        "texte": "Contre-indication au témozolomide ou hypersensibilité à la dacarbazine",
        "cond": {
          "champ": "ci_tmz",
          "op": "=",
          "val": true
        }
      },
      {
        "type": "non-inclusion",
        "texte": "Temps de prothrombine ou TCA hors des limites du laboratoire",
        "cond": {
          "champ": "coag_anormale",
          "op": "=",
          "val": true
        }
      },
      {
        "type": "non-inclusion",
        "texte": "Implantation du SonoCloud-9 impossible selon le neurochirurgien (ex. épaisseur de peau supérieure à 9 mm)",
        "manuel": true
      }
    ]
  }
];
