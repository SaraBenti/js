import FormDiRicerca from './components/FormDiRicerca';
import RisultatiHotel from './components/RisultatiHotel';
import './App.css';
import { useState } from 'react';

const hotelsFake = [
  { img: "http://localhost:3000/hotel.jpg", nome: "Hotel Nettuno", star: 3, indirizzo: "Via Roma 1", citta: "Roma", recensioni: 4.5 },
  { img: "http://localhost:3000/hotel.jpg", nome: "Hotel Roma", star: 4, indirizzo: "Via Lazio 1", citta: "Roma", recensioni: 4.5 },
];

function App() {
  const [hotels, setHotels] = useState([]);
  const onCerca = function () {
    //le chiame alle api fetch e nella promessa avremmo inserito il nostro hook.
    setHotels(hotelsFake);
  }
  return (
    <div className='container m-5 w-100'>
      <div className='row'>
        <FormDiRicerca onSubmit={() => onCerca()} />
      </div>

      <div className='row my-2'>
        <div className='col-12'>
          <div className='h2 text-center'>Risultati di ricerca</div>
        </div>
      </div>

      <div className='row my-2'>
        <div className='col-2'>
          <span>Filtri</span>
        </div>
        <div className='col-10'>
          <RisultatiHotel hotels={hotels} />
        </div>
      </div>
    </div>
  );
}

export default App;



