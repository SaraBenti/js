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

//funzione solo con blocco istruzioni senza return
function stampaAConsoleIPrimiDieciNumeri(){
    for (let i=1; i<=10;i++){
        console.log(i);
    }
}
stampaAConsoleIPrimiDieciNumeri();

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