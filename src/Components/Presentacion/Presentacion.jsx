import React from 'react';
import './Presentacion.css';
import flecha_oscura from '../../assets/dark-arrow.png';
import { Link } from "react-scroll";

const Presentacion = () => {
    return(
        <div className='presentacion container'>
            <div className='presentacion-texto'>
                <h1>Un jardín para disfrutar de tus momentos más especiales</h1>
                <p>Celebra como en casa!</p>
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