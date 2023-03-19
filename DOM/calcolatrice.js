function calcolaOperazione(operatore){
    let operatore1 = document.getElementById("operatore1"); //tag html input
    let operatore2 = document.getElementById("operatore2"); //tag html input

    let op1 = parseInt(operatore1.value);//perchè input è text e noi vogliamo un numero
    let op2= parseInt(operatore2.value);

    let risultatoOperazione=null;
    switch (operatore){
        case '+':
        risultatoOperazione=op1+p2;
        break;
        case '-':
        risultatoOperazione=op1-p2;
        break;
        case '*':
        risultatoOperazione=op1*p2;
        break;
        case '/':
        risultatoOperazione=op1/p2;
        break;


    }
    document.getElementById("risultato").innerHTML = risultatoOperazione;  
}
