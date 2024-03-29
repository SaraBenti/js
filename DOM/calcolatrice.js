/**
 * Scrivere in una pagina HTML con all’interno i seguenti campi:
● operando 1 (campo editabile)
● operando 2 (campo editabile)
● bottone +
● bottone -
● bottone /
● bottone *
Aggiungere alla pagina HTML una funzione JavaScript che calcoli tramite i bottoni
adeguati le quattro operazioni fondamentali.
Visualizzare il risultato all’interno di una tag <h2>.
 */
function calcolaOperazione(operatore) {
  let operatore1 = document.getElementById("operatore1"); //tag html input
  let operatore2 = document.getElementById("operatore2"); //tag html input

  let op1 = parseInt(operatore1.value); //perchè input è text e noi vogliamo un numero
  let op2 = parseInt(operatore2.value);

  let risultatoOperazione = null;
  switch (operatore) {
    case "+":
      risultatoOperazione = op1 + op2;
      break;
    case "-":
      risultatoOperazione = op1 - op2;
      break;
    case "*":
      risultatoOperazione = op1 * op2;
      break;
    case "/":
      risultatoOperazione = op1 / op2;
      break;
    default:
      break;
  }
  document.getElementById("risultato").innerHTML = risultatoOperazione;
}
