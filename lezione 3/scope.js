let totale=2;//variabile globale
function incrementa(tot){//variabile della funzione ha scope locale
   // let totale=0;//variabile locale, la funzione lavora solo all'interno e non va a intaccare il totale globale
    tot +=1;
    console.log("il valore del totale è : "+ tot);
    return tot;
}
incrementa(totale);
console.log("il valore del totale è : "+ totale); //qui non va dentro la funzione

totale =incrementa(totale);
console.log("il valore del totale è : "+ totale);

let nonStampare=true;
function stampa(){
    nonStampare = !nonStampare;//ho fatto entrare la variabile globale dentro la funzione
    if(! nonStampare){
        console.log("stampo");
    }
}
stampa();
console.log(nonStampare);
