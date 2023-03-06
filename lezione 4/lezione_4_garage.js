function makeAutomobile(nomeModello, nomeMarca){
    return {
        nomeModello,
        nomeMarca
    }
}

let garage= { //all'interno dell'oggetto garage apriamo un array
    automobili:[]
}

garage.validaAuto=function(auto){
    //controllo che auto abbia nome marca e nome modello
    if(auto===null || auto===undefined){
        return false;
    }
    if("nomeMarca" in auto && "nomeModello" in auto){
        return true;
    }
    return false;
}

garage.inserisciAuto=function(auto){
    if(this.validaAuto(auto)){
    let indice=this.automobili.length;
    this.automobili[indice]=auto;//non si può mettere l'indice vuoto come in php ma con length misuriamo ogni volta la lunghezza dell'array
}
}

garage.rimuoviVeicolo=function(auto){
    if(this.validaAuto(auto)){
        let indiceDaEliminare= -1;
    for (let indice = 0; indice<this.automobili.length;indice++){
        let autoInGarage =this.automobili[indice];
        if(autoInGarage.nomeMarca===auto.nomeMarca &&
            autoInGarage.nomeModello===auto.nomeModello){
                indiceDaEliminare=indice;
                break;
            }
    }
    if(indiceDaEliminare>=0){
        this.automobili[indiceDaEliminare]=undefined;
    }
}
}
garage.stampaAuto=function(nomeMarca){
    for(const auto of this.automobili){
        if(nomeMarca===auto.nomeMarca){
            console.log(auto.nomeMarca+" "+auto.nomeModello);
        }
    }
}

class ilMioGarage {
    constructor (){
        this.auto= [];
    }
    

    inserisciAuto(auto=new auto(nomeModello,nomeMarca)){
        if(this.validaAuto(auto)){
            let indice=this.automobili.length;
            this.automobili[indice]=auto;
    }
}

    rimuoviVeicolo(auto){
        if(this.validaAuto(auto)){
            let indiceDaEliminare= -1;
        for (let indice = 0; indice<this.automobili.length;indice++){
            let autoInGarage =this.automobili[indice];
            if(autoInGarage.nomeMarca===auto.nomeMarca &&
                autoInGarage.nomeModello===auto.nomeModello){
                    indiceDaEliminare=indice;
                    break;
                }
        }
        if(indiceDaEliminare>=0){
            this.automobili[indiceDaEliminare]=undefined;
        }
    }
    }

    stampaAuto(auto){
        for(const a of this.auto){
            if(nomeMarca===auto.nomeMarca){
                console.log(auto.nomeMarca+" "+auto.nomeModello);
            }
        }
    }
}

class auto{
    constructor (nomeModello,nomeMarca){
        if(nomeModello===null || nomeModello===undefined
            || nomeMarca===null || nomeMarca===undefined){
            return false;
        }
        
            return true;
            this.modello=nomeModello;
            this.marca=nomeMarca;
       
    }
     
   
}