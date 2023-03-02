let intero=20;

for(i=intero;i>0;i--){
        if(i%2==0){

            console.log(i);
        }
    }
let x=0;
for (i=x; i<=10;i++){
    switch(i){
        case 1: {
            console.log("uno");
            break;
        }
        case 2:{
            console.log("due");
            break;
        }
        case 3:{
            console.log("tre");
            break;
        }
        case 4:{
            console.log("quattro");
            break;
        }
        case 5:{
            console.log("cinque");
            break;
        }
        case 6:{
            console.log("sei");
            break;
        }
        case 7:{
            console.log("sette");
            break;
        }
        case 8:{
            console.log("otto");
            break;
        }
        case 9:{
            console.log("nove");
            break;
        }
        case 10:{
            console.log("dieci");
            break;
        }
    }
}

let numero=1;
let tabellina=3;
let tab=tabellina;
 for (i=numero;i<=10;i++){
   
    tab=tabellina*i;
    console.log(tab);
    tab=tabellina;
 }

 let array=[3,5,10,2,8];
 let valore=0;
 let tot=0;
 
 for (valore of array){
    tot+=valore;

 }
 let media= tot/array.length;
 console.log(media);

 let val=0;
 let min=0;
 for(val of array){
    min=val;
    if(min<media){
        console.log(min);
    }
 }