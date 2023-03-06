let calciatore={};
calciatore.nome="Lorenzo";
calciatore.cognome="Pellegrini";
calciatore.nome="Giuseppe";
console.log(calciatore.nome);
delete calciatore.cognome;
console.log(calciatore.cognome);

let obj={};
function isEmpty(obj){
    for(key in obj){    
        return false;
}
return true;
}
console.log(isEmpty(obj));

var calciatori = [
    {nome: "Lorenzo", cognome: "Pellegrini", maglia: 10 },
    {nome: "Edin", cognome: "Dzeko", maglia: 23 },
    {nome: "Federico", cognome: "Chiesa", maglia: 99 },
    {nome: "Paulo", cognome: "Dybala", maglia: 10 },
    {nome: "Lorenzo", cognome: "Insigne", maglia: 10 },
    {nome: "Andrea", cognome: "Belotti", maglia: 9 },
    {nome: "Antonio", cognome: "Vacca", maglia: undefined },
];
function stampa(array,proprieta){
    for (giocatore of array){ 
        if (giocatore.maglia===proprieta){
            console.log(giocatore.nome + giocatore.cognome);//se mettevo return e la console.log la facevo al richiamo della funzione, mi stampava solo il primo giocatore perchè return fa uscire
        }
    }
}
stampa(calciatori,10);