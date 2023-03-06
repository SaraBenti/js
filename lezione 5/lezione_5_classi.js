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