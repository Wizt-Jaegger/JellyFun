import React from 'react';
import './Presentacion.css';
import flecha_oscura from '../../assets/dark-arrow.png';

const Presentacion = () => {
    return(
        <div className='presentacion container'>
            <div className='presentacion-texto'>
            <h1>Un jardín para disfrutar de tus momentos más especiales</h1>
            <p>Nuestro jardín está pensado para que puedas disfrutar en compañía de tus seres queridos. Tenemos capacidad para hasta 120 personas, contamos con alberca ¡y más!</p>
            <button className='btn'>¡Descubre más! <img src={flecha_oscura} alt=''/></button>

            </div>
        </div>
    )
}

export default Presentacion