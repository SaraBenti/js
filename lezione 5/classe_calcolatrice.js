/**
 * Scrivere la classe Calcolatrice che contiene al
suo interno due proprietà di tipo intero
parametro1 e parametro2 che non possono
essere inferiore a zero. La classe dovrà avere
anche tre metodi:
somma() ritorna la somma delle proprietà.
moltiplica() ritorna il prodotto delle proprietà.
dividi() ritorna la divisione delle proprietà
 */
class calcolatrice {
    constructor(x,y) {
        if(x>=0 && y>=0 && typeof x=="number" && typeof y=="number"){
        this.parametro1=x;
        this.parametro2=y;
    }else{
        return false;
    }
}
somma(){
    let risultato =this.parametro1+this.parametro2;
        return risultato;
}
moltiplica(){
    let risultato =this.parametro1*this.parametro2;
        return risultato;
}
dividi(){
    let risultato =this.parametro1+this.parametro2;
        return risultato;
}
}