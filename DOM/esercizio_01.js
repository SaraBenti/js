/**
 * Scrivere una pagina HTML con all’interno i seguenti campi:
● bottone
Aggiungere alla pagina HTML una funzione JavaScript che
● visualizza la tabellina dei primi 10 numeri all’interno di un tag <div>.
Inoltre, fare in modo che, nel documento HTML, tale funzione JavaScript
venga eseguita quando l’utente preme il bottone di invio.
 */
//suddividere il problema in 3 funzioni

function stampaTabelline(numeroInteri) {
    let div = document.getElementById("tabelline");
    for (let index = 1; index <= numeroInteri; index++) {
        let cols = creaColonne(index);
        let riga = creaRiga(index, cols);
        div.appendChild(riga);//questa è la riga che stampa l'HTML
    }
}

function creaColonne(index) {
    let cols = [];
    for (let y = 1; y <= 10; y++) {
        let colonna = document.createElement("div");
        colonna.className = "col";
        colonna.innerHTML = y * index;
        cols.push(colonna);
    }
    return cols;
}
function creaRiga(index, cols) {
    let riga = document.createElement("div");
    riga.className = "row";
    /*for (let i = 0; i < cols.length; i++) {
        const element = cols[i];
        riga.appendChild(element);
    }*/
    cols.forEach(el => riga.appendChild(el));
    return riga;
}

//createElement crea il div
//innerHTML inserisce un valore dentro al div
//push inserisce un valore dentro all'array