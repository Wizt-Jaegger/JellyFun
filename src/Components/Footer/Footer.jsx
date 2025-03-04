import React from 'react';
import logoFooter from "../../assets/logo.png";
import "./Footer.css";
import { Link } from "react-scroll";
import logoTechPal from "../../assets/logoTechPaltxt.png";
import { useLanguage } from "../../LanguageContext"; // Import context

const Footer = () => {
    const { language } = useLanguage(); // Get language state

    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-row">
                    {/* Company Section */}
                    <div className="footer-col" id="company">
                        <h3 className="footer-h3">
                            <span className="footer-logo-container">
                                <img src={logoFooter} alt="Logo" className="footer-logo" />
                            </span>
                            <span className="footer-company-name">SA de CV</span>
                        </h3>
                        <div className="footer-links">
                            <a href="/" target="_blank" rel="noopener noreferrer">
                                {language === "es" ? "Política de privacidad" : "Privacy Policy"}
                            </a>
                            <a href="/" target="_blank" rel="noopener noreferrer">
                                {language === "es" ? "Términos y condiciones" : "Terms and Conditions"}
                            </a>
                        </div>
                    </div>

                    {/* Services Section */}
                    <div className="footer-col" id="services">
                        <h3 className="footer-h3">
                            {language === "es" ? "Índice" : "Index"}
                        </h3>
                        <div className="footer-links">
                            <a>
                                <Link to="presentacion" smooth={true} offset={0} duration={500}>
                                    {language === "es" ? "Inicio" : "Home"}
                                </Link>
                            </a>
                            <a>
                                <Link to="acercaDe" smooth={true} offset={-150} duration={500}>
                                    {language === "es" ? "Acerca de" : "About"}
                                </Link>
                            </a>
                            <a>
                                <Link to="planes" smooth={true} offset={-260} duration={500}>
                                    {language === "es" ? "Planes" : "Plans"}
                                </Link>
                            </a>
                            <a>
                                <Link to="galeria" smooth={true} offset={-260} duration={500}>
                                    {language === "es" ? "Galería" : "Gallery"}
                                </Link>
                            </a>
                            <a>
                                <Link to="testimonios" smooth={true} offset={-260} duration={500}>
                                    {language === "es" ? "Testimonios" : "Testimonials"}
                                </Link>
                            </a>
                        </div>
                    </div>

                    {/* Contact Section */}
                    <div className="footer-col" id="contact">
                        <h3 className="footer-h3">
                            {language === "es" ? "Contacto" : "Contact"}
                        </h3>
                        <div className="footer-contact-details">
                            <i className="fa fa-location"></i>
                            <p>{language === "es" ? "Calle Benito Juarez s/n Esq. Villa de Tezoyuca" : "Benito Juarez St. No. Villa de Tezoyuca"}<br />
                            {language === "es" ? "Zapata, Mor. Mex" : "Zapata, Mor. Mex"}</p>
                        </div>
                        <div className="footer-contact-details">
                            <i className="fa fa-phone"></i>
                            <p>+52 777 192 4531</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='footer-social'>
                <a className='normalText'>
                    {language === "es" ? "¿Te gustó? Consigue la tuya con nosotros" : "Did you like it? Get yours with us"}
                </a>
                <a className='shortText'>
                    {language === "es" ? "hecho por: " : "made by: "}
                </a>
                <a href="https://techpal.com.mx" target="_blank">
                    <img src={logoTechPal} alt="" />
                </a>
            </div>
        </footer>
    );
};

export default Footer;
