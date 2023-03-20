/**
 * Scrivere una pagina HTML con un con all’interno i seguenti campi:
● una lista (ul) con 3 immagini (https://via.placeholder.com/1000x500.png,
https://via.placeholder.com/1000x200.png, https://via.placeholder.com/1000x100.png )
● al caricamento della pagina solo il primo elemento della lista è visibile, gli altri li hanno tutti
nello style “display: none” impostato.
● un bottone (precedente)
● un bottone (successiva)
Aggiungere alla pagina HTML due funzioni JavaScript che esegue:
● al click sul bottone precedente viene mostrata l’immagine precedente;
● al click sul bottone successiva viene mostrata l’immagine successiva;
 */

function avanti() {
    avantiIndietro("+");
}

function indietro() {
    avantiIndietro("-");
}

function avantiIndietro(direzione) {
    let carosello = document.getElementById("carosello");
    let index = getLiActive();
    if (index === -1) {
        return;
    }

    carosello.children[index].className = "d-none";
    if (direzione === "+") {
        if (index === carosello.children.length - 1) {
            carosello.children[0].className = "";
        } else {
            carosello.children[index + 1].className = "";
        }
    } else {
        if (index === 0) {
            carosello.children[carosello.children.length - 1].className = "";
        } else {
            carosello.children[index - 1].className = "";
        }
    }
}

/** mi ritorna l'indice posizionale del mio li che non ha d-none */
function getLiActive() {
    let carosello = document.getElementById("carosello");
    for (let index = 0; index < carosello.children.length; index++) {
        const element = carosello.children[index];
        if (element.classList.length === 0) {
            return index;
        }
    }
    return -1;
}