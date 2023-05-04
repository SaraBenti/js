import React from "react";

class DatePickerCheckInCheckout extends React.Component {
    render() {
        return (<div className="container">
            <div className="row align-items-start">
                <div className="col-3">
                    <label htmlFor="checkIn" className="col-form-label">Check in</label>
                </div>
                <div className="col-3">
                    <input type="date" className="form-control-plaintext" id="checkIn"></input>
                </div>
                <div className="col-3">
                    <label htmlFor="checkOut" className="col-form-label">Check out</label>
                </div>
                <div className="col-3">
                    <input type="date" className="form-control-plaintext" id="checkOut"></input>
                </div>
            </div>
        </div>)
    }
}

export default DatePickerCheckInCheckout;