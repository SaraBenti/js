function Calcolatrice(){
    this.leggi=function(a,b){
        if(typeof a=="number" && typeof b=="number"){
        this.leggi1=a;
        this.leggi2=b;
       
    }else{
        return false;
    }
    }

    this.somma=function(leggi1,leggi2){
    
        let risultato =this.leggi1+this.leggi2;
        return risultato;
    
}

    this.moltiplica=function(leggi1,leggi2){
    
        let risultato=this.leggi1*this.leggi2;
        return risultato;
    
}

    this.dividi =function(leggi1,leggi2){
        
        if(this.leggi2 !==0){
            let risultato=this.leggi1/this.leggi2;
            return risultato;
        
        }else{
            return Nan;
        }
    
}
}
let x= new Calcolatrice();
x.leggi(10,5);
console.log(x.moltiplica());
console.log(x.dividi());
console.log(x.somma());




