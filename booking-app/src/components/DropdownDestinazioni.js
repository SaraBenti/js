import React from "react";

const listaDestinazioni = [
    "Rimini (Italy)",
    "Los Angeles (USA)",
    "New York City (USA)",
    "Roma (Italy)",
    "Madrid (Spain)"
];

class DropdownDestinazioni extends React.Component {

    constructor() {
        super();
        this.state = {
            destinazione: "Dove andare a dormire"
        };
    }


    onChangeDest(index) {
        let destSelezionata = listaDestinazioni[index];
        this.setState({ destinazione: destSelezionata });
    }

    render() {

        return (
            <div className="dropdown">
                <button className="btn text-start dropdown-toggle w-100" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <i className="bi bi-airplane"></i> {this.state.destinazione}
                </button>
                <ul className="dropdown-menu">
                    {
                        listaDestinazioni.map((dest, i) => {
                            return (
                                <li key={i}>
                                    <button onClick={() => this.onChangeDest(i)} className="dropdown-item" type="button">
                                        <i className="bi bi-geo-alt-fill"></i><span className="ms-2">{dest}</span>
                                    </button>
                                </li>
                            );
                        })
                    }

                </ul>
            </div>
        );
    }
}


export default DropdownDestinazioni;