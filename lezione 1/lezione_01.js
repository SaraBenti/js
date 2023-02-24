let numero= 10;
//alert(numero);
let primi=[
    {"nomeDelPiatto":"carbonara", "prezzo":12},
    {"nomeDelPiatto":"tonnarelli cacio e pepe", "prezzo":15}
];
let secondi=[
    {"nomeDelPiatto":"coda alla vaccinara", "prezzo":20},
    {"nomeDelPiatto":"trippa alla romana", "prezzo":15}
];
let menu={"menu":{"primi":primi,"secondi":secondi}};
console.log(menu.menu.secondi[1].prezzo);