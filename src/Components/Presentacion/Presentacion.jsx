import React from 'react';
import './Presentacion.css';
import flecha_oscura from '../../assets/dark-arrow.png';
import logo from '../../assets/logo.png';
import { Link } from "react-scroll";
import { useLanguage } from "../../LanguageContext"; // Import context

const Presentacion = () => {
    const { language } = useLanguage(); // Get language state

    return (
        <div className='presentacion container'>
            <div className='presentacion-texto'>
                <img src={logo} alt="Logo" style={{ width: '80%', height: 'auto' }} />
                <p>
                    {language === "es"
                        ? "Nuestras gelatinas, no solo son de la más alta calidad, sino que están hechas con el corazón, porque con sentimientos reales creamos experiencias únicas. ¡Deja que la comida sea divertida con Jellyfun!"
                        : "Our jellies are not only of the highest quality, but they are made with heart, because with real feelings we create unique experiences. Let food be fun with Jellyfun!"}
                </p>
                <p>
                    <Link
                        to="planes"
                        smooth={true}
                        offset={-260}
                        duration={500}
                        className="btn"
                    >
                        {language === "es" ? "¡Descubre más!" : "Discover more!"}
                        <img src={flecha_oscura} alt='' />
                    </Link>
                </p>
            </div>
        </div>
    );
}

export default Presentacion;
