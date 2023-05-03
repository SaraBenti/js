import React from "react";

class PulsanteAzione extends React.Component {

    constructor() {
        super();
        this.onClick.bind(this);
        this.hasClick = false;
    }

    onClick = () => {
        this.props.onClick();
        this.hasClick = true;
    }

    render() {
        const { refresh, label } = this.props;
        let classBtn = "";
        if ((refresh === true && this.hasClick === false) || (refresh === false)) {
            classBtn = "btn-warning";
        } else {
            classBtn = "btn-info";
        }

        if (label === "AC") {
            classBtn = "btn-danger";
        }
        //console.log(refresh, this.hasClick, label, classBtn);
        return (<button onClick={this.onClick} className={`btn d-block w-100 ${classBtn}`}>{this.props.label}</button>);
    }

    componentDidUpdate() {
        this.hasClick = false;
    }
}

export default PulsanteAzione;