import React from 'react';
import './Presentacion.css';
import flecha_oscura from '../../assets/dark-arrow.png';
import { Link } from "react-scroll";

const Presentacion = () => {
    return(
        <div className='presentacion container'>
            <div className='presentacion-texto'>
                <h1>Celebra como en casa!</h1>
                <p>Nuestro jardín está pensado para que puedas disfrutar en compañía de tus seres queridos. Tenemos capacidad para hasta 120 personas, contamos con alberca ¡y más!</p>
                <p>
                 <Link
                    to="planes"
                    smooth={true}
                    offset={-260}
                    duration={500}
                    className="btn"
                 >
                    ¡Descubre más!<img src={flecha_oscura} alt=''/>
                 </Link>
                </p>
            </div>
        </div>
    )
}

export default Presentacion