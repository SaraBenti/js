// function Calcolatrice(){
    
//     this.leggi=function(a,b){
//         if(typeof a=="number" && typeof b=="number"){
//         this.leggi1=a;
//         this.leggi2=b;
       
//     }else{
//         return false;
//     }
//     }

//     this.somma=function(){
    
//         let risultato =this.leggi1+this.leggi2;
//         return risultato;
    
// }

//     this.moltiplica=function(){
    
//         let risultato=this.leggi1*this.leggi2;
//         return risultato;
    
// }

//     this.dividi =function(){
        
//         if(this.leggi2 !==0){
//             let risultato=this.leggi1/this.leggi2;
//             return risultato;
        
//         }else{
//             return Nan;
//         }
    
// }
// }
// let x= new Calcolatrice();
// x.leggi(10,5);
// console.log(x.moltiplica());
// console.log(x.dividi());
// console.log(x.somma());

// Classi: gli oggetti sono l'istanza di una classe (le stringhe sono istanza della classe "string", gli array sono istanze della classe array)
//modelli su cui riutilizzare quel codice
//in js è possibile aggiungere proprietà alle classi dall'esterno (mentre in php solo dall'interno)

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



