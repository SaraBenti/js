/**
 * Scrivere una pagina HTML con un con all’interno i seguenti campi:
● cognome (campo editabile lunga 40 caratteri)
● nome (campo editabile lunga 30 caratteri)
● email (campo editabile lunga 30 caratteri)
● telefono (campo lunga 15 caratteri)
● bottone di invio
Aggiungere alla pagina HTML una funzione JavaScript che esegue i seguenti controlli:
● verifica che il cognome non sia vuoto;
● verifica che il nome non sia vuoto;
● verificare che l’email contenga il simbolo @ in caso non sia vuota;
● verifica che o l’email o il telefono siano non vuoti;
Inoltre, fare in modo che, nel documento HTML, tale funzione JavaScript venga eseguita quando l’utente preme il
bottone di invio.
 */
function validaDati() {
    if (validaCampoNonVuoto("nome") && validaCampoNonVuoto("cognome")) {
        let risultato = validaCampoNonVuoto("telefono") || validaEmail("email");
        if (!risultato) {
            alert("i campi email e telefono non sono validi");
        }
    } else {
        alert("i campi nome e cognome non sono validi");
    }
}

//true se il campo non è vuoto 
//false se il campo è vuoto
function validaCampoNonVuoto(id) {
    let input = document.getElementById(id);
    if (input !== undefined
        && input.value !== undefined
        && input.value !== null
        && input.value !== "") {
        return true;
    }
    return false;
}

function validaEmail(id) {
    let input = document.getElementById(id);
    if (input !== undefined
        && input.value !== undefined
        && input.value !== null
        && input.value !== ""
        && input.value.indexOf("@") > 0) {
        return true;
    }
    return false;
}