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
  CHAMP_OBLIGATOIRE: "diagnostic"
};
