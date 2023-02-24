let stringa01 ="lezione 2";
let stringa02 = "1";
let stringa03 = "true";
let stringa04 ="null";
let stringa05 ="";

let intero01 =7;
let decimale = 7.5;

let booleano01= true;
let booleano02 = false;

let nonValorizzata=null; //viene letta come 0 nella concatenazione
let nonDef;


let x = stringa01 + stringa02;
console.log(x); //operatore + tra 2 stringhe fa concatenazione quindi lezione 21

let y= intero01 + stringa02; //sempre concatenazione quindi 71
//operatore - tra stringhe non esiste e quindi qui farebbe una sottrazione(7-1)
console.log(y);

let z = stringa02 + booleano01;
console.log(z);
//concatena una stringa con il booleano che viene tradotto in stringa e quindi 1true

let w = stringa02 + nonValorizzata;
console.log(w);
//concatenazione 1null

let a= stringa02+nonDef+intero01;
console.log(a);
//concatenazione 1undefined7

let b = stringa05+intero01;
console.log(b);
//concatenzaione che dà come risultato 7 ma che è una stringa! (vince sempre la stringa
//con l'operatore + tra una stringa e un valore)

let c= intero01+booleano01;
console.log(c);
//operazione algebrica tra numero e booleano perchè il booleano diventa 1(true)

let d= intero01% booleano02;
console.log(d);
//dà Nan perchè non riesce a fare l'operazione (ad es. in un'operazione /0 dà Nan)

let f = intero01%booleano01;
console.log(f);
//non c'è resto e quindi 0

let e = intero01 + nonDef;
console.log(e);
// dà Nan

let g= stringa03==booleano01;
console.log(g);

let h = stringa02==booleano01;
console.log(h);
//non controlla il tipo e quindi è vero

let i = stringa02===booleano01;
console.log(i);
//controlla il tipo e quindi è falso (il compilatore fà il casting)



