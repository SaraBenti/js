
// Classi: gli oggetti sono l'istanza di una classe (le stringhe sono 
//istanza della classe "string", gli array sono istanze della classe array)
//modelli su cui riutilizzare quel codice
//in js è possibile aggiungere proprietà alle classi dall'esterno
// (mentre in php solo dall'interno)

class Cantante{
    constructor(){
        this.nome="";
    }
    canta(){
        console.log("canta");
    }
}
let cantante= new Cantante("John");
let rossi= new Cantante("rossi");

rossi.cognome="Vasco";

let verifica="cognome" in john;
//non esiste il cognome in john mentre esiste in rossi e quindi js così flessibile in questo caso
//fa perdere il valore della classe in senso stretto
//le classi servono per specializzare 



