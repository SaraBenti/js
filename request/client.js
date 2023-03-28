function eseguiGet() {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", "https://jsonplaceholder.typicode.com/todos")
    xhr.responseType = "json";
    xhr.send();

    xhr.onload = function () {
        disegnaContenuto(xhr.response);
    }

    xhr.onerror = function () {

    }
}



function disegnaContenuto(resp) {
    let divRoot = document.getElementById("result");
    divRoot.innerHTML = "";
    for (let index = 0; index < resp.length; index++) {
        const element = resp[index];
        let riga = creaDivRighe(index);
        riga.appendChild(creaDivColonne(element.id));
        riga.appendChild(creaDivColonne(element.title));
        riga.appendChild(creaDivColonne(element.completed));
        riga.appendChild(creaDivColonne(creaStato(element.completed)));
        //con questa sopra ho appeso le icone
        divRoot.appendChild(riga);
    }
}

//creiamo un'icona invece di avere la risposta true allo stato
function creaStato(stato) {
    if (stato) {
        return '<i class="bi bi-check-circle-fill"></i>';
    } else {
        return '<i class="bi bi-check-circle"></i>'
    }
}

function creaDivColonne(valoreTesto) {
    let divCol = document.createElement("div");
    divCol.className = "col-md-3";
    divCol.innerHTML = valoreTesto;
    return divCol;
}

function creaDivRighe(indice) {
    let divRow = document.createElement("div");
    divRow.setAttribute("data-id", indice);

    if (indice % 2 === 0) {
        divRow.className = "row";
    } else {
        divRow.className = "row bg-light";
    }

    return divRow;
}


eseguiGet();

function validaNumero(valore){
    if(typeof valore!=="number"){
        let error= new Error("valore numerico non valido");
        throw error;
    }
    //
    //continua il mio codice
}
validaNumero("ciao");
//error:valore numerico non valido


//promessa su richiesta HTTP
function getHttp(){
    return new Promise(
        function (resolve, reject){
            let xhr=new XMLHttpRequest();
            xhr.onload=function(){
                if(xhr.status===200){
                    resolve(xhr.response);
                }else{
                    reject(new Error(xhr.statusText));
                }
            }
            xhr.open("GET", "https://jsonplaceholder.typicode.com/todos");
            xhr.send();
        }
    )
}

let promessa=getHttp();
promessa.then((data) => disegnaContenuto(data))//se la chiamata ha esito positivo
        .then((error) => console.dir(error));//se non ottengo la risposta

        //oppure posso scriverlo così
        // promessa.then((data) => console.log(data))
        // .catch((error) => console.dir(error));    


//modo di lacvorare in modo asincrona
function provaPromesse(){
    return new Promise(
        function(resolve,reject){
            let array =[1,2,3,4,5,6,7,8,9,10];
            for(let index=0;index<array.length;index++){
                const element= array[index];
                totale=totale+element;
                if(totale===4){
                    resolve(totale);
                }else{
                    reject(index);
                }
            }
        }
    );
}
let promessa2=provaPromesse();
promessa2.then((totale)=>console.log(totale))
        .then((index)=>console.log(index));





        // function provaPromesse() {
        //     return new Promise(
        //         function (resolve, reject) {
        //             let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        //             let totale = 0;
        //             for (let index = 0; index < array.length; index++) {
        //                 const element = array[index];
        //                 totale = totale + element;
        //                 let x = 0;
        //                 while (x <= 100000) {
        //                     x++;
        //                 }
        //                 if (totale > 4) {
        //                     resolve(totale);
        //                 } else {
        //                     reject(index);
        //                 }
        //             }
        //         }
        //     );
        // }
        
        // let promessa2 = provaPromesse();
        
        // promessa2.then((totale) => console.log("Totale: " + totale), (error) => console.log("Indice: " + error));
        
        // console.log("ciao");
        //in questo caso viene prima lavorato ciao e poi fatto  il ciclo