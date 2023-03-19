let etichetta="nomeProprieta";
let oggetto={
    [etichetta]:"ciao"
}
console.log(oggetto.nomeProprieta);
console.log(oggetto[etichetta]);
console.log(oggetto["nomeProprieta"]);
//queste 3 console restituiscono ciao tutte e tre

let oggetto1={
    ["etichetta"]:"ciao" //il nome della prop è etichetta
}
let oggetto2={
    "etichetta":"ciao" //nome della prop etichetta
}
let oggetto3={
    etichetta:"ciao" //nome della prop etichetta
}
let oggetto4={
    [etichetta]:"ciao" //nome della prop nomeProprieta perchè in questo caso richiama la variabile
}

function exixtsProperty(nomeProperty, obj){
    if (obj===null ||obj===undefined){
        return false;
    }
    if(nomeProperty===null || nomeProperty===undefined){
        return false;
    }
    if(obj[nomeProperty]===undefined){
        return false;
    }
    return true;
}
console.log(oggetto.nomeProprieta===undefined);//false

for(key in oggetto){
    console.log(oggetto[key]);//stampa i valori delle proprietà; senza key stampa nome e valore
}

//con alert nel for al posto di console.log me le mette in ordine

//delete oggetto.nomeProprieta →cancella la proprieta con il suo valore
//per togliere solo il valore della proprietà→ oggetto.
