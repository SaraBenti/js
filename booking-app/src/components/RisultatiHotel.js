import React from "react";


class RisultatiHotel extends React.Component {

    render() {
        return (<div className="my-3">
            {this.props.hotels.map(
                (hotel, index) => {
                    return (
                        <div key={index} className="container border border-1 border-light my-3 p-4">
                            <div className="row">
                                <div className="col-2">
                                    <img className="img-thumbnail shadow p-3 mb-5 bg-body rounded" src={hotel.img} alt={hotel.nome} />
                                </div>
                                <div className="col-10">
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-3">
                                                <span className="h3">{hotel.nome}</span>
                                            </div>
                                            <div className="col-9">
                                                {Array.from({ length: hotel.star }, (value, i) => i).map((star, n) => <i key={n} className="bi bi-star-fill"></i>)}
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-12 text-small">{hotel.indirizzo} - {hotel.citta}</div>
                                        </div>
                                        <div className="row">
                                            <div className="col-12">
                                                <button className="btn btn-primary w-100">Prenota ora</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }
            )}
        </div>);
    }
}

export default RisultatiHotel;