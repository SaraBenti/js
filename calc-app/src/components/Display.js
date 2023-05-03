import React from "react";

class Display extends React.Component {
    render() {
        let risultatoNumero = parseFloat(this.props.risultato);
        let numeroFormat = new Intl.NumberFormat('it-IT', { maximumSignificantDigits: 6 }).format(risultatoNumero);
        let fsCss = "fs-1 min-height-150px";
        if (risultatoNumero >= 10000000) {
            fsCss = "fs-5 min-height-80px";
        }
        return (<div className="col-12 text-bg-dark p-3 text-end">
            <div className="fs-5">
                {this.props.operatore === null ? "0" : this.props.operatore} {this.props.azione}
            </div>
            <div className={fsCss}>
                {numeroFormat}
            </div>
        </div>);
    }
}

export default Display;