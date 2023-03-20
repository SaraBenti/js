/**
 * inizializzazione della rubrica
 */
let contatto = new Contatto("Giuseppe", "Rossi", "05412345678");
let contatto2 = new Contatto("Giuseppe", "Rossini", "05412345556789");
let contatto21 = new Contatto("Giuseppe", "Rossini", "0541244456789");
let contatto3 = new Contatto("Ilaria", "Bianchi", "0541234367589");
let contatto4 = new Contatto("Ilaria", "Bianchi", "10541234367589");

let rubrica = new Rubrica();
rubrica.aggiungiContatto(contatto);
rubrica.aggiungiContatto(contatto2);
rubrica.aggiungiContatto(contatto21);
rubrica.aggiungiContatto(contatto3);
rubrica.aggiungiContatto(contatto4);

/**
 * loading rubrica
 */
function creaDivColonne(valoreTesto){
    let divCol=document.createElement("div");
    divCol.className="col-md-3";
    divCol.innerHTML=valoreTesto;
    return divCol;
}
function creaDivRighe(indice){
    let divRow=document.createElement("div");
    divRow.setAttribute("data-id", indice);
    if(indice%2 ===0){
        divRow.className="row";
    }else{
        divRow.className="row bg-light";
    }
    return divRow;
}

let divRowRoot=document.getElementById("rubrica-row");
let listaContatti=rubrica.stampaContatti("az");

function creaTabella(){
    for (let i=0; i<listaContatti.length;i++){
        const contatto=listaContatti[i];
        let divRiga=creaDivRighe(i);
        divRiga.appendChild(creaDivColonne(i));
        divRiga.appendChild(creaDivColonne(contatto.nome));
        divRiga.appendChild(creaDivColonne(contatto.cognome));
        divRiga.appendChild(creaDivColonne(contatto.telefono));
        divRowRoot.appendChild(divRiga);

    }
}
creaTabella();
