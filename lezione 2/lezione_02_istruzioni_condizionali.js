const MAX_INTERI =10;
const MIN_INTERI =1;
let numero = 8;
let resto=numero%2;
if (resto==0){
    console.log("numero: " + numero + " è un numero pari");// stampa il valore della variabile solo se rispecchia l'if
}else{
    console.log("numero è un numero dispari");
}

if (numero>=MAX_INTERI || numero<MIN_INTERI){
    console.log ("numero: "+numero+ " non valido");
}

let auto = "500L";
switch(auto){
    case "bmw":{
        console.log("la mia auto è una bmw");
        break;
    }
    case "audi":{
        console.log("la mia auto è una audi");
        break;
    }
    case "fiat":
    case "500L":{
        console.log("la mia auto è una fiat");
        break;
    }
    default:{
        console.log("non so che tipo di auto è");
        break;//se non metto il default e non trova l'auto nell'elenco non fa nulla 
    }
}