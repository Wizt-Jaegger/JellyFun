import React, { useState, useEffect } from "react";
import './Navbar.css';
import logo from '../../assets/logo.png';
import menu_icon from '../../assets/menu-icon.png';
import { Link } from "react-scroll";
import { useLanguage } from "../../LanguageContext"; // Import context

const Navbar = () => {
    const { language, toggleLanguage } = useLanguage(); // Get language state

    const [sticky, setSticky] = useState(false);
    const [mobileMenu, setMobileMenu] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setSticky(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const toggleMenu = () => setMobileMenu(!mobileMenu);

    return (
        <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
            <img src={logo} alt="logo Sorelu" className="logo" />
            <ul className={mobileMenu ? '' : 'hide-mobile-menu'}>
                <li className="active">
                    <Link to="presentacion" smooth={true} offset={0} duration={500}>
                        {language === "es" ? "Inicio" : "Home"}
                    </Link>
                </li>
                <li>
                    <Link to="acercaDe" smooth={true} offset={-150} duration={500}>
                        {language === "es" ? "Acerca de" : "About"}
                    </Link>
                </li>
                <li>
                    <Link to="planes" smooth={true} offset={-260} duration={500}>
                        {language === "es" ? "Planes" : "Plans"}
                    </Link>
                </li>
                <li>
                    <Link to="galeria" smooth={true} offset={-260} duration={500}>
                        {language === "es" ? "Galería" : "Gallery"}
                    </Link>
                </li>
                <li>
                    <Link to="testimonios" smooth={true} offset={-260} duration={500}>
                        {language === "es" ? "Testimonios" : "Testimonials"}
                    </Link>
                </li>
                <li>
                    <Link to="contacto" smooth={true} offset={-260} duration={500} className="btn">
                        {language === "es" ? "Contáctanos" : "Contact Us"}
                    </Link>
                </li>
            </ul>

            {/* ENG Button to toggle language */}
            <div className="engBtn" onClick={toggleLanguage}>
                {language === "es" ? "ENG" : "ESP"}
            </div>

            <img src={menu_icon} alt="menu" className="menu-icon" onClick={toggleMenu} />
        </nav>
    );
};

export default Navbar;
