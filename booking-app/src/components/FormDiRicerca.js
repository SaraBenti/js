import React from "react";
import DropdownDestinazioni from "./DropdownDestinazioni";
import DatePickerCheckInCheckout from "./DatePickerCheckInCheckout";
import DropdownRoomOccupancy from "./DropdownRoomOccupancy";

class FormDiRicerca extends React.Component {
    render() {
        return (
            <div className="container text-center border border-3 order-primary rounded-start rounded-end p-1">
                <div className="row align-items-start">
                    <div className="col-2">
                        <DropdownDestinazioni />
                    </div>
                    <div className="col-6">
                        <DatePickerCheckInCheckout />
                    </div>
                    <div className="col-3">
                        <DropdownRoomOccupancy adults="0" childs="0" rooms="0" />
                    </div>
                    <div className="col-1">
                        <button onClick={this.props.onSubmit} className="btn btn-primary w-100">Cerca</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default FormDiRicerca;