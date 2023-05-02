import React from "react";

class PulsanteNumero extends React.Component {
    onClickNumero() {
        this.setState("displayNumero", this.props.label);
    }
    render() {
        return (<button onClick={this.onClickNumero} className="w-100 btn btn-light">{this.props.label}</button>);
    }
}

export default PulsanteNumero;