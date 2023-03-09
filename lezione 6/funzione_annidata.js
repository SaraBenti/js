function conta(){
    let count=0;
    return function(){
        return count++;
    }
}
let counter=conta();
console.log(typeof counter);//function
console.log(counter());//intero

let totale=0;
function stampaTotale(){
    console.log(totale);
}
//funzione closure che memorizza la variabile esterna totale


let numeri=[1,2,3];
let scorri= function (elemento){
    console.log(elemento);
}
numeri.forEach(scorri);
//oopure è uguale fare la funzione arrow
numeri.forEach(elemento=>(console.log(elemento)));
//che è la stessa cosa
numeri.forEach(function(elemento){console.log(elemento)});