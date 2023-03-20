/**
 * Scrivi un programma per la gestione di una rubrica telefonica. Definisci una
classe che rappresenti un contatto. L'unico vincolo che hai è di inserire
almeno il nome, cognome e il numero di telefono come stringhe.
Definisci un’altra classe che rappresenti la Rubrica che implementa i metodi
per le seguenti operazioni:
- Visualizzazione dell'intera lista contatti con la possibilità di scegliere il
tipo di ordinamento (A->Z, Z->A)
- Inserimento di un nuovo Contatto che non sia già presente in Rubrica.
- Modifica di uno contatto passando in input l'indice dell'array
- Cancellazione di un contatto passando in input l'indice dell'array
- Ricerca passando il nome, o parte del nome, e restituendo il singolo
contatto.
 */
class Contatto{
    constructor(nome,cognome,telefono){
        this.nome=nome;
        this.cognome=cognome;
        this.telefono=telefono;
    }
    get nome(){
        return this._nome;
    }
    get cognome(){
        return this._cognome;
    }
    get telefono(){
        return this._telefono;
    }    
    set nome(nome){
       if(typeof(nome)==="string"){
        this._nome=nome;
       }
    }
    set cognome(cognome){
       if(typeof(cognome)==="string"){
        this._cognome=cognome;
       }
    }
    set telefono(telefono){
       if(typeof(telefono)==="string"){
        this._telefono=telefono;
       }
    }       
}

class Rubrica{
    constructor(){
        this.contatti=[];
    }
    // stampaLista(){
    //     array=this.contatti;
        
    //     for (const contatto of this.array){
    //         console.log(contatto.nome+contatto.cognome+contatto.telefono);
    //     }

    // }
    stampaContatti(ordinamento){
        let compare=(a,b)=>(a.cognome>b.cognome) ? 1:((b.cognome>a.cognome)? -1:0);
        if(ordinamento.toLowerCase()==="az"){
            this.contatti.sort(compare);
        }else{
            this.contatti.sort(compare);
            this.contatti.reverse();
        }
        for(let i=0; i<this.contatti.length;i++){
            let contatto=this.contatti[i];
            console.log(contatto.nome+" "+contatto.cognome+" "+contatto.telefono);
        }
    }
    aggiungiContatto(contatto){
        let esisteContatto=false;
        if(contatto instanceof Contatto){
            //instance of restituisce vero o falso se quel 
            //contatto è nella classe Contatto
            for(let i =0;i<this.contatti.length;i++){
                if(contatto.telefono===this.contatti[i].telefono){
                    esisteContatto=true;
                }
            }if(! esisteContatto){
                this.contatti.push(contatto);
            }
            }
    }
    modificaContatto(posizione,contatto){
        if(contatto instanceof Contatto){
            this.contatti[posizione].nome=contatto.nome;
            this.contatti[posizione].cognome=contatto.cognome;
            this.contatti[posizione].telefono=contatto.telefono;
        }
    }
    eliminaContatto(posizione){
        this.contatti.splice(posizione,1);
    }
    ricercaContatto(nome){
        for(let i =0;i<this.contatti.length;i++){
            let contatto=this.contatti[i];
            if(contatto.nome.indexOf(nome)>-1){//ritorna l'indice dell'argomento
                console.log(contatto.nome+" "+contatto.cognome+" "+contatto.telefono);
            }
        }
    }
}

let contatto= new Contatto("Giuseppe","Rossi","0541123456");
let contatto2=new Contatto("Mario","Verdi","0541789456");
let contatto21=new Contatto("Mario","Verdi","0541789456");

let rubrica=new Rubrica;
rubrica.aggiungiContatto(contatto);
rubrica.aggiungiContatto(contatto2);
rubrica.aggiungiContatto(contatto21);

rubrica.stampaContatti("za");