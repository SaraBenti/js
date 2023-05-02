import React from "react";

class Display extends React.Component {
    render() {
        return (<div className="col-12 text-bg-dark p-3 text-end">{this.props.risultato}</div>);
    }
}

export default Display;