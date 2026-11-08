/* Fichier généré à partir de protocoles.csv et criteres.csv.
   Pour modifier le dossier : corriger les CSV puis refaire la conversion dans la page « Études en cours ». */

window.DOSSIER_META = {
  "majLe": "2026-11-07",
  "responsable": ""
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
    "document": "https://clinicaltrials.gov/study/NCT05904119?term=LEGATO&viewType=Card&intr=%20Lomustine%20&rank=1",
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
          "champ": "rt_cerebrale",
          "op": "=",
          "val": true
        }
      },
      {
        "type": "inclusion",
        "texte": "Indice de performance OMS de 0 à 2",
        "cond": {
          "champ": "kps",
          "op": ">=",
          "val": 50
        }
      },
      {
        "type": "inclusion",
        "texte": "Maladie mesurable selon RANO, diamètre tumoral maximal de 5 cm au plus",
        "cond": {
          "champ": "taille",
          "op": "dans",
          "val": [
            "t35",
            "t5"
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
          "champ": "situation",
          "op": "=",
          "val": "recidive2"
        }
      },
      {
        "type": "non-inclusion",
        "texte": "Leucémie aiguë ou maladie myéloïde (antécédent ou actuelle)",
        "manuel": true
      },
      {
        "type": "non-inclusion",
        "texte": "Baisse significative des plaquettes ou des leucocytes, ou insuffisance rénale sévère",
        "manuel": true
      },
      {
        "type": "non-inclusion",
        "texte": "Hypersensibilité connue à la lomustine ou à ses excipients",
        "manuel": true
      },
      {
        "type": "non-inclusion",
        "texte": "Maladie cœliaque ou allergie au blé connue",
        "manuel": true
      },
      {
        "type": "non-inclusion",
        "texte": "Vaccin vivant atténué dans les 3 mois précédant la lomustine",
        "manuel": true
      },
      {
        "type": "non-inclusion",
        "texte": "Affection médicale grave ou non contrôlée (infection, alcoolisme chronique, toxicomanie…) selon l'investigateur",
        "manuel": true
      },
      {
        "type": "non-inclusion",
        "texte": "Contre-indication à l'IRM, au traceur d'imagerie ou au produit de contraste",
        "cond": {
          "champ": "irm_ci",
          "op": "=",
          "val": true
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
    "document": "https://clinicaltrials.gov/study/NCT05902169?term=Sonobird%20&viewType=Card&intr=Carboplatine%2BSonication%20&rank=1",
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
          "champ": "taille",
          "op": "dans",
          "val": [
            "t35",
            "t5"
          ]
        }
      },
      {
        "type": "inclusion",
        "texte": "Récidive éligible à une résection chirurgicale",
        "cond": {
          "champ": "chirurgie",
          "op": "=",
          "val": "a_venir"
        }
      },
      {
        "type": "non-inclusion",
        "texte": "Tumeur infratentorielle",
        "cond": {
          "champ": "siege",
          "op": "=",
          "val": "sous"
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
    "promoteur": "APHP",
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
    "document": "https://clinicaltrials.gov/study/NCT06622434?term=Litenimod%20temozolomide%20&viewType=Card&rank=1",
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
              "op": "dans",
              "val": [
                "nouveau",
                "traitement_initial"
              ]
            }
          ]
        }
      },
      {
        "type": "inclusion",
        "texte": "Radiochimiothérapie de Stupp terminée (45 Gy ou plus), éligible au témozolomide adjuvant",
        "cond": {
          "champ": "situation",
          "op": "=",
          "val": "traitement_initial"
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
          "champ": "auto_immune",
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
    "promoteur": "Insel Gruppe AG, University Hospital Bern",
    "investigateur": "Bertrand Mathon",
    "identifiant": "NCT02394626",
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
    "document": "https://clinicaltrials.gov/study/NCT02394626?cond=Glioblastoma&term=RESURGE&viewType=Card&rank=1",
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
          "champ": "chirurgie",
          "op": "=",
          "val": "a_venir"
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
        "manuel": true
      },
      {
        "type": "non-inclusion",
        "texte": "Prise de contraste en zone fonctionnelle",
        "manuel": true
      }
    ]
  },
  {
    "id": "SONOFIRST",
    "acronyme": "SONOFIRST",
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
    "statut": "ouvert",
    "recrutement": {
      "inclus": 30,
      "objectif": 10
    },
    "document": "https://clinicaltrials.gov/study/NCT04614493?cond=Glioblastoma&term=Sonofirst&viewType=Card&rank=1",
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
          "champ": "chirurgie",
          "op": "=",
          "val": "a_venir"
        }
      },
      {
        "type": "inclusion",
        "texte": "Extension tumorale de 70 mm au plus (IRM T1)",
        "cond": {
          "champ": "taille",
          "op": "dans",
          "val": [
            "t35",
            "t5",
            "t7"
          ]
        }
      },
      {
        "type": "inclusion",
        "texte": "Admissible à la radiochimiothérapie de Stupp",
        "cond": {
          "champ": "traitement_prevu",
          "op": "=",
          "val": "stupp"
        }
      },
      {
        "type": "inclusion",
        "texte": "Bilan biologique conforme aux seuils du protocole (numération, bilan hépatique, fonction rénale)",
        "manuel": true
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
        "texte": "Tumeur multifocale hors d'une zone de 70 mm, ou de la fosse postérieure (critère partiel : le reste est à confirmer en consultation)",
        "cond": {
          "champ": "siege",
          "op": "=",
          "val": "sous"
        }
      },
      {
        "type": "non-inclusion",
        "texte": "Anomalies FLAIR diffuses attribuables à une gliomatose",
        "manuel": true
      },
      {
        "type": "non-inclusion",
        "texte": "Signes d'hypertension intracrânienne non contrôlée",
        "manuel": true
      },
      {
        "type": "non-inclusion",
        "texte": "Épilepsie non contrôlée",
        "cond": {
          "champ": "epilepsie_nc",
          "op": "=",
          "val": true
        }
      },
      {
        "type": "non-inclusion",
        "texte": "Traitement antiplaquettaire ou antithrombotique à poursuivre",
        "manuel": true
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
          "champ": "irm_ci",
          "op": "=",
          "val": true
        }
      },
      {
        "type": "non-inclusion",
        "texte": "Hypersensibilité aux microsphères de perflutrène (Luminity, Definity)",
        "manuel": true
      },
      {
        "type": "non-inclusion",
        "texte": "Anévrisme intracrânien connu, ou matériel implanté (clips, shunt, stent, wafer, substitut de dure-mère non résorbable)",
        "manuel": true
      },
      {
        "type": "non-inclusion",
        "texte": "Maladie intercurrente ou comorbidité pouvant gêner le dispositif ou l'évaluation (selon l'investigateur)",
        "manuel": true
      },
      {
        "type": "non-inclusion",
        "texte": "Hypertension artérielle de grade 3 ou plus non contrôlée",
        "manuel": true
      },
      {
        "type": "non-inclusion",
        "texte": "Infection connue ou suspectée, ou chronique instable, nécessitant un traitement systémique",
        "manuel": true
      },
      {
        "type": "non-inclusion",
        "texte": "Maladie cardiaque importante",
        "manuel": true
      },
      {
        "type": "non-inclusion",
        "texte": "Maladie pulmonaire importante",
        "manuel": true
      },
      {
        "type": "non-inclusion",
        "texte": "Insuffisance rénale grave ou myélosuppression grave",
        "manuel": true
      },
      {
        "type": "non-inclusion",
        "texte": "Maladie psychiatrique ou situation sociale limitant le respect de l'étude",
        "manuel": true
      },
      {
        "type": "non-inclusion",
        "texte": "Immunodéficience (VIH)",
        "cond": {
          "champ": "immunodep",
          "op": "=",
          "val": true
        }
      },
      {
        "type": "non-inclusion",
        "texte": "Patient sous protection judiciaire",
        "manuel": true
      },
      {
        "type": "non-inclusion",
        "texte": "Médicament expérimental dans les 30 jours précédant l'inclusion",
        "manuel": true
      },
      {
        "type": "non-inclusion",
        "texte": "Antibiotique de neurotoxicité connue, sauf substitution impossible",
        "manuel": true
      },
      {
        "type": "non-inclusion",
        "texte": "Contre-indication au témozolomide ou hypersensibilité à la dacarbazine",
        "manuel": true
      },
      {
        "type": "non-inclusion",
        "texte": "Temps de prothrombine ou TCA hors des limites du laboratoire",
        "manuel": true
      },
      {
        "type": "non-inclusion",
        "texte": "Implantation du SonoCloud-9 impossible selon le neurochirurgien (ex. épaisseur de peau supérieure à 9 mm)",
        "manuel": true
      }
    ]
  },
  {
    "id": "POLO",
    "acronyme": "POLO",
    "titre": "PCV seul versus Radiothérapie et PCV adjuvant dans le traitement initial des oligodendrogliomes de grade 2 avec co-délétion 1p/19q",
    "resume": "Déterminer si un traitement initial par PCV seul permettrait d’augmenter le temps de survie sans détérioration neurocognitive par rapport à un traitement par RT+PCV chez les patients présentant un oligodendrogliome de grade 2 avec co-délétion 1p/19q",
    "phase": "",
    "pathologie": "Oligodendrogliome",
    "promoteur": "HCL",
    "investigateur": "C. Dehais",
    "identifiant": "NCT04702581",
    "contact": {
      "nom": "",
      "email": "",
      "tel": ""
    },
    "statut": "ouvert",
    "document": "https://clinicaltrials.gov/study/NCT04702581?cond=Oligodendroglioma&term=POLO&viewType=Card&rank=1",
    "majLe": "2026-11-07",
    "criteres": [
      {
        "type": "inclusion",
        "texte": "Tumeur avec co-délétion 1p/19q et mutation IDH (IDH1 ou IDH2), selon le diagnostic local",
        "cond": {
          "champ": "diagnostic",
          "op": "=",
          "val": "oligo"
        }
      },
      {
        "type": "inclusion",
        "texte": "Oligodendrogliome de bas grade (grade 2, OMS 2016)",
        "cond": {
          "champ": "grade",
          "op": "=",
          "val": 2
        }
      },
      {
        "type": "inclusion",
        "texte": "Confirmation histologique du diagnostic par un laboratoire d'anatomopathologie central",
        "manuel": true
      },
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
        "texte": "Traitement oncologique autre que la chirurgie nécessaire (prétraité ou non par vorasidenib) pour l'une des raisons suivantes : progression documentée par une augmentation de taille ; maladie symptomatique (symptômes neurologiques ou cognitifs, ou crises d'épilepsie réfractaires) ; âge d'au moins 40 ans avec chirurgie ; âge de moins de 40 ans avec exérèse partielle ou complète ou biopsie",
        "manuel": true
      },
      {
        "type": "inclusion",
        "texte": "Aucune radiothérapie ni chimiothérapie antérieure (chirurgies antérieures acceptées)",
        "cond": {
          "et": [
            {
              "champ": "rt_cerebrale",
              "op": "=",
              "val": false
            },
            {
              "champ": "chimio",
              "op": "=",
              "val": false
            }
          ]
        }
      }
    ]
  },
  {
    "id": "VIGOR",
    "acronyme": "VIGOR",
    "titre": "Traitement de maintenance des astrocytomes de grades 2 et 3 après radio-chimiothérapie : essai de phase III VIGOR",
    "resume": "Evalue le Vorasidenib en traitement de maintenance après radio-chimiothérapie (RT-PCV ou RT-TMZ) dans les astrocytomes de grade 2 et 3.",
    "phase": "III",
    "pathologie": "Astrocytome",
    "promoteur": "EORTC",
    "investigateur": "A. Laurenge-Leprince",
    "identifiant": "NCT06809322",
    "contact": {
      "nom": "",
      "email": "",
      "tel": ""
    },
    "statut": "ouvert",
    "document": "https://clinicaltrials.gov/study/NCT06809322?cond=Astrocytoma&term=VIGOR&viewType=Card&rank=1",
    "majLe": "2026-11-07",
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
        "texte": "Astrocytome IDH muté de grade 2 ou 3 (diagnostic local)",
        "cond": {
          "et": [
            {
              "champ": "diagnostic",
              "op": "=",
              "val": "astro_idh"
            },
            {
              "champ": "grade",
              "op": ">=",
              "val": 2
            },
            {
              "champ": "grade",
              "op": "<=",
              "val": 3
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
        "texte": "Au moins une chirurgie antérieure",
        "manuel": true
      },
      {
        "type": "inclusion",
        "texte": "Radiothérapie antérieure de 50,4 Gy (photons ou protons) (critère partiel : le reste est à confirmer en consultation)",
        "cond": {
          "champ": "rt_cerebrale",
          "op": "=",
          "val": true
        }
      },
      {
        "type": "inclusion",
        "texte": "Chimiothérapie antérieure après la radiothérapie",
        "cond": {
          "champ": "chimio",
          "op": "=",
          "val": true
        }
      },
      {
        "type": "inclusion",
        "texte": "4 à 12 cycles de témozolomide ou 2 à 6 cycles de PCV",
        "manuel": true
      },
      {
        "type": "inclusion",
        "texte": "Dernière dose de chimiothérapie 6 à 12 semaines avant l'inclusion",
        "manuel": true
      },
      {
        "type": "inclusion",
        "texte": "Récupération de toutes les toxicités cliniquement pertinentes (ou stables et contrôlées selon l'investigateur)",
        "manuel": true
      },
      {
        "type": "inclusion",
        "texte": "Numération formule sanguine et bilan hépatique normaux",
        "manuel": true
      },
      {
        "type": "inclusion",
        "texte": "Indice de performance OMS de 0 à 2",
        "cond": {
          "champ": "kps",
          "op": ">=",
          "val": 50
        }
      },
      {
        "type": "inclusion",
        "texte": "Corticoïdes : dose stable ou en baisse pendant les 7 derniers jours (ou aucun corticoïde)",
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
        "texte": "Femme en âge de procréer : test de grossesse négatif, pas d'allaitement et double méthode de contraception",
        "manuel": true
      },
      {
        "type": "non-inclusion",
        "texte": "Codélétion 1p/19q",
        "cond": {
          "champ": "diagnostic",
          "op": "=",
          "val": "oligo"
        }
      },
      {
        "type": "non-inclusion",
        "texte": "Récidive ou progression selon RANO 2.0 entre le premier jour de radiothérapie et l'inclusion",
        "cond": {
          "champ": "situation",
          "op": "dans",
          "val": [
            "recidive1",
            "recidive2"
          ]
        }
      },
      {
        "type": "non-inclusion",
        "texte": "Autre cancer dont l'histoire naturelle pourrait interférer avec la tolérance ou l'efficacité du traitement",
        "cond": {
          "champ": "autre_cancer",
          "op": "=",
          "val": true
        }
      },
      {
        "type": "non-inclusion",
        "texte": "Astrocytome de grade 4",
        "cond": {
          "champ": "grade",
          "op": "=",
          "val": 4
        }
      },
      {
        "type": "non-inclusion",
        "texte": "Traitement concomitant par des substrats des CYP2C8, 2C9, 2C19 ou 3A",
        "manuel": true
      }
    ]
  },
  {
    "id": "FREEDOME",
    "acronyme": "FREEDOME",
    "titre": "Efficacité d’un programme mixte de réhabilitation neuropsychologique en distanciel chez des patients porteurs d’un gliome diffus de grade 2 ou 3 : essai randomisé contrôlé",
    "resume": "Evalue l’impact d’un programme de réhabilitation cognitive dans la plainte cognitive ressentie par des patients porteurs d’un gliome de grade 2-3 à distance de tout traitement oncologique (incluant la chirurgie)",
    "phase": "",
    "pathologie": "Astrocytome | Oligodendrogliome | Autre gliome",
    "promoteur": "INCa",
    "investigateur": "C. Dehais",
    "identifiant": "NCT06468176",
    "contact": {
      "nom": "",
      "email": "",
      "tel": ""
    },
    "statut": "ouvert",
    "document": "https://clinicaltrials.gov/study/NCT06468176?cond=Glioma&term=FREEDOME&viewType=Card&rank=1",
    "majLe": "2026-11-07",
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
        "texte": "Gliome diffus de grade 2 ou 3",
        "cond": {
          "et": [
            {
              "champ": "diagnostic",
              "op": "dans",
              "val": [
                "astro_idh",
                "oligo",
                "gliome_autre"
              ]
            },
            {
              "champ": "grade",
              "op": ">=",
              "val": 2
            },
            {
              "champ": "grade",
              "op": "<=",
              "val": 3
            }
          ]
        }
      },
      {
        "type": "inclusion",
        "texte": "Score OMS « > ou = 2 » dans le résumé source (sens à vérifier, ≤ 2 probable)",
        "manuel": true
      },
      {
        "type": "inclusion",
        "texte": "Exérèse chirurgicale réalisée depuis au moins 12 mois (52 semaines)",
        "manuel": true
      },
      {
        "type": "inclusion",
        "texte": "Fin du traitement oncologique depuis au moins 6 mois (26 semaines), s'il y en a eu un (hors vorasidenib, accepté) (critère partiel : le reste est à confirmer en consultation)",
        "cond": {
          "champ": "situation",
          "op": "=",
          "val": "surveillance"
        }
      },
      {
        "type": "inclusion",
        "texte": "Plainte cognitive (réponses au moins « assez » aux items 20 et 25 du questionnaire EORTC QLQ-C30)",
        "manuel": true
      },
      {
        "type": "inclusion",
        "texte": "Utilisation régulière possible d'un outil numérique",
        "manuel": true
      },
      {
        "type": "non-inclusion",
        "texte": "Participation concomitante à une étude dont le critère d'évaluation est la cognition (ex. POLCA, POLO)",
        "manuel": true
      },
      {
        "type": "non-inclusion",
        "texte": "Altération cognitive sévère (MoCA inférieur à 20)",
        "manuel": true
      }
    ]
  },
  {
    "id": "TEMOTRAD",
    "acronyme": "TEMOTRAD",
    "titre": "Chimiothérapie de 1ère ligne par témozolomide seul pour les gliomes du tronc cérébral de l’adulte ne prenant pas le contraste de sous-type diffus et présentant une évolutivité clinique et/ou radiologique sur un mode infiltrant",
    "resume": "",
    "phase": "II",
    "pathologie": "Gliome de la ligne médiane | Astrocytome | Autre gliome",
    "promoteur": "",
    "investigateur": "F. Laigle-Donadey",
    "identifiant": "",
    "contact": {
      "nom": "",
      "email": "",
      "tel": ""
    },
    "statut": "ouvert",
    "document": "",
    "majLe": "2026-11-07",
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
        "texte": "Indice de Karnofsky d'au moins 50",
        "cond": {
          "champ": "kps",
          "op": ">=",
          "val": 50
        }
      },
      {
        "type": "inclusion",
        "texte": "Lésion ne prenant pas le contraste à l'IRM",
        "manuel": true
      },
      {
        "type": "inclusion",
        "texte": "Tumeur infiltrante du tronc cérébral (gliome diffus du tronc cérébral de l'adulte)",
        "cond": {
          "et": [
            {
              "champ": "diagnostic",
              "op": "dans",
              "val": [
                "dmg",
                "gliome_autre",
                "astro_idh"
              ]
            },
            {
              "champ": "siege",
              "op": "=",
              "val": "sous"
            }
          ]
        }
      },
      {
        "type": "inclusion",
        "texte": "Preuve histologique de tumeur infiltrante du tronc cérébral (sauf exception)",
        "manuel": true
      },
      {
        "type": "inclusion",
        "texte": "Progression clinique et/ou radiologique sur un mode infiltrant mais non menaçant",
        "manuel": true
      }
    ]
  },
  {
    "id": "BIOMEDE 2",
    "acronyme": "BIOMEDE 2",
    "titre": "Médecine biologique pour l'éradication du gliome pontique intrinsèque diffus (DIPG) 2.0",
    "resume": "",
    "phase": "III",
    "pathologie": "Gliome de la ligne médiane",
    "promoteur": "Gustave Roussy",
    "investigateur": "M. Touat",
    "identifiant": "NCT05476939",
    "contact": {
      "nom": "",
      "email": "",
      "tel": ""
    },
    "statut": "ouvert",
    "document": "https://clinicaltrials.gov/study/NCT05476939?cond=Glioma&term=ONC201&viewType=Card&rank=10",
    "majLe": "2026-11-07",
    "criteres": [
      {
        "type": "inclusion",
        "texte": "Âge d'au moins 6 mois",
        "cond": {
          "champ": "age",
          "op": ">=",
          "val": 0.5
        }
      },
      {
        "type": "inclusion",
        "texte": "Indice de Karnofsky d'au moins 50",
        "cond": {
          "champ": "kps",
          "op": ">=",
          "val": 50
        }
      },
      {
        "type": "inclusion",
        "texte": "Éligible pour une biopsie, ou matériel de biopsie disponible pour l'évaluation des biomarqueurs",
        "manuel": true
      },
      {
        "type": "inclusion",
        "texte": "Éligible à la radiothérapie cérébrale ou cranio-spinale",
        "manuel": true
      },
      {
        "type": "inclusion",
        "texte": "Tumeur nouvellement diagnostiquée, sans chimiothérapie ni autre traitement anticancéreux antérieur",
        "cond": {
          "et": [
            {
              "champ": "situation",
              "op": "=",
              "val": "nouveau"
            },
            {
              "champ": "chimio",
              "op": "=",
              "val": false
            }
          ]
        }
      },
      {
        "type": "inclusion",
        "texte": "Gliome pontique intrinsèque diffus (DIPG), ou gliome diffus de la ligne médiane non DIPG avec mutation H3K28M ou perte de la triméthylation H3K28 avec surexpression d'EZHIP",
        "cond": {
          "champ": "diagnostic",
          "op": "=",
          "val": "dmg"
        }
      },
      {
        "type": "inclusion",
        "texte": "Consentement éclairé requis pour la vérification histologique (biopsie) et pour l'examen central des biomarqueurs",
        "manuel": true
      },
      {
        "type": "non-inclusion",
        "texte": "Toxicité d'organe actuelle de grade supérieur à 2",
        "manuel": true
      },
      {
        "type": "non-inclusion",
        "texte": "QTc supérieur à 480 ms",
        "manuel": true
      }
    ]
  },
  {
    "id": "Acsé Pemigatinib",
    "acronyme": "Acsé Pemigatinib",
    "titre": "Pemigatinib pour le traitement des tumeurs solides récidivants présentant une altération des gènes FGFR",
    "resume": "",
    "phase": "II",
    "pathologie": "Autre diagnostic | Autres métastases cérébrales",
    "promoteur": "Tianjin Medical University Second Hospital",
    "investigateur": "A. Picca",
    "identifiant": "NCT06022289",
    "contact": {
      "nom": "",
      "email": "",
      "tel": ""
    },
    "statut": "ouvert",
    "document": "https://clinicaltrials.gov/study/NCT06022289?term=Pemigatinib%E2%80%AF%20&viewType=Card&cond=FGFR&rank=2",
    "majLe": "2026-11-07",
    "criteres": [
      {
        "type": "inclusion",
        "texte": "Tumeur solide avec réarrangement, fusion ou mutation de FGFR1, FGFR2 ou FGFR3",
        "cond": {
          "champ": "fgfr",
          "op": "=",
          "val": "presente"
        }
      },
      {
        "type": "inclusion",
        "texte": "Tumeur solide (hors lymphome et maladies neuro-immunes)",
        "cond": {
          "champ": "diagnostic",
          "op": "pasdans",
          "val": [
            "lcp",
            "encephalite_ai",
            "nsp"
          ]
        }
      },
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
        "texte": "Indice de performance ECOG de 0 à 2",
        "cond": {
          "champ": "kps",
          "op": ">=",
          "val": 50
        }
      },
      {
        "type": "inclusion",
        "texte": "Espérance de vie supérieure à 3 mois (13 semaines)",
        "manuel": true
      },
      {
        "type": "inclusion",
        "texte": "Maladie mesurable selon RECIST 1.1",
        "manuel": true
      },
      {
        "type": "inclusion",
        "texte": "Deux imageries pré-traitement disponibles, espacées d'au moins 4 semaines, sans traitement anticancéreux entre les deux",
        "manuel": true
      },
      {
        "type": "inclusion",
        "texte": "Croissance tumorale d'au moins 0,1 mm/jour sur les imageries pré-traitement",
        "manuel": true
      },
      {
        "type": "inclusion",
        "texte": "Bilan biologique conforme aux seuils du protocole (numération, bilan hépatique, fonction rénale)",
        "manuel": true
      },
      {
        "type": "non-inclusion",
        "texte": "Traitement antérieur par un anti-FGFR",
        "manuel": true
      },
      {
        "type": "non-inclusion",
        "texte": "Dernier traitement anticancéreux « > 4 semaines (> 6 semaines pour les nitrosourées) » dans le résumé source (sens à vérifier : probable délai minimum de sevrage)",
        "manuel": true
      },
      {
        "type": "non-inclusion",
        "texte": "Pathologie cornéale ou rétinienne cliniquement significative",
        "manuel": true
      },
      {
        "type": "non-inclusion",
        "texte": "Troubles de l'hémostase du calcium et/ou du phosphate",
        "manuel": true
      },
      {
        "type": "non-inclusion",
        "texte": "Maladie cardiaque non contrôlée",
        "manuel": true
      }
    ]
  },
  {
    "id": "GBM AGILE",
    "acronyme": "GBM AGILE",
    "titre": "Étude de phase 2-3, de plate-forme, randomisée avec randomisation adaptée à la réponse, visant à évaluer plusieurs régimes de traitement, chez des patients ayant un glioblastome nouvellement diagnostiqué ou en rechute",
    "resume": "GBM AGILE est conçu pour évaluer efficacement les thérapies. L'essai sera mené dans le cadre d'une seule demande principale de nouveau médicament expérimental/demande d'essai clinique et d'un protocole principal, permettant l'évaluation simultanée de plusieurs médicaments et combinaisons de médicaments de différentes sociétés pharmaceutiques",
    "phase": "II/III",
    "pathologie": "Glioblastome",
    "promoteur": "GCAR",
    "investigateur": "M. Touat",
    "identifiant": "NCT03970447",
    "contact": {
      "nom": "",
      "email": "",
      "tel": ""
    },
    "statut": "ouvert",
    "document": "https://clinicaltrials.gov/study/NCT03970447?cond=Glioblastoma&term=GBM%20AGILE&viewType=Card&rank=1",
    "majLe": "2026-11-07",
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
        "texte": "Glioblastome nouvellement diagnostiqué, éligible à la radiochimiothérapie concomitante par témozolomide (protocole de Stupp)",
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
            },
            {
              "champ": "traitement_prevu",
              "op": "=",
              "val": "stupp"
            }
          ]
        }
      },
      {
        "type": "inclusion",
        "texte": "Tissu tumoral disponible pour déterminer le statut MGMT",
        "manuel": true
      },
      {
        "type": "non-inclusion",
        "texte": "Implant de carmustine ou autre traitement antitumoral supplémentaire",
        "manuel": true
      },
      {
        "type": "non-inclusion",
        "texte": "Atteinte méningée extensive",
        "cond": {
          "champ": "leptomeninge",
          "op": "=",
          "val": true
        }
      },
      {
        "type": "non-inclusion",
        "texte": "QTc supérieur à 450 ms",
        "manuel": true
      }
    ]
  },
  {
    "id": "Gliofocus",
    "acronyme": "Gliofocus",
    "titre": "Étude de phase 3 comparant le niraparib au témozolomide chez des participants adultes atteints de glioblastome non méthylé MGMT nouvellement diagnostiqué",
    "resume": "compare l'efficacité du niraparib, un inhibiteur sélectif de PARP1/2, par rapport au témozolomide chez des patients adultes atteints d'un glioblastome non méthylé MGMT nouvellement diagnostiqué",
    "phase": "III",
    "pathologie": "Glioblastome",
    "promoteur": "Ivy Brain Tumor Center",
    "investigateur": "M. Touat",
    "identifiant": "NCT06388733",
    "contact": {
      "nom": "",
      "email": "",
      "tel": ""
    },
    "statut": "ouvert",
    "document": "https://clinicaltrials.gov/study/NCT06388733?cond=Glioblastoma&term=niraparib%20&viewType=Card&intr=temozolomide&rank=3",
    "majLe": "2026-11-07",
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
        "texte": "Glioblastome nouvellement diagnostiqué, MGMT non méthylé, éligible à la radiochimiothérapie standard",
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
            },
            {
              "champ": "mgmt",
              "op": "=",
              "val": "non_methyle"
            },
            {
              "champ": "traitement_prevu",
              "op": "=",
              "val": "stupp"
            }
          ]
        }
      },
      {
        "type": "non-inclusion",
        "texte": "Implant de carmustine ou autre traitement antitumoral supplémentaire",
        "manuel": true
      },
      {
        "type": "non-inclusion",
        "texte": "Atteinte méningée extensive",
        "cond": {
          "champ": "leptomeninge",
          "op": "=",
          "val": true
        }
      }
    ]
  },
  {
    "id": "STRATEGLIO",
    "acronyme": "STRATEGLIO",
    "titre": "Étude de phase 3 randomisée évaluant le bénéfice d’une intensification du traitement par témozolomide par rapport au régime standard chez des patients adultes ayant un glioblastome",
    "resume": "Évaluer le bénéfice d’une intensification du traitement par témozolomide (prescription précoce et prolongation du traitement adjuvant) par rapport au protocole standard selon la survie globale",
    "phase": "III",
    "pathologie": "Glioblastome",
    "promoteur": "Centre Oscar Lambret",
    "investigateur": "A. Alentorn",
    "identifiant": "NCT03663725",
    "contact": {
      "nom": "",
      "email": "",
      "tel": ""
    },
    "statut": "ouvert",
    "document": "https://clinicaltrials.gov/study/NCT03663725?cond=Glioblastoma&term=STRATEGLIO&viewType=Card&rank=1",
    "majLe": "2026-11-07",
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
        "texte": "Glioblastome de novo prouvé histologiquement (diagnostic extemporané ou examen anatomopathologique standard)",
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
        "texte": "Indice de Karnofsky d'au moins 60",
        "cond": {
          "champ": "kps",
          "op": ">=",
          "val": 60
        }
      },
      {
        "type": "inclusion",
        "texte": "Éligible à une radiothérapie standard (60 Gy en 30 fractions)",
        "cond": {
          "champ": "traitement_prevu",
          "op": "=",
          "val": "stupp"
        }
      },
      {
        "type": "inclusion",
        "texte": "Contraception efficace pendant l'étude et au moins 6 mois après la fin du traitement ; test de grossesse urinaire ou sérique négatif dans les 7 jours",
        "manuel": true
      },
      {
        "type": "non-inclusion",
        "texte": "Glioblastome secondaire ou récurrent (critère partiel : le reste est à confirmer en consultation)",
        "cond": {
          "champ": "situation",
          "op": "dans",
          "val": [
            "recidive1",
            "recidive2"
          ]
        }
      },
      {
        "type": "non-inclusion",
        "texte": "Myélosuppression sévère avant l'inclusion",
        "manuel": true
      },
      {
        "type": "non-inclusion",
        "texte": "Antécédent d'autre cancer dans les 5 ans précédant l'inclusion",
        "cond": {
          "champ": "autre_cancer",
          "op": "=",
          "val": true
        }
      },
      {
        "type": "non-inclusion",
        "texte": "Groupe expérimental : délai de plus de 15 jours entre la chirurgie ou la biopsie initiale et le début du traitement",
        "manuel": true
      },
      {
        "type": "non-inclusion",
        "texte": "Délai de plus de 43 jours entre la chirurgie ou la biopsie initiale et le début de la radiothérapie",
        "manuel": true
      },
      {
        "type": "non-inclusion",
        "texte": "Utilisation prévue de champs électriques (TTFields) pour le traitement de la tumeur",
        "manuel": true
      },
      {
        "type": "non-inclusion",
        "texte": "Implant contenant de la carmustine",
        "manuel": true
      },
      {
        "type": "non-inclusion",
        "texte": "Toxicités d'un traitement anticancéreux antérieur non revenues à un grade ≤ 1 (CTCAE), hors alopécie, nausées, vomissements et symptômes neurologiques",
        "manuel": true
      },
      {
        "type": "non-inclusion",
        "texte": "Hypersensibilité à la substance active ou à un excipient des produits expérimentaux",
        "manuel": true
      },
      {
        "type": "non-inclusion",
        "texte": "Participation en cours à une autre recherche, ou agent ou dispositif expérimental dans les 30 jours précédant l'inclusion",
        "manuel": true
      },
      {
        "type": "non-inclusion",
        "texte": "Condition médicale ou psychiatrique, ou anomalie de laboratoire, pouvant empêcher le suivi",
        "manuel": true
      },
      {
        "type": "non-inclusion",
        "texte": "Incapacité à avaler ou à absorber un traitement par voie orale",
        "manuel": true
      },
      {
        "type": "non-inclusion",
        "texte": "Sérologie VIH, VHB ou VHC positive",
        "cond": {
          "champ": "immunodep",
          "op": "=",
          "val": true
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
      }
    ]
  },
  {
    "id": "OPTIMUM",
    "acronyme": "OPTIMUM",
    "titre": "Metformine en association avec RT/TMZ comme thérapie ciblée métabolique pour les patients atteints d’un GBM OXPHOS",
    "resume": "",
    "phase": "II",
    "pathologie": "Glioblastome",
    "promoteur": "Hôpital Foch",
    "investigateur": "M. Sanson",
    "identifiant": "NCT04945148",
    "contact": {
      "nom": "",
      "email": "",
      "tel": ""
    },
    "statut": "ouvert",
    "document": "https://clinicaltrials.gov/study/NCT04945148?cond=Glioblastoma&term=OPTIMUM%20OXPHOS&viewType=Card&rank=1",
    "majLe": "2026-11-07",
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
        "texte": "Indice de performance ECOG de 0 à 2",
        "cond": {
          "champ": "kps",
          "op": ">=",
          "val": 50
        }
      },
      {
        "type": "inclusion",
        "texte": "Glioblastome IDH-sauvage supratentoriel nouvellement diagnostiqué",
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
        "texte": "Tumeur supratentorielle",
        "cond": {
          "champ": "siege",
          "op": "=",
          "val": "sus"
        }
      },
      {
        "type": "inclusion",
        "texte": "Glioblastome de type OXPHOS (classification moléculaire, selon le titre de l'essai)",
        "manuel": true
      },
      {
        "type": "inclusion",
        "texte": "Candidat à une radiochimiothérapie concomitante selon Stupp (protocole de Stupp accéléré non éligible)",
        "cond": {
          "champ": "traitement_prevu",
          "op": "=",
          "val": "stupp"
        }
      },
      {
        "type": "inclusion",
        "texte": "Début de la radiothérapie dans les 7 semaines suivant le diagnostic",
        "manuel": true
      },
      {
        "type": "non-inclusion",
        "texte": "Insuffisance rénale sévère",
        "manuel": true
      },
      {
        "type": "non-inclusion",
        "texte": "Antécédent de pré-coma diabétique",
        "manuel": true
      },
      {
        "type": "non-inclusion",
        "texte": "Antécédent d'acidose métabolique aiguë",
        "manuel": true
      }
    ]
  },
  {
    "id": "EF-41 Keynote",
    "acronyme": "EF-41 Keynote",
    "titre": "Étude de phase 3, randomisée, en double aveugle, contrôlée par placebo, portant sur Optune® (champs TTFields, 200 kHz) en association avec le Témozolomide et le Pembrolizumab en entretien versus Optune® en association avec le Témozolomide et le placebo en entretien pour le traitement du glioblastome nouvellement diagnostiqué",
    "resume": "L'étude EF-41 Keynote est un essai clinique international, ouvert et randomisé de phase 3 en double aveugle contre placebo, qui compare l'efficacité du Pembrolizumab+ Optune versus Placebo+ Optune chez des patients adultes atteints d'un glioblastome nouvellement diagnostiqué, traité par STUPP",
    "phase": "III",
    "pathologie": "Glioblastome",
    "promoteur": "Novocure",
    "investigateur": "K.Hoang-Xuan",
    "identifiant": "NCT04471844",
    "contact": {
      "nom": "",
      "email": "",
      "tel": ""
    },
    "statut": "ouvert",
    "document": "https://clinicaltrials.gov/study/NCT04471844?cond=Glioblastoma&term=Optune&viewType=Card&rank=3",
    "majLe": "2026-11-07",
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
        "texte": "Indice de performance ECOG de 0 à 1",
        "cond": {
          "champ": "kps",
          "op": ">=",
          "val": 70
        }
      },
      {
        "type": "inclusion",
        "texte": "Glioblastome (OMS 2021) nouvellement diagnostiqué",
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
        "texte": "Candidat à une radiochimiothérapie concomitante selon Stupp (protocole de Stupp accéléré non éligible)",
        "cond": {
          "champ": "traitement_prevu",
          "op": "=",
          "val": "stupp"
        }
      },
      {
        "type": "inclusion",
        "texte": "Matériel tumoral disponible pour envoi centralisé (statut MGMT)",
        "manuel": true
      },
      {
        "type": "non-inclusion",
        "texte": "Maladie auto-immune",
        "cond": {
          "champ": "auto_immune",
          "op": "=",
          "val": true
        }
      },
      {
        "type": "non-inclusion",
        "texte": "Plus de 2 mg de dexaméthasone",
        "cond": {
          "champ": "dexa",
          "op": ">",
          "val": 2
        }
      },
      {
        "type": "non-inclusion",
        "texte": "Contre-indication à l'Optune (TTFields)",
        "manuel": true
      },
      {
        "type": "non-inclusion",
        "texte": "Localisation infratentorielle ou leptoméningée",
        "cond": {
          "ou": [
            {
              "champ": "siege",
              "op": "=",
              "val": "sous"
            },
            {
              "champ": "leptomeninge",
              "op": "=",
              "val": true
            }
          ]
        }
      }
    ]
  },
  {
    "id": "SIBDOPA",
    "acronyme": "SIBDOPA",
    "titre": "Boost intégré simultané (SIB) guidé par 18F-DOPA-TEP chez les patients atteints d’un glioblastome partiellement opéré ou non opérable",
    "resume": "Évaluer la survie globale (SG) des patients atteints d’un glioblastome et pris en charge par SIB avec augmentation de dose guidée par la TEP-FDOPA",
    "phase": "II",
    "pathologie": "Glioblastome",
    "promoteur": "Centre Paul Strauss",
    "investigateur": "Julian Jacob",
    "identifiant": "NCT05653622",
    "contact": {
      "nom": "",
      "email": "",
      "tel": ""
    },
    "statut": "ouvert",
    "document": "https://clinicaltrials.gov/study/NCT05653622?cond=Glioblastoma&term=18F%20DOPA&viewType=Card&intr=boost&rank=1",
    "majLe": "2026-11-07",
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
        "texte": "Indice de Karnofsky d'au moins 50",
        "cond": {
          "champ": "kps",
          "op": ">=",
          "val": 50
        }
      },
      {
        "type": "inclusion",
        "texte": "Patient fragile (unfit), sans indication au protocole de Stupp",
        "cond": {
          "et": [
            {
              "champ": "situation",
              "op": "=",
              "val": "nouveau"
            },
            {
              "champ": "traitement_prevu",
              "op": "=",
              "val": "pas_stupp"
            }
          ]
        }
      },
      {
        "type": "inclusion",
        "texte": "Patient non opérable de 18 à 70 ans : résultat de biopsie disponible",
        "manuel": true
      },
      {
        "type": "inclusion",
        "texte": "Patient de plus de 70 ans : score de Balducci I ou II ou G8 supérieur à 9, Karnofsky d'au moins 60, et résection partielle (IRM post-opératoire) ou résultat de biopsie disponible",
        "manuel": true
      },
      {
        "type": "inclusion",
        "texte": "Glioblastome prouvé histologiquement",
        "cond": {
          "champ": "diagnostic",
          "op": "=",
          "val": "glioblastome"
        }
      },
      {
        "type": "inclusion",
        "texte": "Augmentation du métabolisme des acides aminés en TEP-FDOPA permettant le contourage du volume cible biologique",
        "manuel": true
      },
      {
        "type": "inclusion",
        "texte": "Aucun antécédent dans les 5 ans de radiothérapie, chimiothérapie, immunothérapie ou thérapie ciblée, ni de cancer autre que le glioblastome",
        "cond": {
          "et": [
            {
              "champ": "rt_cerebrale",
              "op": "=",
              "val": false
            },
            {
              "champ": "chimio",
              "op": "=",
              "val": false
            },
            {
              "champ": "autre_cancer",
              "op": "=",
              "val": false
            }
          ]
        }
      },
      {
        "type": "non-inclusion",
        "texte": "Indication à une irradiation selon le protocole de Stupp (patient fit)",
        "cond": {
          "champ": "traitement_prevu",
          "op": "=",
          "val": "stupp"
        }
      },
      {
        "type": "non-inclusion",
        "texte": "Antécédent de métastases cérébrales",
        "manuel": true
      },
      {
        "type": "non-inclusion",
        "texte": "PTV2 à moins de 2 cm du chiasma et des nerfs optiques",
        "manuel": true
      },
      {
        "type": "non-inclusion",
        "texte": "Absence de captation de FDOPA",
        "manuel": true
      }
    ]
  },
  {
    "id": "IPAX-3 / IPAX BrIGHT",
    "acronyme": "IPAX-3 / IPAX BrIGHT",
    "titre": "Essai clinique de phase 3 randomisé, multicentrique, international, ouvert, testant TLX101-Tx (¹³¹I-iodofalan) + Lomustine versus Lomustine seule chez les patients présentant un glioblastome en première récidive",
    "resume": "TLX101-Tx (¹³¹I-iodofalan) cible le transporteur d’acides aminés LAT1 (L-type Amino Acid Transporter 1) et permet de délivrer de l’iode-131 radioactif aux cellules tumorales",
    "phase": "III",
    "pathologie": "Glioblastome",
    "promoteur": "Telix Pharmaceuticals",
    "investigateur": "Ahmed IDBAIH",
    "identifiant": "NCT07100730",
    "contact": {
      "nom": "",
      "email": "",
      "tel": ""
    },
    "statut": "ouvert",
    "document": "https://clinicaltrials.gov/study/NCT07100730?cond=Glioblastoma&term=TLX101-Tx%20&viewType=Card&rank=1",
    "majLe": "2026-11-07",
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
        "texte": "Glioblastome confirmé histologiquement",
        "cond": {
          "champ": "diagnostic",
          "op": "=",
          "val": "glioblastome"
        }
      },
      {
        "type": "inclusion",
        "texte": "Première récidive ou progression après le traitement de première ligne",
        "cond": {
          "champ": "situation",
          "op": "=",
          "val": "recidive1"
        }
      },
      {
        "type": "inclusion",
        "texte": "Récidive au moins 3 mois (13 semaines) après la fin de la radiothérapie initiale",
        "cond": {
          "champ": "delai_rt",
          "op": ">=",
          "val": 13
        }
      },
      {
        "type": "inclusion",
        "texte": "Maladie mesurable selon les critères PET-RANO",
        "manuel": true
      },
      {
        "type": "inclusion",
        "texte": "Fixation tumorale augmentée au PET-FET (TBRmax d'au moins 2,3)",
        "manuel": true
      },
      {
        "type": "inclusion",
        "texte": "En cas de chirurgie de la récidive : maladie résiduelle mesurable",
        "manuel": true
      },
      {
        "type": "inclusion",
        "texte": "Corticoïdes : dose stable ou en baisse depuis au moins 7 jours (ou aucun corticoïde)",
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
        "texte": "Fonctions hématologique, rénale et hépatique compatibles avec le traitement",
        "manuel": true
      },
      {
        "type": "non-inclusion",
        "texte": "Radiothérapie cérébrale dans les 3 mois précédents",
        "cond": {
          "champ": "delai_rt",
          "op": "<",
          "val": 13
        }
      },
      {
        "type": "non-inclusion",
        "texte": "Bévacizumab dans les 6 semaines précédentes",
        "manuel": true
      },
      {
        "type": "non-inclusion",
        "texte": "Contre-indication au PET-FET ou à l'IRM (critère partiel : le reste est à confirmer en consultation)",
        "cond": {
          "champ": "irm_ci",
          "op": "=",
          "val": true
        }
      },
      {
        "type": "non-inclusion",
        "texte": "Impossibilité de respecter les contraintes d'hospitalisation et d'isolement liées à l'administration d'iode 131",
        "manuel": true
      }
    ]
  },
  {
    "id": "FORTE",
    "acronyme": "FORTE",
    "titre": "Étude de phase 2 évaluant l'efficacité et l'innocuité du plixorafenib chez des participants atteints d'un cancer présentant des altérations de BRAF",
    "resume": "",
    "phase": "II",
    "pathologie": "Glioblastome | Astrocytome | Oligodendrogliome | Gliome de la ligne médiane | Autre gliome",
    "promoteur": "FORE",
    "investigateur": "M. Touat",
    "identifiant": "NCT05503797",
    "contact": {
      "nom": "",
      "email": "",
      "tel": ""
    },
    "statut": "ouvert",
    "document": "https://clinicaltrials.gov/study/NCT05503797?term=plixorafenib%20BRAF&viewType=Card&rank=2",
    "majLe": "2026-11-07",
    "criteres": [
      {
        "type": "inclusion",
        "texte": "Âge d'au moins 10 ans",
        "cond": {
          "champ": "age",
          "op": ">=",
          "val": 10
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
        "texte": "Gliome de bas grade ou de haut grade avec mutation BRAF V600 ou fusion BRAF",
        "cond": {
          "et": [
            {
              "champ": "diagnostic",
              "op": "dans",
              "val": [
                "glioblastome",
                "astro_idh",
                "oligo",
                "dmg",
                "gliome_autre"
              ]
            },
            {
              "champ": "braf",
              "op": "=",
              "val": "presente"
            }
          ]
        }
      },
      {
        "type": "non-inclusion",
        "texte": "Traitement antérieur par un anti-BRAF et/ou un anti-MEK",
        "manuel": true
      },
      {
        "type": "non-inclusion",
        "texte": "Atteinte méningée extensive",
        "cond": {
          "champ": "leptomeninge",
          "op": "=",
          "val": true
        }
      }
    ]
  },
  {
    "id": "AMG 193",
    "acronyme": "AMG 193",
    "titre": "Étude de phase 1/2 évaluant l'efficacité et l'innocuité de l’AMG 193 chez des participants atteints d'un cancer présentant des altérations de MTAP",
    "resume": "",
    "phase": "I/II",
    "pathologie": "Glioblastome | Astrocytome | Oligodendrogliome | Gliome de la ligne médiane | Autre gliome",
    "promoteur": "AMGEN",
    "investigateur": "M. Touat",
    "identifiant": "NCT05975073",
    "contact": {
      "nom": "",
      "email": "",
      "tel": ""
    },
    "statut": "ouvert",
    "document": "https://clinicaltrials.gov/study/NCT05975073?intr=amg%20193&viewType=Card&rank=1",
    "majLe": "2026-11-07",
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
        "texte": "Gliome de haut grade récidivant avec délétion de MTAP",
        "cond": {
          "et": [
            {
              "champ": "diagnostic",
              "op": "dans",
              "val": [
                "glioblastome",
                "dmg",
                "astro_idh",
                "oligo",
                "gliome_autre"
              ]
            },
            {
              "champ": "situation",
              "op": "dans",
              "val": [
                "recidive1",
                "recidive2"
              ]
            },
            {
              "champ": "mtap",
              "op": "=",
              "val": "presente"
            }
          ]
        }
      },
      {
        "type": "inclusion",
        "texte": "Gliome de haut grade (grade 3 ou 4)",
        "cond": {
          "ou": [
            {
              "champ": "diagnostic",
              "op": "dans",
              "val": [
                "glioblastome",
                "dmg"
              ]
            },
            {
              "champ": "grade",
              "op": "dans",
              "val": [
                3,
                4
              ]
            }
          ]
        }
      },
      {
        "type": "non-inclusion",
        "texte": "Plus de 2 lignes de traitement antérieures",
        "manuel": true
      },
      {
        "type": "non-inclusion",
        "texte": "Traitement antérieur par bévacizumab",
        "cond": {
          "champ": "bevacizumab",
          "op": "=",
          "val": true
        }
      },
      {
        "type": "non-inclusion",
        "texte": "Atteinte méningée extensive",
        "cond": {
          "champ": "leptomeninge",
          "op": "=",
          "val": true
        }
      }
    ]
  },
  {
    "id": "RéciDOPA",
    "acronyme": "RéciDOPA",
    "titre": "Essai de phase II randomisé évaluant l’apport de la TEP-FDOPA dans la ré-irradiation des glioblastomes",
    "resume": "Déterminer l’efficacité d’un boost guidé par FDOPA utilisé pour la délinéation des tumeurs sur la survie sans récidive du site tumoral chez des patients atteints d’un glioblastome en récidive",
    "phase": "II",
    "pathologie": "Glioblastome",
    "promoteur": "Centre Paul Strauss",
    "investigateur": "Julian Jacob",
    "identifiant": "NCT05653635",
    "contact": {
      "nom": "",
      "email": "",
      "tel": ""
    },
    "statut": "ouvert",
    "document": "https://clinicaltrials.gov/study/NCT05653635?cond=Glioblastoma&term=reciDOPA&viewType=Card&rank=1",
    "majLe": "2026-11-07",
    "criteres": [
      {
        "type": "inclusion",
        "texte": "Glioblastome de grade IV OMS, IDH non muté, initialement prouvé histologiquement",
        "cond": {
          "champ": "diagnostic",
          "op": "=",
          "val": "glioblastome"
        }
      },
      {
        "type": "inclusion",
        "texte": "Indice de Karnofsky d'au moins 50",
        "cond": {
          "champ": "kps",
          "op": ">=",
          "val": 50
        }
      },
      {
        "type": "inclusion",
        "texte": "Statut neurologique ≥ 2 (annexe 4 du protocole)",
        "manuel": true
      },
      {
        "type": "inclusion",
        "texte": "Délai d'au moins 16 semaines entre la dernière séance de radiothérapie et la récidive",
        "cond": {
          "champ": "delai_rt",
          "op": ">=",
          "val": 16
        }
      },
      {
        "type": "inclusion",
        "texte": "Délai de plus de 15 jours entre la dernière prise de chimiothérapie et le début de la radiothérapie",
        "manuel": true
      },
      {
        "type": "inclusion",
        "texte": "Délai d'au moins 48 heures entre la dernière prise de chimiothérapie et la TEP F-DOPA",
        "manuel": true
      },
      {
        "type": "inclusion",
        "texte": "Antécédent de radiothérapie sur le site à ré-irradier ou à proximité (5 à 7 cm)",
        "cond": {
          "champ": "rt_cerebrale",
          "op": "=",
          "val": true
        }
      },
      {
        "type": "inclusion",
        "texte": "Récidive prouvée radiologiquement selon les critères 1 et 2 de Wen et al.",
        "cond": {
          "champ": "situation",
          "op": "dans",
          "val": [
            "recidive1",
            "recidive2"
          ]
        }
      },
      {
        "type": "inclusion",
        "texte": "Reliquat après chirurgie partielle de la récidive",
        "manuel": true
      },
      {
        "type": "inclusion",
        "texte": "Un à trois sites de récidive, de grand axe inférieur à 35 mm (critère partiel : le reste est à confirmer en consultation)",
        "cond": {
          "champ": "taille",
          "op": "=",
          "val": "t35"
        }
      },
      {
        "type": "inclusion",
        "texte": "Sites de récidive séparés d'au moins 5 mm",
        "manuel": true
      },
      {
        "type": "inclusion",
        "texte": "Volume de chaque lésion inférieur à 35 mL",
        "manuel": true
      },
      {
        "type": "inclusion",
        "texte": "Distance supérieure à 10 mm entre les nodules de récidive et les voies optiques (nerfs optiques, chiasma) et/ou le tronc cérébral",
        "manuel": true
      },
      {
        "type": "inclusion",
        "texte": "Captation de F-DOPA à un niveau tumoral (analyse visuelle et semi-quantitative)",
        "manuel": true
      },
      {
        "type": "inclusion",
        "texte": "Irradiation en conditions stéréotaxiques validée en réunion de concertation pluridisciplinaire de neuro-oncologie",
        "manuel": true
      },
      {
        "type": "non-inclusion",
        "texte": "Contre-indication à l'IRM ou à la TEP (critère partiel : le reste est à confirmer en consultation)",
        "cond": {
          "champ": "irm_ci",
          "op": "=",
          "val": true
        }
      },
      {
        "type": "non-inclusion",
        "texte": "Hypersensibilité à la substance active ou à un constituant des produits utilisés pour l'imagerie (18F-DOPA, gadolinium) (critère partiel : le reste est à confirmer en consultation)",
        "cond": {
          "champ": "irm_ci",
          "op": "=",
          "val": true
        }
      },
      {
        "type": "non-inclusion",
        "texte": "Gliomatose",
        "manuel": true
      }
    ]
  },
  {
    "id": "HARM GLIO",
    "acronyme": "HARM GLIO",
    "titre": "Radiotherapie Accélérée Hypofractionnée par MR-Linac chez les patients âgés souffrant de glioblastomes : phase III multicentrique randomisée",
    "resume": "L'étude est un essai clinique multicentrique randomisé de phase 3 visant à comparer deux protocoles de radiothérapie hypofractionnée accélérée chez des patients de 65 ans et plus traités pour un glioblastome",
    "phase": "III",
    "pathologie": "Glioblastome",
    "promoteur": "APHP",
    "investigateur": "Julian Jacob",
    "identifiant": "",
    "contact": {
      "nom": "",
      "email": "",
      "tel": ""
    },
    "statut": "ouvert",
    "document": "",
    "majLe": "2026-11-07",
    "criteres": [
      {
        "type": "inclusion",
        "texte": "Âge d'au moins 65 ans",
        "cond": {
          "champ": "age",
          "op": ">=",
          "val": 65
        }
      },
      {
        "type": "inclusion",
        "texte": "Gliome malin de grade 4 IDH-sauvage (OMS 2021) confirmé histopathologiquement",
        "cond": {
          "champ": "diagnostic",
          "op": "=",
          "val": "glioblastome"
        }
      },
      {
        "type": "inclusion",
        "texte": "Biopsie ou résection subtotale réalisée au plus 6 semaines avant l'inclusion (critère partiel : le reste est à confirmer en consultation)",
        "cond": {
          "champ": "chirurgie",
          "op": "dans",
          "val": [
            "biopsie",
            "partielle"
          ]
        }
      },
      {
        "type": "inclusion",
        "texte": "Jugé apte à recevoir 15 fractions quotidiennes de radiothérapie sur 3 semaines avec témozolomide concomitant",
        "cond": {
          "et": [
            {
              "champ": "situation",
              "op": "=",
              "val": "nouveau"
            },
            {
              "champ": "traitement_prevu",
              "op": "=",
              "val": "hypofractionne"
            }
          ]
        }
      },
      {
        "type": "inclusion",
        "texte": "Espérance de vie d'au moins 12 semaines",
        "manuel": true
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
        "texte": "Volume cible macroscopique de 5 cm au plus sur l'axe maximal (IRM T1 gadolinium)",
        "cond": {
          "champ": "taille",
          "op": "dans",
          "val": [
            "t35",
            "t5"
          ]
        }
      },
      {
        "type": "inclusion",
        "texte": "Volume cible macroscopique à au moins 2 cm du tronc cérébral et des voies optiques (chiasma, nerfs optiques)",
        "manuel": true
      },
      {
        "type": "inclusion",
        "texte": "Corticoïdes : dose stable ou en baisse pendant les 7 jours précédant la randomisation (ou aucun corticoïde)",
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
        "texte": "Corticoïdes : moins de 40 mg/jour d'équivalent prednisone (environ 6 mg de dexaméthasone)",
        "cond": {
          "champ": "dexa",
          "op": "<",
          "val": 6
        }
      },
      {
        "type": "inclusion",
        "texte": "Capacité et volonté de remplir les questionnaires de qualité de vie et neuropsychologiques",
        "manuel": true
      },
      {
        "type": "inclusion",
        "texte": "Bilan biologique conforme aux seuils du protocole (numération, bilan hépatique, fonction rénale)",
        "manuel": true
      },
      {
        "type": "non-inclusion",
        "texte": "Gliome avec mutation IDH",
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
        "texte": "Glioblastome multifocal (au moins deux volumes cibles en IRM T1 gadolinium)",
        "manuel": true
      },
      {
        "type": "non-inclusion",
        "texte": "Contre-indication à l'IRM ou aux produits de contraste à base de gadolinium",
        "cond": {
          "champ": "irm_ci",
          "op": "=",
          "val": true
        }
      },
      {
        "type": "non-inclusion",
        "texte": "Incapacité à rester allongé en position couchée pendant au moins 90 minutes",
        "manuel": true
      },
      {
        "type": "non-inclusion",
        "texte": "Incapacité à tolérer l'immobilisation dans un masque thermoplastique",
        "manuel": true
      },
      {
        "type": "non-inclusion",
        "texte": "Poids supérieur à 140 kg et/ou circonférence supérieure à 60 cm",
        "manuel": true
      },
      {
        "type": "non-inclusion",
        "texte": "Leucocytes inférieurs à 4 000/mm³, hémoglobine inférieure à 10 g/dL, plaquettes inférieures à 100 000/mm³, ou insuffisance rénale ou hépatique sévère",
        "manuel": true
      },
      {
        "type": "non-inclusion",
        "texte": "Antécédent de radiothérapie cérébrale",
        "cond": {
          "champ": "rt_cerebrale",
          "op": "=",
          "val": true
        }
      },
      {
        "type": "non-inclusion",
        "texte": "Gliome malin touchant le pont, le bulbe rachidien ou la moelle épinière",
        "manuel": true
      },
      {
        "type": "non-inclusion",
        "texte": "Dissémination leptoméningée de la maladie",
        "cond": {
          "champ": "leptomeninge",
          "op": "=",
          "val": true
        }
      }
    ]
  },
  {
    "id": "LUMEN 1",
    "acronyme": "LUMEN 1",
    "titre": "Essai européen de phase II randomisé pour l’étude du Lutathera dans les méningiomes réfractaires",
    "resume": "",
    "phase": "",
    "pathologie": "Méningiome",
    "promoteur": "EORTC",
    "investigateur": "Emeline Tabouret",
    "identifiant": "NCT06326190",
    "contact": {
      "nom": "",
      "email": "",
      "tel": ""
    },
    "statut": "ouvert",
    "document": "https://clinicaltrials.gov/study/NCT06326190?cond=Meningioma&term=Lutathera&viewType=Card&page=1&rank=3",
    "majLe": "2026-11-07",
    "criteres": [
      {
        "type": "inclusion",
        "texte": "Méningiome réfractaire (après chirurgie et radiothérapie), avant tout traitement systémique",
        "cond": {
          "et": [
            {
              "champ": "diagnostic",
              "op": "=",
              "val": "meningiome"
            },
            {
              "champ": "evolution_men",
              "op": "=",
              "val": "refractaire"
            },
            {
              "champ": "ttt_syst",
              "op": "=",
              "val": false
            }
          ]
        }
      },
      {
        "type": "inclusion",
        "texte": "Méningiome de grade 1, 2 ou 3",
        "cond": {
          "et": [
            {
              "champ": "grade",
              "op": ">=",
              "val": 1
            },
            {
              "champ": "grade",
              "op": "<=",
              "val": 3
            }
          ]
        }
      },
      {
        "type": "inclusion",
        "texte": "Progression radiologique selon les critères RANO",
        "cond": {
          "champ": "evolution_men",
          "op": "=",
          "val": "refractaire"
        }
      },
      {
        "type": "inclusion",
        "texte": "Progression de plus de 25 % sur 2 ans selon les critères RANO",
        "manuel": true
      },
      {
        "type": "inclusion",
        "texte": "Positivité des récepteurs de la somatostatine en TEP",
        "cond": {
          "champ": "tep_somato",
          "op": "=",
          "val": "positive"
        }
      }
    ]
  },
  {
    "id": "ELUMEN",
    "acronyme": "ELUMEN",
    "titre": "Essai français de phase II pour l’étude de l’association Lutathera et everolimus dans les méningiomes réfractaires",
    "resume": "",
    "phase": "II",
    "pathologie": "Méningiome",
    "promoteur": "CHU Nancy",
    "investigateur": "Antoine verger",
    "identifiant": "NCT06126588",
    "contact": {
      "nom": "",
      "email": "",
      "tel": ""
    },
    "statut": "ouvert",
    "document": "https://clinicaltrials.gov/study/NCT06126588?cond=Meningioma&term=ELUMEN&viewType=Card&rank=1",
    "majLe": "2026-11-07",
    "criteres": [
      {
        "type": "inclusion",
        "texte": "Méningiome réfractaire (après chirurgie et radiothérapie)",
        "cond": {
          "et": [
            {
              "champ": "diagnostic",
              "op": "=",
              "val": "meningiome"
            },
            {
              "champ": "evolution_men",
              "op": "=",
              "val": "refractaire"
            }
          ]
        }
      },
      {
        "type": "inclusion",
        "texte": "De préférence avant tout traitement systémique",
        "manuel": true
      },
      {
        "type": "inclusion",
        "texte": "Méningiome de grade 2 ou 3",
        "cond": {
          "et": [
            {
              "champ": "grade",
              "op": ">=",
              "val": 2
            },
            {
              "champ": "grade",
              "op": "<=",
              "val": 3
            }
          ]
        }
      },
      {
        "type": "inclusion",
        "texte": "Progression radiologique selon les critères RANO",
        "cond": {
          "champ": "evolution_men",
          "op": "=",
          "val": "refractaire"
        }
      },
      {
        "type": "inclusion",
        "texte": "Progression avec une pente de 10 à 30 % sur les 6 derniers mois selon les critères RANO",
        "manuel": true
      },
      {
        "type": "inclusion",
        "texte": "Positivité des récepteurs de la somatostatine en TEP",
        "cond": {
          "champ": "tep_somato",
          "op": "=",
          "val": "positive"
        }
      }
    ]
  },
  {
    "id": "COG PROTON 01",
    "acronyme": "COG PROTON 01",
    "titre": "Essai multicentrique français randomisé de phase III, comparant la protonthérapie à la RCMI aux photons X pour des patients présentant un méningiome grade 1 du sinus caverneux",
    "resume": "Comparer la détérioration cognitive et/ou fonctionnelle (visuelle, auditive, neurologique et/ou endocrinologique), à long terme, chez les patients traités par protonthérapie (PRT) ou radiothérapie normo-fractionnée (XRT) pour un méningiome du sinus caverneux, 5 ans après la fin de l'irradiation.",
    "phase": "III",
    "pathologie": "Méningiome",
    "promoteur": "Centre Francois Baclesse",
    "investigateur": "Julian Jacob",
    "identifiant": "NCT05895344",
    "contact": {
      "nom": "",
      "email": "",
      "tel": ""
    },
    "statut": "ouvert",
    "document": "https://clinicaltrials.gov/study/NCT05895344?cond=Meningioma&term=cognition&viewType=Card&intr=proton&rank=2",
    "majLe": "2026-11-07",
    "criteres": [
      {
        "type": "inclusion",
        "texte": "Méningiome du sinus caverneux, ou de l'étage antérieur de la base du crâne avec envahissement du sinus caverneux",
        "cond": {
          "et": [
            {
              "champ": "diagnostic",
              "op": "=",
              "val": "meningiome"
            },
            {
              "champ": "localisation",
              "op": "=",
              "val": "sinus"
            }
          ]
        }
      },
      {
        "type": "inclusion",
        "texte": "Méningiome du sinus caverneux : CTV supérieur à 3 cm",
        "manuel": true
      },
      {
        "type": "inclusion",
        "texte": "Méningiome de grade 1 prouvé histologiquement (ou suspecté si biopsie impossible)",
        "cond": {
          "champ": "grade",
          "op": "=",
          "val": 1
        }
      },
      {
        "type": "non-inclusion",
        "texte": "Méningiome d'une autre localisation que le sinus caverneux",
        "cond": {
          "champ": "localisation",
          "op": "=",
          "val": "autre"
        }
      },
      {
        "type": "non-inclusion",
        "texte": "Mutation génétique de prédisposition aux méningiomes (NF2, SMARCE1, etc.)",
        "manuel": true
      },
      {
        "type": "non-inclusion",
        "texte": "Radiochirurgie ou schéma hypofractionné prévu",
        "manuel": true
      },
      {
        "type": "non-inclusion",
        "texte": "Traitement antiépileptique non stabilisé (crise dans les 6 dernières semaines)",
        "cond": {
          "champ": "epilepsie_nc",
          "op": "=",
          "val": true
        }
      },
      {
        "type": "non-inclusion",
        "texte": "Pathologie neurologique ou psychiatrique sévère",
        "manuel": true
      }
    ]
  },
  {
    "id": "Methoglu",
    "acronyme": "Methoglu",
    "titre": "Reprise d’une chimiothérapie par méthotrexate à haute dose, à intervalle raccourci, en association avec le glucarpidase, pour des lymphomes primitifs du SNC en rechute",
    "resume": "Déterminer l’intervalle minimum toléré entre 2 administrations de MTX HD associées à du glucarpidase chez des patients avec LPSNC ayant auparavant répondu au MTX",
    "phase": "",
    "pathologie": "Lymphome cérébral primitif",
    "promoteur": "APHP",
    "investigateur": "K. Hoang-Xuan, C. Houillier",
    "identifiant": "NCT05135858",
    "contact": {
      "nom": "",
      "email": "",
      "tel": ""
    },
    "statut": "ouvert",
    "document": "https://clinicaltrials.gov/study/NCT05135858?cond=Lymphoma&term=Methoglu&viewType=Card&rank=1",
    "majLe": "2026-11-07",
    "criteres": [
      {
        "type": "inclusion",
        "texte": "Lymphome primitif du SNC de type DLBCL, avec preuve histologique ou cytologique au diagnostic initial",
        "cond": {
          "champ": "diagnostic",
          "op": "=",
          "val": "lcp"
        }
      },
      {
        "type": "inclusion",
        "texte": "Rechute cérébrale, sans atteinte systémique",
        "cond": {
          "et": [
            {
              "champ": "situation",
              "op": "dans",
              "val": [
                "recidive1",
                "recidive2"
              ]
            },
            {
              "champ": "lcp_extension",
              "op": "=",
              "val": "cerebral"
            }
          ]
        }
      },
      {
        "type": "inclusion",
        "texte": "Rémission complète d'au moins 6 mois (26 semaines) en première ligne après une chimiothérapie à base de méthotrexate haute dose (critère partiel : le reste est à confirmer en consultation)",
        "cond": {
          "champ": "mtx_hd",
          "op": "=",
          "val": "recu"
        }
      },
      {
        "type": "inclusion",
        "texte": "Indice de Karnofsky d'au moins 50",
        "cond": {
          "champ": "kps",
          "op": ">=",
          "val": 50
        }
      },
      {
        "type": "inclusion",
        "texte": "Fonctions rénale et hépatique et numération formule sanguine adéquates",
        "manuel": true
      },
      {
        "type": "non-inclusion",
        "texte": "Immunodépression, quelle qu'en soit la cause",
        "cond": {
          "champ": "immunodep",
          "op": "=",
          "val": true
        }
      },
      {
        "type": "non-inclusion",
        "texte": "Hépatite B active ou infection VIH connue",
        "cond": {
          "champ": "immunodep",
          "op": "=",
          "val": true
        }
      },
      {
        "type": "non-inclusion",
        "texte": "Autre cancer actif, à l'exception d'un carcinome baso-cellulaire cutané ou d'un cancer du col in situ",
        "cond": {
          "champ": "autre_cancer",
          "op": "=",
          "val": true
        }
      },
      {
        "type": "non-inclusion",
        "texte": "Obésité (IMC supérieur à 30)",
        "manuel": true
      }
    ]
  },
  {
    "id": "CA-4948-101 - Partie B",
    "acronyme": "CA-4948-101 - Partie B",
    "titre": "Essai de phase 1/2 CA-4948-101 Association emavusertib et ibrutinib pour des lymphomes primitifs du SNC en rechute après ibrutinib",
    "resume": "déterminer la tolérance de l’Emavusertib (inhibiteur IRAK4) en combinaison avec l’Ibrutinib",
    "phase": "I/II",
    "pathologie": "Lymphome cérébral primitif",
    "promoteur": "Curis, Inc",
    "investigateur": "C. Houillier",
    "identifiant": "NCT03328078",
    "contact": {
      "nom": "",
      "email": "",
      "tel": ""
    },
    "statut": "ouvert",
    "document": "https://clinicaltrials.gov/study/NCT03328078?cond=Lymphoma&term=CA-4948-101%20&viewType=Card&rank=1",
    "majLe": "2026-11-07",
    "criteres": [
      {
        "type": "inclusion",
        "texte": "Lymphome primitif du SNC en rechute",
        "cond": {
          "et": [
            {
              "champ": "diagnostic",
              "op": "=",
              "val": "lcp"
            },
            {
              "champ": "situation",
              "op": "dans",
              "val": [
                "recidive1",
                "recidive2"
              ]
            }
          ]
        }
      },
      {
        "type": "inclusion",
        "texte": "Échappement à un traitement comprenant de l'ibrutinib",
        "cond": {
          "champ": "ibtk",
          "op": "=",
          "val": "recu"
        }
      },
      {
        "type": "inclusion",
        "texte": "Au plus 3 lignes de traitement antérieures",
        "manuel": true
      },
      {
        "type": "inclusion",
        "texte": "Indice de performance ECOG de 0 à 2",
        "cond": {
          "champ": "kps",
          "op": ">=",
          "val": 50
        }
      },
      {
        "type": "inclusion",
        "texte": "Lésion parenchymateuse mesurable ou cytologie positive dans le LCR",
        "manuel": true
      },
      {
        "type": "non-inclusion",
        "texte": "Patients immunodéprimés",
        "cond": {
          "champ": "immunodep",
          "op": "=",
          "val": true
        }
      },
      {
        "type": "non-inclusion",
        "texte": "Atteinte intraoculaire isolée",
        "cond": {
          "champ": "lcp_extension",
          "op": "=",
          "val": "oeil"
        }
      },
      {
        "type": "non-inclusion",
        "texte": "Prise concomitante de médicaments allongeant le QT",
        "manuel": true
      }
    ]
  },
  {
    "id": "CA-4948-101 - Partie C",
    "acronyme": "CA-4948-101 - Partie C",
    "titre": "Essai de phase 1/2 CA-4948-101 Association emavusertib et ibrutinib pour des lymphomes primitifs du SNC en rechute après ibrutinib",
    "resume": "évaluer le taux de réponse de l’ibrutinib seul, de l’emavusertib seul et de la combinaison ibrutinib + emavusertib",
    "phase": "I/II",
    "pathologie": "Lymphome cérébral primitif",
    "promoteur": "Curis, Inc",
    "investigateur": "C. Houillier",
    "identifiant": "NCT03328078",
    "contact": {
      "nom": "",
      "email": "",
      "tel": ""
    },
    "statut": "ouvert",
    "document": "https://clinicaltrials.gov/study/NCT03328078?cond=Lymphoma&term=CA-4948-101%20&viewType=Card&rank=1",
    "majLe": "2026-11-07",
    "criteres": [
      {
        "type": "inclusion",
        "texte": "Lymphome primitif du SNC en première rechute",
        "cond": {
          "et": [
            {
              "champ": "diagnostic",
              "op": "=",
              "val": "lcp"
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
        "texte": "Première ligne contenant du méthotrexate haute dose",
        "cond": {
          "champ": "mtx_hd",
          "op": "=",
          "val": "recu"
        }
      },
      {
        "type": "inclusion",
        "texte": "Indice de performance ECOG de 0 à 2",
        "cond": {
          "champ": "kps",
          "op": ">=",
          "val": 50
        }
      },
      {
        "type": "inclusion",
        "texte": "Lésion parenchymateuse mesurable ou cytologie positive dans le LCR",
        "manuel": true
      },
      {
        "type": "inclusion",
        "texte": "Corticoïdes à dose stable (ou aucun corticoïde)",
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
        "texte": "Dexaméthasone : 8 mg au plus",
        "cond": {
          "champ": "dexa",
          "op": "<=",
          "val": 8
        }
      },
      {
        "type": "non-inclusion",
        "texte": "Patients immunodéprimés",
        "cond": {
          "champ": "immunodep",
          "op": "=",
          "val": true
        }
      },
      {
        "type": "non-inclusion",
        "texte": "Atteinte intraoculaire isolée",
        "cond": {
          "champ": "lcp_extension",
          "op": "=",
          "val": "oeil"
        }
      },
      {
        "type": "non-inclusion",
        "texte": "Prise concomitante de médicaments allongeant le QT",
        "manuel": true
      },
      {
        "type": "non-inclusion",
        "texte": "Traitement préalable par un inhibiteur de BTK",
        "cond": {
          "champ": "ibtk",
          "op": "=",
          "val": "recu"
        }
      }
    ]
  },
  {
    "id": "Glucarpidase",
    "acronyme": "Glucarpidase",
    "titre": "Essai de phase 4 avec le voraxaze pour les lymphomes primitifs du SNC avec retard d’élimination du MTX ou risque de toxicité du MTX",
    "resume": "Décrire l’efficacité et la tolérance du glucarpidase chez des patients avec retard d’élimination du MTX ou risque de toxicité du MTX",
    "phase": "IV",
    "pathologie": "Lymphome cérébral primitif",
    "promoteur": "",
    "investigateur": "K. Hoang-Xuan",
    "identifiant": "",
    "contact": {
      "nom": "",
      "email": "",
      "tel": ""
    },
    "statut": "ouvert",
    "document": "",
    "majLe": "2026-11-07",
    "criteres": [
      {
        "type": "inclusion",
        "texte": "Lymphome primitif du SNC",
        "cond": {
          "champ": "diagnostic",
          "op": "=",
          "val": "lcp"
        }
      },
      {
        "type": "inclusion",
        "texte": "Patient recevant la glucarpidase selon l'indication reconnue : retard d'élimination du méthotrexate ou risque de toxicité du méthotrexate",
        "cond": {
          "champ": "retard_mtx",
          "op": "=",
          "val": "retard"
        }
      }
    ]
  },
  {
    "id": "E-REVRI",
    "acronyme": "E-REVRI",
    "titre": "Essai de phase 2 E-REVRI associant l’Epcoritamab, le Rituximab et le Lenalidomide pour des patients en rechute d’un lymphome primitif du SNC",
    "resume": "Déterminer le taux de réponse après 8 cycles de l’association Epcoritamab-Rituximab-Lenalidomide. L’Epcoritamab est un Ac bispécifique anti CD20-anti CD3",
    "phase": "II",
    "pathologie": "Lymphome cérébral primitif",
    "promoteur": "Lysarc",
    "investigateur": "Caroline Houillier, Sylvain Choquet",
    "identifiant": "NCT06931652",
    "contact": {
      "nom": "",
      "email": "",
      "tel": ""
    },
    "statut": "ouvert",
    "document": "https://clinicaltrials.gov/study/NCT06931652?cond=Lymphoma&term=E-REVRI%20&viewType=Card&rank=1",
    "majLe": "2026-11-07",
    "criteres": [
      {
        "type": "inclusion",
        "texte": "Lymphome primitif du SNC de type DLBCL, avec preuve histologique ou cytologique au diagnostic initial",
        "cond": {
          "champ": "diagnostic",
          "op": "=",
          "val": "lcp"
        }
      },
      {
        "type": "inclusion",
        "texte": "Rechute cérébrale, sans atteinte systémique",
        "cond": {
          "et": [
            {
              "champ": "situation",
              "op": "dans",
              "val": [
                "recidive1",
                "recidive2"
              ]
            },
            {
              "champ": "lcp_extension",
              "op": "=",
              "val": "cerebral"
            }
          ]
        }
      },
      {
        "type": "inclusion",
        "texte": "Au moins une ligne de traitement antérieure contenant du méthotrexate haute dose",
        "cond": {
          "champ": "mtx_hd",
          "op": "=",
          "val": "recu"
        }
      },
      {
        "type": "inclusion",
        "texte": "Indice de performance ECOG de 0 à 2",
        "cond": {
          "champ": "kps",
          "op": ">=",
          "val": 50
        }
      },
      {
        "type": "inclusion",
        "texte": "Fonctions rénale et hépatique et numération formule sanguine adéquates",
        "manuel": true
      },
      {
        "type": "non-inclusion",
        "texte": "Immunodépression, quelle qu'en soit la cause",
        "cond": {
          "champ": "immunodep",
          "op": "=",
          "val": true
        }
      },
      {
        "type": "non-inclusion",
        "texte": "Hépatite B active ou infection VIH connue",
        "cond": {
          "champ": "immunodep",
          "op": "=",
          "val": true
        }
      },
      {
        "type": "non-inclusion",
        "texte": "Lénalidomide ou anticorps bispécifique déjà reçu",
        "manuel": true
      }
    ]
  },
  {
    "id": "CAROLYN",
    "acronyme": "CAROLYN",
    "titre": "Essai de phase 2 CAROLYN : intérêt du liso-cel en 1ère ligne de traitement chez des patients atteints de LPSNC non éligibles à autogreffe",
    "resume": "Déterminer l’efficacité en termes de survie sans progression à 12 mois d’un traitement par liso-cel en 1ère ligne chez des patients avec LPSNC non éligibles à une autogreffe. Le liso-cel est un CAR T-cells anti CD19",
    "phase": "II",
    "pathologie": "Lymphome cérébral primitif",
    "promoteur": "BMS-Celgene",
    "investigateur": "Caroline Houillier, Sylvain Choquet",
    "identifiant": "NCT07015242",
    "contact": {
      "nom": "",
      "email": "",
      "tel": ""
    },
    "statut": "ouvert",
    "document": "https://clinicaltrials.gov/study/NCT07015242?cond=Lymphoma&term=CAROLYN&viewType=Card&intr=Liso-cel&rank=1",
    "majLe": "2026-11-07",
    "criteres": [
      {
        "type": "inclusion",
        "texte": "Lymphome primitif du SNC de type DLBCL, avec preuve histologique ou cytologique au diagnostic initial",
        "cond": {
          "champ": "diagnostic",
          "op": "=",
          "val": "lcp"
        }
      },
      {
        "type": "inclusion",
        "texte": "Patient en première ligne de traitement",
        "cond": {
          "champ": "situation",
          "op": "dans",
          "val": [
            "nouveau",
            "traitement_initial"
          ]
        }
      },
      {
        "type": "inclusion",
        "texte": "4 à 6 injections de méthotrexate haute dose, avec réponse partielle ou complète (critère partiel : le reste est à confirmer en consultation)",
        "cond": {
          "champ": "mtx_hd",
          "op": "=",
          "val": "recu"
        }
      },
      {
        "type": "inclusion",
        "texte": "Jugé non éligible à une autogreffe mais éligible aux CAR T-cells",
        "manuel": true
      },
      {
        "type": "inclusion",
        "texte": "Indice de performance ECOG de 0 à 2",
        "cond": {
          "champ": "kps",
          "op": ">=",
          "val": 50
        }
      },
      {
        "type": "non-inclusion",
        "texte": "Immunodépression, quelle qu'en soit la cause",
        "cond": {
          "champ": "immunodep",
          "op": "=",
          "val": true
        }
      },
      {
        "type": "non-inclusion",
        "texte": "Hépatite B active ou infection VIH connue",
        "cond": {
          "champ": "immunodep",
          "op": "=",
          "val": true
        }
      },
      {
        "type": "non-inclusion",
        "texte": "Atteinte ophtalmologique ou du LCR isolée",
        "cond": {
          "champ": "lcp_extension",
          "op": "dans",
          "val": [
            "oeil",
            "lcr"
          ]
        }
      }
    ]
  },
  {
    "id": "SONIMEL",
    "acronyme": "SONIMEL",
    "titre": "Essai SONIMEL : Tolérance et impact de l’ouverture de la barrière hémato-encéphalique par SonoCloud-1® en association avec Nivolumab seul ou en combinaison avec l’Ipilimumab dans les métastases cérébrales de mélanome",
    "resume": "Etude phase 1/2 prospective, multicentrique, non randomisée, en ouvert. (Hôpital Saint-Louis : traitement des patients et US sonication & Hôpital Pitié-Salpêtrière pour implantation et explantation)",
    "phase": "I/II",
    "pathologie": "Métastases cérébrales de mélanome",
    "promoteur": "APHP",
    "investigateur": "Celeste Lebbé",
    "identifiant": "NCT04021420",
    "contact": {
      "nom": "",
      "email": "",
      "tel": ""
    },
    "statut": "ouvert",
    "document": "https://clinicaltrials.gov/study/NCT04021420?term=SonoCloud&viewType=Card&cond=Metastatic%20Melanoma&intr=Nivolumab&rank=1",
    "majLe": "2026-11-07",
    "criteres": [
      {
        "type": "inclusion",
        "texte": "Mélanome métastatique confirmé histologiquement",
        "cond": {
          "champ": "diagnostic",
          "op": "=",
          "val": "meta_melanome"
        }
      },
      {
        "type": "inclusion",
        "texte": "Effets secondaires du traitement le plus récent (systémique ou local) revenus à un grade ≤ 1",
        "manuel": true
      },
      {
        "type": "inclusion",
        "texte": "Au moins une métastase cérébrale de 5 à 35 mm de diamètre",
        "manuel": true
      },
      {
        "type": "inclusion",
        "texte": "Métastase cérébrale non traitée préalablement par chirurgie et/ou radiochirurgie, et située à moins de 5 cm du crâne",
        "manuel": true
      },
      {
        "type": "inclusion",
        "texte": "Si radiochirurgie ou chirurgie antérieure : au moins une nouvelle métastase cérébrale selon les critères RANO et RECIST",
        "manuel": true
      },
      {
        "type": "inclusion",
        "texte": "Indice de performance ECOG de 0 à 1",
        "cond": {
          "champ": "kps",
          "op": ">=",
          "val": 70
        }
      },
      {
        "type": "inclusion",
        "texte": "Espérance de vie supérieure à 3 mois (13 semaines)",
        "manuel": true
      },
      {
        "type": "inclusion",
        "texte": "Âge supérieur à 18 ans",
        "cond": {
          "champ": "age",
          "op": ">",
          "val": 18
        }
      }
    ]
  },
  {
    "id": "ENCEPHATAIP",
    "acronyme": "ENCEPHATAIP",
    "titre": "Etude prospective TEP-FDG pour évaluer l’impact sur le métabolisme glucidique cérébral des encéphalites auto-immunes",
    "resume": "Caractériser en TEP-TDM au 18F-FDG les anomalies du métabolisme glucidique cérébral dans les EAI confirmées séropositives ou séronégatives à la phase aigüe avant traitement",
    "phase": "na",
    "pathologie": "Encéphalite auto-immune",
    "promoteur": "APHP",
    "investigateur": "D Psimaras",
    "identifiant": "NCT06079294",
    "contact": {
      "nom": "",
      "email": "",
      "tel": ""
    },
    "statut": "ouvert",
    "document": "https://clinicaltrials.gov/study/NCT06079294?term=ENCEPHATAIP&viewType=Card&rank=1",
    "majLe": "2026-11-07",
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
        "texte": "Encéphalite auto-immune de novo",
        "cond": {
          "champ": "diagnostic",
          "op": "=",
          "val": "encephalite_ai"
        }
      },
      {
        "type": "inclusion",
        "texte": "Critères de Graus 2016 (encéphalite limbique auto-immune certaine, ou encéphalite auto-immune possible avec auto-anticorps dans le sérum ou le LCR) ou syndrome paranéoplasique probable ou certain selon Graus 2021 (hors syndromes neurologiques périphériques)",
        "manuel": true
      },
      {
        "type": "inclusion",
        "texte": "Début des symptômes il y a moins de 6 mois (26 semaines)",
        "cond": {
          "champ": "debut_sympt",
          "op": "<",
          "val": 6
        }
      },
      {
        "type": "non-inclusion",
        "texte": "Traitement immunomodulateur débuté depuis plus de 10 jours",
        "manuel": true
      },
      {
        "type": "non-inclusion",
        "texte": "Antécédent de tumeur cérébrale, traumatisme crânien, infarctus ou hématome susceptible de modifier le métabolisme glucidique cérébral",
        "manuel": true
      },
      {
        "type": "non-inclusion",
        "texte": "Patient intubé et ventilé",
        "manuel": true
      },
      {
        "type": "non-inclusion",
        "texte": "Troubles cognitifs incompatibles avec une bonne coopération à l'examen TEP",
        "manuel": true
      }
    ]
  },
  {
    "id": "NESPA",
    "acronyme": "NESPA",
    "titre": "Immunothérapie précoce par IgIV, cyclophosphamide et méthylprednisolone dans les neuronopathies sensitives paranéoplasiques à anti-Hu",
    "resume": "Evaluation de l’efficacité à 3 mois d’une immunothérapie précoce par IgIV, cyclophosphamide et méthylprednisolone chez des patients atteints d’une neuronopathie sensitive paranéoplasique à anticorps anti Hu",
    "phase": "na",
    "pathologie": "Neuronopathie sensitive",
    "promoteur": "APHP",
    "investigateur": "D Psimaras",
    "identifiant": "NCT06373211",
    "contact": {
      "nom": "",
      "email": "",
      "tel": ""
    },
    "statut": "ouvert",
    "document": "https://clinicaltrials.gov/study/NCT06373211?cond=Neuronopathy&term=NESPA&viewType=Card&rank=1",
    "majLe": "2026-11-07",
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
        "texte": "Neuronopathie sensitive « possible » selon les critères cliniques et électrophysiologiques de 2009, avec un score ONLS de 1 (critère partiel : le reste est à confirmer en consultation)",
        "cond": {
          "champ": "diagnostic",
          "op": "=",
          "val": "nsp"
        }
      },
      {
        "type": "inclusion",
        "texte": "Tableau dominant d'ataxie sensitive (atteinte du SNC et/ou de la jonction neuromusculaire admise si impact mineur sur le handicap)",
        "manuel": true
      },
      {
        "type": "inclusion",
        "texte": "Anticorps anti-Hu positifs dans le sang et/ou le LCR",
        "cond": {
          "champ": "anticorps",
          "op": "=",
          "val": "hu"
        }
      },
      {
        "type": "inclusion",
        "texte": "Score mRS de 2 à 3",
        "cond": {
          "et": [
            {
              "champ": "mrs",
              "op": ">=",
              "val": 2
            },
            {
              "champ": "mrs",
              "op": "<=",
              "val": 3
            }
          ]
        }
      },
      {
        "type": "inclusion",
        "texte": "Début des symptômes neurologiques il y a moins de 3 mois (13 semaines)",
        "cond": {
          "champ": "debut_sympt",
          "op": "<",
          "val": 3
        }
      },
      {
        "type": "non-inclusion",
        "texte": "Contre-indication absolue aux immunoglobulines intraveineuses",
        "manuel": true
      },
      {
        "type": "non-inclusion",
        "texte": "Contre-indication absolue au cyclophosphamide",
        "manuel": true
      },
      {
        "type": "non-inclusion",
        "texte": "Contre-indication à la méthylprednisolone",
        "manuel": true
      },
      {
        "type": "non-inclusion",
        "texte": "Vaccin vivant ou vivant atténué dans les 3 mois précédents",
        "manuel": true
      },
      {
        "type": "non-inclusion",
        "texte": "État infectieux ou virose en évolution (herpès, varicelle, zona)",
        "manuel": true
      },
      {
        "type": "non-inclusion",
        "texte": "Deux cures d'immunoglobulines intraveineuses dans les 3 mois précédant le recrutement",
        "manuel": true
      },
      {
        "type": "non-inclusion",
        "texte": "Autre immunothérapie concomitante",
        "manuel": true
      },
      {
        "type": "non-inclusion",
        "texte": "Autre cause d'immunodépression",
        "cond": {
          "champ": "immunodep",
          "op": "=",
          "val": true
        }
      },
      {
        "type": "non-inclusion",
        "texte": "Traitement par inhibiteur de checkpoint dans les 3 mois précédents",
        "manuel": true
      }
    ]
  },
  {
    "id": "CIELO",
    "acronyme": "CIELO",
    "titre": "Étude de phase III multicentrique, randomisée contrôlée évaluant le satralizumab chez des patients présentant une encéphalite à anticorps anti-NMDAR ou anti-LGI1",
    "resume": "Evaluer l’efficacité, la sécurité d’emploi, la pharmacocinétique et la pharmacodynamie de l’anticorps anti-interleukine 6 (anti-IL6) satralizumab chez des patients présentant une encéphalite auto-immune à anticorps anti-NMDAR ou à anticorps anti-LGI1",
    "phase": "III",
    "pathologie": "Encéphalite auto-immune",
    "promoteur": "Hoffmann-La Roche",
    "investigateur": "D Psimaras",
    "identifiant": "NCT05503264",
    "contact": {
      "nom": "",
      "email": "",
      "tel": ""
    },
    "statut": "ouvert",
    "document": "https://clinicaltrials.gov/study/NCT05503264?term=CIELO&intr=satralizumab%20&viewType=Card&rank=1",
    "majLe": "2026-11-07",
    "criteres": [
      {
        "type": "inclusion",
        "texte": "Début des symptômes il y a moins de 9 mois (39 semaines)",
        "cond": {
          "champ": "debut_sympt",
          "op": "<",
          "val": 9
        }
      },
      {
        "type": "inclusion",
        "texte": "Score mRS d'au moins 2",
        "cond": {
          "champ": "mrs",
          "op": ">=",
          "val": 2
        }
      },
      {
        "type": "inclusion",
        "texte": "Encéphalite « new-onset » : traitement de première ligne (méthylprednisolone 6MP ≥ 500 mg ou équivalent pendant ≥ 3 jours ; IgIV ou échanges plasmatiques ≥ 3 jours ; ou combinaison) débuté depuis moins de 6 semaines, plusieurs cures permises ; pas de rituximab, tocilizumab ni autre immunosuppresseur (cyclophosphamide, MMF, méthotrexate, ciclosporine, tacrolimus, azathioprine)",
        "manuel": true
      },
      {
        "type": "inclusion",
        "texte": "Répondeur incomplet (« incomplete responder ») : première ligne débutée depuis plus de 6 semaines, puis autre ligne immunomodulatrice : rituximab (débuté depuis ≥ 2 mois, dernière cure ≥ 4 semaines, sans amélioration du mRS sur les 4 dernières semaines) ou autre immunosuppresseur (MMF, cyclophosphamide IV, azathioprine, etc.) (débuté depuis ≥ 2 mois, dose stable ≥ 4 semaines, sans amélioration du mRS) ; si corticoïdes oraux : dose stable ≥ 20 mg d'équivalent prednisone, sans amélioration du mRS sur les 4 dernières semaines",
        "manuel": true
      },
      {
        "type": "inclusion",
        "texte": "Encéphalite anti-NMDAR (probable ou définie selon Graus 2016) ou anti-LGI1",
        "cond": {
          "et": [
            {
              "champ": "diagnostic",
              "op": "=",
              "val": "encephalite_ai"
            },
            {
              "champ": "anticorps",
              "op": "dans",
              "val": [
                "nmda",
                "lgi1"
              ]
            }
          ]
        }
      },
      {
        "type": "inclusion",
        "texte": "Âge d'au moins 12 ans (cohorte anti-NMDAR)",
        "cond": {
          "champ": "age",
          "op": ">=",
          "val": 12
        }
      },
      {
        "type": "inclusion",
        "texte": "Cohorte anti-LGI1 : âge d'au moins 18 ans, anticorps anti-LGI1 présents et début subaigu (moins de 4 mois) de troubles de la mémoire, d'épilepsie et de troubles psychiatriques évoquant une encéphalite limbique",
        "cond": {
          "ou": [
            {
              "champ": "anticorps",
              "op": "pasdans",
              "val": [
                "lgi1"
              ]
            },
            {
              "champ": "age",
              "op": ">=",
              "val": 18
            }
          ]
        }
      },
      {
        "type": "non-inclusion",
        "texte": "Tératome ou thymome non traité (incluable si exérèse au moins 1 semaine avant l'inclusion)",
        "manuel": true
      },
      {
        "type": "non-inclusion",
        "texte": "Autre cancer actif",
        "cond": {
          "champ": "autre_cancer",
          "op": "=",
          "val": true
        }
      },
      {
        "type": "non-inclusion",
        "texte": "Anticorps dirigé contre un antigène intracellulaire ou un antigène de surface autre que NMDAR et LGI1",
        "cond": {
          "champ": "anticorps",
          "op": "=",
          "val": "autre"
        }
      },
      {
        "type": "non-inclusion",
        "texte": "Traitement antérieur par anti-IL6, alemtuzumab, greffe de moelle osseuse, anti-CD19, bélimumab, cladribine, mitoxantrone, traitement de déplétion des cellules T ou cyclophosphamide oral",
        "manuel": true
      },
      {
        "type": "non-inclusion",
        "texte": "Traitement de fond par une combinaison de plus d'un immunosuppresseur (azathioprine, MMF, cyclophosphamide IV) ; un immunosuppresseur avec corticoïdes oraux est admis",
        "manuel": true
      }
    ]
  }
];
