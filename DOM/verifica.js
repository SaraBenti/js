function sommaMedia(a,b,c,d,e){
  let somma=0;
  let media=0;
  somma=a+b+c+d+e;
  media=somma/5;
  return console.log(media,somma);
}

function calcola(secondi){
  let ore =(secondi / 3600);
  let ore1=Math.round(ore);
  let secondi_resto = secondi  - (ore * 3600);
  let minuti = (secondi_resto / 60);
  let minuti1=Math.round(minuti);
  secondi_resto = secondi - (ore * 3600) - (minuti * 60);
  let secondi1= secondi-secondi_resto;
  return console.log(ore1,minuti1,secondi1);

}
calcola(5900);

function contaNumeri(cifra){
 let contatore =0;
	if(cifra < 10){
		contatore = 1;
	}
	else if(cifra < 100){
		contatore = 2;
	}
	else if(cifra < 1000){
		contatore = 3;
	}
	else if(cifra < 10000){
		contatore = 4;
	}
	else{
		contatore = false;
	}
  return console.log(contatore);
}
contaNumeri(180);

function PariODsipari(x=2){
  if(x ===null || x ===undefined ){
      return false;
  }
  if (typeof x == "string"){
      x =parseInt(x);
  }
  if (typeof x!=="string" && typeof x !== "number"){
      return false;
  }
  if (x%2===0){
      return 0;
  }else {
      return 1;
  }
}


/**
 * Scrivi un programma che prenda in input un array
 *  multidimensionale e stampi in output la sua trasposta. 
 *  Esempio: Input: [[1, 2],[3, 4],[5, 6]] Output:[[1, 3, 5],[2, 4, 6]]
 */
function trasposta(array){
let array1=[];
for (let i=0;i<array.lenght;i++){
  let array2=[];
  for (let j = 0 ; j < array[i].length ; j++){
    array2.push(array1[j][i]);
  }  
}
return array2;
}
let array=[[1, 2],[3, 4],[5, 6]];
console.log(trasposta(array));



