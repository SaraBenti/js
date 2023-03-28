/**
 * Aggiungiamo al tag form l’evento Submit
attraverso il metodo addEventListener e
fermiamo la sua esecuzione. Stampiamo i valori
dell’oggetto event sulla console.
 */
let a=function (e){
    alert("ciao");
    e.preventDefault();//con questo comando non ricarica la pagina
}

let hello= document.getElementById("salva");
hello.addEventListener("submit",a);

//il comando submit interagisce solo se nell'HTML sono all'interno di un form
//se non avessi creato il form avrei dovuto mettere il comando click al posto del submit

let contatto={
    
        nome:"Sara",
        cognome:"Benti",
        eta:43
   
}
    
let j=JSON.stringify(contatto);
function json(stringa){
    let c =JSON.parse(stringa);
    return c;
}