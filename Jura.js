const vorname = "Jürgen";
const nachname = "Schwarzenberger";
let alter = 26;
let standort = "columbien";
let sprachen = 3.5;
let workAction = true;
let learningReact = false;
let tollesWetter = true;

let vollerName = vorname + nachname;
let ganzerSatz = vorname + " " + nachname + " " + "ist gerade in " + standort;

console.log(vollerName);
console.log(ganzerSatz);

console.log(tollesWetter);

let regnetGerade = false;

if (regnetGerade === true) {
  console.log("Jura nimm deinen nicht vorhandenen Regenschirm mit");
} else {
  tollesWetter = false;
  console.log("Wetter ist dope. Just like you");
  console.log(tollesWetter);
}

console.log(tollesWetter);

let besucherAlter = undefined;
let ticketpreis = undefined;

besucherAlter = 10;
besucherAlter = 12;
besucherAlter = 9;

if (besucherAlter < 12) {
  ticketpreis = 5;
  console.log("Der Ticketpreis beträgt: " + ticketpreis + "€");
  let neuerName = "hallo Welt";
  console.log(neuerName);
} else if (besucherAlter > 18) {
  ticketpreis = 12;
  console.log("Der Ticketpreis beträgt: " + ticketpreis + "€");
}

besucherAlter = 10;
besucherAlter = 12;
besucherAlter = 20;

console.log("der aktuelle Ticketpreis: " + ticketpreis);

for (let start = 10; start > 0; start--) {
  console.log("Wir sind bei: " + start);
}

let lieblingstiere = ["Hund", "Katze", "Vogel", "Igel", "Fuchse"];

for (let i = 0; i < lieblingstiere.length; i++) {
  console.log("Ich mag dieses Tier sehr: " + lieblingstiere[i]);
}

let zahlen = [5, 12, 8, 20, 15];
let summe = 0;

for (let i = 0; i < zahlen.length; i++) {
  summe = summe + zahlen[i];
  console.log("Die Zahl ändert sich jedes mal. Gerade -> " + summe);
}

console.log("Gesamtsumme: " + summe);

function erstelleBegrüßung(name) {
  let hallo = "Hallo " + name + "! Schön dich zu sehen.";
  return hallo;
}

let meinName;
meinName = erstelleBegrüßung("Jürgen");
console.log(meinName);

function istVolljährig(alter) {
  if (alter >= 18) {
    let ergebnis = true;
    return ergebnis;
  } else {
    ergebnis = false;
    return ergebnis;
  }
}

console.log("Ist die Person volljährig? " + istVolljährig(20));
console.log("Ist die Person volljährig? " + istVolljährig(14));

let lieblingsbuch = {
  titel: "Wie man Freunde gewinnt",
  author: "Dale Carnegie",
  erscheinungsjahr: 1950,
  istBestseller: true,
};

console.log(lieblingsbuch);

console.log(
  "Vor über 5 Jahren hatte ich angefangen " +
    lieblingsbuch.titel +
    " zu lesen. Das Buch ist von dem Author " +
    lieblingsbuch.author +
    " und kommt aus dem Jahr " +
    lieblingsbuch.erscheinungsjahr +
    "."
);

lieblingsbuch.seitenzahl = 312;
console.log(lieblingsbuch);
