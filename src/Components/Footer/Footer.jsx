import React from 'react';
import logoFooter from "../../assets/logo.png";
import "./Footer.css";
import { Link } from "react-scroll";

const Footer = () => {
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
                            <a href="/" target="_blank" rel="noopener noreferrer">Política de privacidad</a>
                            <a href="/" target="_blank" rel="noopener noreferrer">Términos y condiciones</a>
                        </div>
                    </div>

                    {/* Services Section */}
                    <div className="footer-col" id="services">
                        <h3 className="footer-h3">Indice</h3>
                        <div className="footer-links">
                            <a>
                                <Link to="presentacion" smooth={true} offset={0} duration={500}>
                                    Inicio
                                </Link>
                            </a>
                            <a>
                                <Link to="acercaDe" smooth={true} offset={-150} duration={500}>
                                    Acerca de
                                </Link>
                            </a>
                            <a>
                                <Link to="planes" smooth={true} offset={-260} duration={500}>
                                     Planes
                                </Link>
                            </a>
                            <a>
                                 <Link to="galeria" smooth={true} offset={-260} duration={500}>
                                    Galería
                                </Link>
                            </a>
                            <a>
                                <Link to="testimonios" smooth={true} offset={-260} duration={500}>
                                    Testimonios
                                </Link>
                            </a>
                        </div>
                    </div>

                    {/* Contact Section */}
                    <div className="footer-col" id="contact">
                        <h3 className="footer-h3">Contacto</h3>
                        <div className="footer-contact-details">
                            <i className="fa fa-location"></i>
                            <p>Calle Benito Juarez s/n Esq. Villa de Tezoyuca<br />Zapata, Mor. Mex</p>
                        </div>
                        <div className="footer-contact-details">
                            <i className="fa fa-phone"></i>
                            <p>+52 777 192 4531</p>
                        </div>
                        {/*

                            <div className="footer-social">
                            <a href="https://www.facebook.com/p/Colegio-Jiutepequense-William-Shakespeare-100063877390757/" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-facebook"></i>
                            </a>
                            <a href="https://www.instagram.com/colegio.william.shakespeare/" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-instagram"></i>
                            </a>
                            <a href="https://www.youtube.com/@colegiojiutepecwilliamshak889" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-youtube"></i>
                            </a>
                            <a href="https://wa.me/527771924531" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-whatsapp"></i>
                            </a>
                            <a href="tel:+527771924531">
                                <i className="fa fa-phone"></i>
                            </a>
                        </div>

                        */}
                        
                    </div>
                </div>

            </div>
        </footer>
    );
};

export default Footer;
