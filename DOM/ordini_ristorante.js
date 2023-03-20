
let ordini = [
    {"contatto": "Giuseppe Prof", "indirizzo": "Viale Principe amedeo 7", "prodotti": ["Spaghetti alla romana", "Birra"]},
    {"contatto": "Andrea Rossi", "indirizzo": "Via Marsala 7", "prodotti": ["Riso cantonese", "Cocacola"]},
    {"contatto": "Andrea Bianchi", "indirizzo": "Via Milano 7", "prodotti": ["Riso cantonese", "Vino Rosso", "Pollo alle mandorle"]},
]

function creaDivColonne(valoreTesto) {
    let divCol = document.createElement("div");
    divCol.className = "col-md-3";
    divCol.innerHTML = valoreTesto;
    return divCol;
}

function creaDivColonneProdotti(prodotti) {
    let creaUl=document.createElement("ul");
    for (let indice = 0; indice < prodotti.length; indice++){
        let prodotto = prodotti[indice];
        let creaLi= document.createElement("li");
        creaLi.innerHTML = prodotto;
        creaUl.appendChild(creaLi);
    }
    return creaUl.outerHTML;
}
        

function creaDivRighe(indice) {
    let divRow = document.createElement("div");
    divRow.setAttribute("data-id", indice);

    if (indice % 2 === 0) {
        divRow.className = "row";
    } else {
        divRow.className = "row bg-light";
    }

    return divRow;
}


let divRowRoot = document.getElementById("ordini-row");


    for (let index = 0; index < ordini.length; index++) {
        const ordine = ordini[index];
        let divRiga = creaDivRighe(index);
        divRiga.appendChild(creaDivColonne(index));
        divRiga.appendChild(creaDivColonne(ordine.contatto));
        divRiga.appendChild(creaDivColonne(ordine.indirizzo));
        divRiga.appendChild(creaDivColonne(creaDivColonneProdotti(ordine.prodotti)));
        divRowRoot.appendChild(divRiga);
    }