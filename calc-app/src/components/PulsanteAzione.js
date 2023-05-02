import React from "react";

class PulsanteAzione extends React.Component {
    onClickAzione() {
        let azione = this.props.label;
        if (azione === "AC") {
            this.setState("displayNumero", 0);
        }
    }
    render() {
        return (<button onClick={this.onClickAzione} className="btn d-block btn-warning w-100">{this.props.label}</button>);
    }
}

export default PulsanteAzione;