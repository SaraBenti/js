import React from "react";

class InputRangeNumber extends React.Component {
    render() {
        return (<>
            <div className="col-4">
                <label className="text-start form-label" htmlFor={this.props.name}>{this.props.label}</label>
            </div>
            <div className="col-8">
                <input defaultValue={this.props.value} onChange={this.props.onChangeRange} id={this.props.name} type="number" min="1" max="8" className="form-control"></input>
            </div>
        </>
        );
    }
}

export default InputRangeNumber;