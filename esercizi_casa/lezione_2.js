/**
 * Scrivere un blocco di codice Javascript che
stampi a console i primi dieci interi pari compresi
tra 20 e 0, partendo da 20. Importante non
bisogna usare delle costanti, ma solo le
istruzioni if e for.
 */

for (i=20; i>0;i--){
    if(i % 2==0){
    console.log(i);
}
}

/**
 * Scrivere un blocco di codice Javascript che
stampi a console i primi dieci numeri interi,
escluso lo zero, in lingua italiana.
 */

for(i=1;i<=10;i++){
    switch(i){
        case 1:console.log("uno");
        break;
        case 2:console.log("due");
        break;
        case 3:console.log("tre");
        break;
        case 4:console.log("quattro");
        break;
        case 5:console.log("cinque");
        break;
        case 6:console.log("sei");
        break;
        case 7:console.log("sette");
        break;
        case 8:console.log("otto");
        break;
        case 9:console.log("nove");
        break;
        case 10:console.log("dieci");
        break;
    }
}
/**
 * Scrivere un blocco di codice Javascript che dato
un numero stampi la tabellina corrispondente.
 */
let n=5;
for(i=0;i<10;i++){
    let numero=n*(i+1);
    console.log(numero);
}

/**
 * Scrivi un blocco di codice che dato un array di
numeri, calcoli la media dei valori e restituisca in
output la media e tutti i valori minori della media.
 */

let a=[3,5,10,2,8];
let totale=0;
let media=0;
for(let valore of a){
    totale=totale+valore;
}

console.log(totale);
console.log(media=totale/a.length);

let min=0;
for (let val of a){
    min=val;
    if(min<media){
        console.log(min);
    }
}

/**
 * Scrivi una funzione che prenda in input un numero e
restituisca TRUE se è un numero primo, FALSE
altrimenti.
Scrivi una seconda funzione, che prenda in input un
numero N e stampi i primi N numeri primi.
 */
function isNumeroPrimo(n){
    if(typeof n==="number" && n>=1){
        for (let i=n-1; i>1; i--){
            if(n%i==0){
                return false;
            }
        }
        return true;
    }
    return false;
}
console.log(isNumeroPrimo(7));

function StampaNumeriPrimi(n){ //stampa solo fino a n e non per n volte
    if(typeof n==="number" && n>=1){
        for(let i=1; i<=n; i++){
        let risultato=1;
            if(isNumeroPrimo(i)){
                risultato=i;
                console.log(risultato);               
            }
        }
    }
}

StampaNumeriPrimi(5);

/**
 * Calcolare la somma dei primi N interi.
 */

function sommaInteri(n){
    let risultato=0;
    if(typeof n==="number" && n>=1){
        for(i=1; i<=n;i++){
            risultato=risultato+i;
            
        }
    }
    return risultato;
}
console.log(sommaInteri(3));

/**
 * Scrivi una funzione che prenda in input una stringa e restituisca
TRUE se è palindroma, FALSE se non lo è. Nel controllo scarta gli
spazi e i segni di punteggiatura.
 */

function isPalindroma(str){
    str=str.replace(/\W/g,"");
    let lunghezza=str.length;
    for(let i=0; i<(lunghezza/2);i++){
        if(str[i] !== str[lunghezza-1-i]){
            return false;
        }
    }
    return true;
}
console.log(isPalindroma("i topi non"));

/**
 * Scrivi una funzione che calcoli la vicinanza tra
tre numeri: A, B e N, e restituisca:
- 0 Se A e B sono equidistanti da N
- 1 Se B è più vicino a N rispetto ad A
- -1 Se A è più vicino a N rispetto a B
 */

function Distanza(a,b,n){
        if(a===b){
            return 0;
        }else{
        if(n-a < n-b){
            return -1;
        }else{
            return 1;
        }
    }

    
}
console.log(Distanza(3,4,5));

/**
 * Scrivi il seguente codice, una riga per ogni
azione:
1. Crea un oggetto vuoto Calciatore.
2. Aggiungi la proprietà nome con valore
Lorenzo.
3. Aggiungi la proprietà cognome con valore
Pellegrini.
4. Cambia il valore di nome con Giuseppe.
5. Rimuovi la proprietà cognome
dall’oggetto.
 */

let calciatore={};
calciatore.nome="Lorenzo";
calciatore.cognome="Pellegrini";
calciatore.nome="Giuseppe";
console.log(calciatore.nome);
delete calciatore.cognome;
console.log(calciatore.cognome);

/**
 * Scrivi la funzione isEmpty(obj) che ritorna true
se l’oggetto non ha proprietà, altrimenti ritorna
false.
 */

function isEmpty(obj){
    for(key in obj){
        return false;
    }
    return true;
}
let obj={"nome":"ciao"};
console.log(isEmpty(obj));

/**
 * Scrivi una funzione che stampi il nome e il
cognome dei calciatori che hanno il numero
della maglia uguale a 10.
 */
let calciatori = [
    {nome: "Lorenzo", cognome: "Pellegrini", maglia: 10 },
    {nome: "Edin", cognome: "Dzeko", maglia: 23 },
    {nome: "Federico", cognome: "Chiesa", maglia: 99 },
    {nome: "Paulo", cognome: "Dybala", maglia: 10 },
    {nome: "Lorenzo", cognome: "Insigne", maglia: 10 },
    {nome: "Andrea", cognome: "Belotti", maglia: 9 },
    {nome: "Antonio", cognome: "Vacca", maglia: undefined },
];

function StampaMaglia(array,proprieta){
    for (a of array){
        if(a.maglia==proprieta){
            console.log(a.nome + a.cognome);
        }
    }
}

StampaMaglia(calciatori, 10);

/**
 * Scrivi un programma per la gestione di un garage.
Definisci un oggetto che rappresenti un automobile,
dovrà contenere almeno marca del veicolo e nome del
modello.
Definisci un oggetto che rappresenti il garage.
Scrivi una funzione che inserisca un veicolo nel garage.
Scrivi una funzione che prenda in input una marca e
stampi i modelli presenti nel garage di quella stessa
marca.
Scrivi una funzione che rimuove un veicolo dal garage.
Puoi usare un array come base per salvare le automobili.
 */

function automobile(marca,modello){
    return{
        marca,
        modello
        
    };
}

let garage={
    auto:[]
}

garage.validaVeicolo=function(automobile){
    if (automobile===null || automobile===undefined){
        return false;
    }
    if(marca in automobile && modello in automobile){
        return true;
    }

}

garage.inserisciVeicolo=function(automobile){
    if (this.validaVeicolo(automobile)){
        let indice=this.auto.length;
        this.auto[indice]=automobile;
    }
}

garage.stampaVeicolo=function(marca){
  for( let valore of this.auto){
    if(marca===valore.marca){
        console.log(valore.modello);
    }
  }
}

garage.rimuoviVeicolo=function(automobile){
    if(this.validaVeicolo){
        let indiceDaEliminare=-1;
        for (let i=0; i<=this.auto.length;i++){
            let autoInGarage=this.auto[indice];
            if(autoInGarage.marca===this.auto.marca
                && autoInGarage.modello===this.auto.modello){
                    indiceDaEliminare=indice;
                    break;
                }
            }
            if(indiceDaEliminare>=0){
                this.auto[indiceDaEliminare]=undefined;
            }
        }
}

