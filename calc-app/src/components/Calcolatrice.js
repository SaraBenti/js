import React, { useState } from "react";
import Display from "./Display";
import PulsanteAzione from "./PulsanteAzione";
import PulsanteNumero from "./PulsanteNumero";

export default function Calcolatrice(props) {
    const [risultato] = useState(0);
    function handler(operazione, valore){
       
    }
    return (
        <div className="border border-dark rounded-start w-200px">
            <div className="row p-4">
                <Display risultato={risultato} />
            </div>
            <div className="row p-2">
                <div className="col-6">
                    <PulsanteAzione label="AC" />
                </div>
                <div className="col-3">
                    <PulsanteAzione label="/" />
                </div>
                <div className="col-3">
                    <PulsanteAzione label="*" />
                </div>
            </div>
            <div className="row p-2">
                <div className="col-3"><PulsanteNumero label="1" /></div>
                <div className="col-3"><PulsanteNumero label="2" /></div>
                <div className="col-3"><PulsanteNumero label="3" /></div>
                <div className="col-3"><PulsanteAzione label="-" /></div>
            </div>
            <div className="row p-2">
                <div className="col-3"><PulsanteNumero label="4" /></div>
                <div className="col-3"><PulsanteNumero label="5" /></div>
                <div className="col-3"><PulsanteNumero label="6" /></div>
                <div className="col-3"><PulsanteAzione label="+" /></div>
            </div>
            <div className="row p-2">
                <div className="col-3"><PulsanteNumero label="7" /></div>
                <div className="col-3"><PulsanteNumero label="8" /></div>
                <div className="col-3"><PulsanteNumero label="9" /></div>
                <div className="col-3"><PulsanteAzione label="=" /></div>
            </div>
            <div className="row p-2">
                <div className="col-3"><PulsanteNumero label="0" /></div>
                <div className="col-3"><PulsanteNumero label="." /></div>
                <div className="col-3"></div>
                <div className="col-3"></div>
            </div>
        </div>
    );
}

