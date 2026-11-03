/* ------------------------------------------------------------------
   RÉGLAGES DU SITE
   ------------------------------------------------------------------ */
window.CONFIG = {
  // Nom affiché en haut de page
  SERVICE: "Service de neuro-oncologie",

  // Administration : à false, les utilisateurs ne voient que l'orientation, le dossier des
  // études et le lien vers l'outil. Les explications de mise à jour, le convertisseur CSV
  // et les notes techniques n'apparaissent que pour l'équipe : ajouter #admin à l'adresse
  // du site (ex. https://…/index.html#admin), ou passer ce réglage à true sur votre copie.
  // Ce n'est pas une protection : seules les personnes autorisées à modifier le dépôt
  // GitHub peuvent changer les protocoles.
  MODE_ADMIN: false,

  // Les résultats n'apparaissent qu'une fois ce champ renseigné.
  CHAMP_OBLIGATOIRE: "diagnostic",

  // Patient fictif chargé à l'ouverture pour montrer le fonctionnement.
  // Mettre false pour ouvrir le formulaire vide.
  EXEMPLE_AU_DEMARRAGE: true,
  EXEMPLE_PATIENT: {
    age: 54, sexe: "M", kps: "80",
    diagnostic: "glioblastome", situation: "recidive1", chirurgie: "partielle", mgmt: "non_methyle",
    lignes: 1, dexa: 4, rt_cerebrale: true, delai_rt: 20, temozolomide: true,
    dfg: 85, pnn: 3.2, plaquettes: 210, transaminases: 1.2
  }
};
