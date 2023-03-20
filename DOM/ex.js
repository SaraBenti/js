
let ordini = [
    {"contatto": "Giuseppe Prof", "indirizzo": "Viale Principe amedeo 7", "prodotti": ["Spaghetti alla romana", "Birra"]},
    {"contatto": "Andrea Rossi", "indirizzo": "Via Marsala 7", "prodotti": ["Riso cantonese", "Cocacola"]},
    {"contatto": "Andrea Bianchi", "indirizzo": "Via Milano 7", "prodotti": ["Riso cantonese", "Vino Rosso", "Pollo alle mandorle"]},
]

function creaColonne(i) {
    let creaDiv=document.createElement("div");
    for (let i = 1; i<ordini.length; i++) {
        let ordine=ordini[i];
        let colonna = document.createElement("div");
        colonna.className = "col";
        colonna.innerHTML = ordine;
        creaDiv.appendChild(colonna);
    }
    return creaDiv.outerHTML;
}
function creaRiga(valore) {
    let riga = document.createElement("div");
    riga.className = "row";
    riga.innerHTML=valore;
    return riga;
}

let div=document.getElementById("ordine")
for (let i=0;i<ordini.length;i++){
    const ordine=ordini[i];
    let cols=creaColonne(i);
    let riga= creaRiga(ordini[i]);
    div.appendChild(creaRiga(ordine.contatto));
    div.appendChild(creaRiga(ordine.indirizzo));
    div.appendChild(creaRiga(ordine.prodotti));
}