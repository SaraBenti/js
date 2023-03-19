//while è finchè

let j=0;
while(j>=0 && j<=10){
    console.log(j);
    j++;//usciti dal blocco j vale 11
}

//do/while
do {
    console.log(j);
}while(j<10);// anche se il valore è 11 la prima stampa la fa perchè la condizione è dopo
// do while da utilizzare quando almeno una volta il blocco di codice è da eseguire

let check = true;
while (check){
    console.log("Forza Ponchy");
    if (j<=20){
        check=false;
    }
}

let m=0;
while (m<10){
    m++;
    console.log("iterazioni: "+m);
    if(m>3){
        continue;//continua l'esecuzione del ciclo ma senza fare l'istruzione sottostante
    }
    console.log(m);
}
