import React, { useState } from "react";
import Display from "./Display";
import PulsanteAzione from "./PulsanteAzione";
import PulsanteNumero from "./PulsanteNumero";

export default function Calcolatrice(props) {
    const [displayNumero, setDisplayNumero] = useState(0);
    const [operatore, setOperatore] = useState("");
    const [hasEseguito, setHasEseguito] = useState(false);
    const [refresh, setRefresh] = useState(false);
    const [operatoreUno, setOperatoreUno] = useState(null);
    const [operatoreDue, setOperatoreDue] = useState(null);

    function handlerClickButton(valore) {
        if (valore !== undefined && valore !== null) {
            if ((displayNumero !== 0 || valore === ".") && hasEseguito === false) {
                valore = displayNumero.toString() + valore.toString();
            }

            if (operatoreUno === null || (operatore === null || operatore === "")) {
                setOperatoreUno(parseFloat(valore));
            } else if (operatore !== null && operatore !== "") {
                setOperatoreDue(parseFloat(valore));
            }
            setDisplayNumero(valore);
            setHasEseguito(false);
        }
    }

    function eseguiOperazioneMatematica(azione, operatoreUno, operatoreDue) {
        if (azione === "+") {
            return operatoreUno + operatoreDue;
        } else if (azione === "-") {
            return operatoreUno - operatoreDue;
        } else if (azione === "/") {
            return operatoreUno / operatoreDue;
        } else {
            return operatoreUno * operatoreDue;
        }
    }

    function handlerAzioneButton(azione) {
        if (azione !== undefined && azione !== null) {
            setRefresh(true);
            switch (azione) {
                case "AC":
                    setOperatore(null);
                    setOperatoreUno(null);
                    setOperatoreDue(null);
                    setDisplayNumero(0);
                    setHasEseguito(false);
                    break;
                case "=":
                    let risultato = eseguiOperazioneMatematica(operatore, operatoreUno, operatoreDue);
                    setDisplayNumero(risultato);
                    setOperatore(null);
                    setOperatoreUno(risultato);
                    setOperatoreDue(null);
                    setHasEseguito(true);
                    break;
                default:
                    if (operatore !== null && operatore !== ""
                        && operatoreUno !== null
                        && operatoreDue !== null) {
                        let risultato = eseguiOperazioneMatematica(operatore, operatoreUno, operatoreDue);
                        setDisplayNumero(risultato);
                        setOperatore(azione);
                        setOperatoreUno(risultato);
                        setOperatoreDue(null);
                        setHasEseguito(true);
                    } else {
                        setDisplayNumero(0)
                        setOperatore(azione);
                        setHasEseguito(false);
                    }
                    break;
            }
        }
    }

    return (
        <div className="border border-dark rounded-start rounded-end w-200px">
            <div className="row p-4">
                <Display risultato={displayNumero} operatore={operatoreUno} azione={operatore} />
            </div>
            <div className="row p-2">
                <div className="col-6">
                    <PulsanteAzione refresh={false} onClick={() => { handlerAzioneButton("AC"); }} label="AC" />
                </div>
                <div className="col-3">
                    <PulsanteAzione refresh={refresh} onClick={() => { handlerAzioneButton("/"); }} label="/" />
                </div>
                <div className="col-3">
                    <PulsanteAzione refresh={refresh} onClick={() => { handlerAzioneButton("*") }} label="*" />
                </div>
            </div>
            <div className="row p-2">
                <div className="col-3"><PulsanteNumero onClick={() => { handlerClickButton(1) }} label="1" /></div>
                <div className="col-3"><PulsanteNumero onClick={() => { handlerClickButton(2) }} label="2" /></div>
                <div className="col-3"><PulsanteNumero onClick={() => { handlerClickButton(3) }} label="3" /></div>
                <div className="col-3"><PulsanteAzione refresh={refresh} onClick={() => { handlerAzioneButton("-") }} label="-" /></div>
            </div>
            <div className="row p-2">
                <div className="col-3"><PulsanteNumero onClick={() => { handlerClickButton(4) }} label="4" /></div>
                <div className="col-3"><PulsanteNumero onClick={() => { handlerClickButton(5) }} label="5" /></div>
                <div className="col-3"><PulsanteNumero onClick={() => { handlerClickButton(6) }} label="6" /></div>
                <div className="col-3"><PulsanteAzione refresh={refresh} onClick={() => { handlerAzioneButton("+") }} label="+" /></div>
            </div>
            <div className="row p-2">
                <div className="col-3"><PulsanteNumero onClick={() => { handlerClickButton(7) }} label="7" /></div>
                <div className="col-3"><PulsanteNumero onClick={() => { handlerClickButton(8) }} label="8" /></div>
                <div className="col-3"><PulsanteNumero onClick={() => { handlerClickButton(9) }} label="9" /></div>
                <div className="col-3"><PulsanteAzione refresh={refresh} onClick={() => { handlerAzioneButton("=") }} label="=" /></div>
            </div>
            <div className="row p-2">
                <div className="col-9"><PulsanteNumero onClick={() => { handlerClickButton(0) }} label="0" /></div>
                <div className="col-3"><PulsanteNumero onClick={() => { handlerClickButton(".") }} label="." /></div>
            </div>
        </div>
    );
}



