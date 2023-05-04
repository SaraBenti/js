import React from "react";
import InputRangeNumber from "./InputRangeNumber";

class DropdownRoomOccupancy extends React.Component {

    constructor() {
        super();
        this.state = { adults: 0, childs: 0, rooms: 0, agesOfChilds: [] }
        this.onChangeRangeAdults.bind(this);
        this.onChangeRangeChilds.bind(this);
        this.onChangeRangeRooms.bind(this);
    }

    onChangeRangeAdults = (event) => {
        this.setState({ adults: event.target.value });
    }

    onChangeRangeChilds = (event) => {
        this.setState({ childs: event.target.value });
    }

    onChangeRangeRooms = (event) => {
        this.setState({ rooms: event.target.value });
    }

    render() {
        return (
            <div className="dropdown">
                <button className="btn text-start dropdown-toggle w-100" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Adulti {this.state.adults} Bambini {this.state.childs} Camere {this.state.rooms}
                </button>
                <ul className="dropdown-menu w-250px">
                    <li className="container">
                        <div className="m-0 p-2 row">
                            <InputRangeNumber onChangeRange={this.onChangeRangeAdults} value={this.props.adults} name="adulti" label="Adulti" />
                        </div>
                        <div className="m-0 p-2 row">
                            <InputRangeNumber onChangeRange={this.onChangeRangeChilds} value={this.props.childs} name="bambini" label="Bambini" />
                        </div>
                        <div className="m-0 p-2 row">
                            <InputRangeNumber onChangeRange={this.onChangeRangeRooms} value={this.props.rooms} name="room" label="Stanze" />
                        </div>
                    </li>
                </ul>
            </div>
        );
    }
}


export default DropdownRoomOccupancy;