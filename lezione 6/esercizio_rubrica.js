class Contatto{
    constructor(nome,cognome,telefono){
        this.nome=""+nome;
        this.cognome=""+cognome;
        this.telefono=""+telefono;
    }
}

class Rubrica{
    constructor(){
        this.contatti=[];
    }


    stampaLista(){
        array=this.contatti;
        
        for (const contatto of this.array){
            console.log(contatto.nome+contatto.cognome+contatto.telefono);
        }

    }
}