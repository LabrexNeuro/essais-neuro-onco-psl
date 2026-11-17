// Régénère protocoles.js à partir de protocoles.csv et criteres.csv (même conversion que la page d'administration).
const fs = require("fs");
const conv = require("./convertisseur.js");
const r = conv.convertir(fs.readFileSync("protocoles.csv", "utf8"), fs.readFileSync("criteres.csv", "utf8"));
if (r.erreurs.length) { console.error(r.erreurs.join("\n")); process.exit(1); }
fs.writeFileSync("protocoles.js", r.contenu);
console.log("protocoles.js régénéré : " + r.protocoles.length + " protocoles.");
