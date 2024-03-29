/**
 * Scrivi un programma per la gestione di una rubrica telefonica. 
 * 
 * Definisci una classe che rappresenti un contatto. L'unico vincolo che hai è di inserire almeno il nome, cognome e il numero di telefono come stringhe.
    Definisci un’altra classe che rappresenti la Rubrica che implementa i metodi per le seguenti operazioni:
      - Visualizzazione dell'intera lista contatti con la possibilità di scegliere il tipo di ordinamento (A->Z, Z->A)
      - Inserimento di un nuovo Contatto che non sia già presente in Rubrica.
      - Modifica di uno contatto passando in input l'indice dell'array
      - Cancellazione di un contatto passando in input l'indice dell'array
      - Ricerca passando il nome, o parte del nome, e restituendo il singolo contatto.
 */

      class Contatto {
        constructor(nome, cognome, telefono) {
            this.nome = nome;
            this.cognome = cognome;
            this.telefono = telefono;
        }
        get nome() {
            return this._nome;
        }
        get cognome() {
            return this._cognome;
        }
        get telefono() {
            return this._telefono;
        }
        set nome(nome) {
            if (typeof (nome) === "string") {
                this._nome = nome;
            }
        }
        set cognome(cognome) {
            if (typeof (cognome) === "string") {
                this._cognome = cognome;
            }
        }
        set telefono(telefono) {
            if (typeof (telefono) === "string") {
                this._telefono = telefono;
            }
        }
    }
    
    class Rubrica {
        constructor() {
            this.database = [];
        }
    
        stampaContatti(ordinamento) {
            let compare = (a, b) => (a.cognome > b.cognome) ? 1 : ((b.cognome > a.cognome) ? -1 : 0);
            if (ordinamento.toLowerCase() === "az") {
                this.database.sort(compare);
            } else {
                this.database.sort(compare);
                this.database.reverse();
            }
            /*for (let i = 0; i < this.database.length; i++) {
                let contatto = this.database[i];
                console.log(contatto.nome + " " + contatto.cognome + " " + contatto.telefono);
            }*/
            return this.database;
        }
        aggiungiContatto(contatto) {
            let esisteContatto = false;
            if (contatto instanceof Contatto) {
                for (let i = 0; i < this.database.length; i++) {
                    if (contatto.telefono === this.database[i].telefono) {
                        esisteContatto = true;
                    }
                }
                if (!esisteContatto) {
                    this.database.push(contatto);
                }
            }
        }
        modificaContatto(posizione, contatto) {
            if (contatto instanceof Contatto) {
                this.database[posizione].nome = contatto.nome;
                this.database[posizione].cognome = contatto.cognome;
                this.database[posizione].telefono = contatto.telefono;
            }
        }
        eliminaContatto(posizione) {
            this.database.splice(posizione, 1);
        }
        ricercaContatto(nome) {
            let lista = [];
            for (let i = 0; i < this.database.length; i++) {
                let contatto = this.database[i];
                if (contatto.nome.indexOf(nome) > -1 || contatto.cognome.indexOf(nome) > -1) {
                    lista.push(contatto);
                }
            }
            return lista;
        }
    }
    

