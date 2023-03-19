/**
 * SOMMA
 */
function somma(){
    let tot=0;
    let valore;
    console.dir(arguments);//arguments permette di generalizzare una funzione  senza esplicitare l'input
    for (valore of arguments){ //arguments recupera i valori in input
        // if(typeof valore =="string"){
        //     tot=tot+parseInt(valore);
        // }else{
            tot=tot+valore;
        //}
    }
    return tot;
}

let risultato=somma(1,3,4,"62");
console.log(risultato);

/**
 * FATTORIALE
 */
function fattoriale(num){
    //se il numero è < di 0 lo scarto
    if(num<0){
        return -1;
    }

    //se il numero è = a 0 ritorna 1 per definizione
    if(num=0){
        return 1;
    }
    //in tutti gli altri casi
    else{
        return (num*fattoriale(num-1));
    }

}

/**
 * STAMPA I PRIMI 10 NUMERI
 */
//funzione solo con blocco istruzioni senza return
function stampaAConsoleIPrimiDieciNumeri(){
    for (let i=1; i<=10;i++){
        console.log(i);
    }
}
stampaAConsoleIPrimiDieciNumeri();

/**
 * NUMERO PARI O DISPARI (2 tipi di funzioni)
 */
function isNumeroPariODispari(x=2){//comportamento di default nel caso che 
    //x non sia valorizzata per non avere problemi nel programma
    let y= x%2;
    if(y===0){
        console.log("è un numero pari");//questa è sempre falsa se inserisco una stringa e quindi dà dispari
    }else{
        console.log("è un numero dispari");
    }
}
isNumeroPariODispari(5);

function isNumeroPariODispari2(x=2){
    if(x ===null || x ===undefined ){
        return false;
    }
    if (typeof x == "string"){
        x =parseInt(x);
    }
    if (typeof x!=="string" && typeof x !== "number"){
        return false;
    }
    if (x%2===0){
        return true;
    }else {
        return false;
    }
}
let y= isNumeroPariODispari2(6);
console.log(y);

function seNumeroPariStampaCiao(){
    let x =prompt();//prompt è una funzione per far comparire una modale per inserire un valore, l'utente scrive questo valore e restituisce una stringa
    if(isNumeroPariODispari2(x)){
        console.log("ciao");
    }
}
//seNumeroPariStampaCiao();