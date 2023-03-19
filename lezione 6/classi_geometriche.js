/**
 * Si chiede di definire una serie di classi
indipendenti, che rappresentano delle forme
geometriche piane: Triangolo, Quadrato,
Rettangolo e Cerchio.
Per ciascuna classe:
Definire il costruttore con i parametri necessari a
descrivere la sua forma geometrica.
Implementare la classe padre FiguraGeometrica
che contiene i seguenti metodi:
● calcolaPerimetro
● calcolaArea
 */

class FiguraGeometrica{
    constructor(forma){
        this.forma=forma;
        this.lati=[];
    }
    set forma(forma){
        if(forma==="cerchio" || forma==="quadrato"
        || forma==="triangolo" || forma==="rettangolo"){
            this._forma=forma;//_nome indica la proprieta private
        }else{
            this._forma=null;
        }
    }
    aggiungiLato(lunghezza){
        if(typeof(lunghezza)==="number" && lunghezza>0){
            this.lati.push(lunghezza);
        }
    }
    calcoloPerimetro(){
        if (this.lati.length>=3 || this.lati.length<=4){
            let somma=0;
            for(let i=0;i<this.lati.length;i++){
                somma=somma+this.lati[i];
            }return somma;
        }return undefined;
    }
    calcoloArea(){
        if(this.forma !=="quadrato" && this.forma !=="rettangolo"){
            return 0;
        }
        let result =0;
        switch(this.forma){
            case "quadrato":
                result = this.lati[0]*this.lati[0];
                break;
            case "rettangolo":
                result = this.lati[0]*this.lati[1];
                break;
            default:
                result=0;
                break;
        }return result;
    }
}

class Quadrato extends FiguraGeometrica{
    constructor(lunghezzaLato){
        super("quadrato");
        let i =0;
        while (i<4){
            super.aggiungiLato(lunghezzaLato);
            i++;
        }
    }
}
class Rettangolo extends FiguraGeometrica{
    constructor(lunghezzaLatoA,lunghezzaLatoB){
        super("rettangolo");
        let i =0;
        while (i<2){
            super.aggiungiLato(lunghezzaLatoA);
            super.aggiungiLato(lunghezzaLatoB);
            i++;
        }
    }
}
class Triangolo extends FiguraGeometrica{
    constructor(lunghezzaLato,altezza){
        super("triangolo");
        this.lunghezzaLato=lunghezzaLato;
        this.altezza=altezza;
        let i =0;
        while (i<3){
            super.aggiungiLato(lunghezzaLato);
            i++;
        }
    }
    calcoloArea(){
        return (this.lunghezzaLato*this.altezza)/2;
    }
}
class Cerchio extends FiguraGeometrica{
    pigreco=3.14;
    constructor(raggio){
        super("cerchio");
        this.raggio=raggio;
    }
    calcoloArea(){
        return this.raggio*this.pigreco;
    }
    calcoloPerimetro(){
        return (this.raggio+this.raggio)*this.pigreco;
    }
}

    
