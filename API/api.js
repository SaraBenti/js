/**
 * endpoint api:

https://ifts.adriasonline.com/contatti

{
"nome": "Giuseppe",
"cognome": "Rossi",
"email": "giuseppe.rossi@gmail.com",
"numeroDiTelefono":  "05412345678"
}
 */




function validazioneEmail(){
           
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
        return true;
    }
    else {
        return false;
    }

}