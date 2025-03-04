import React, { useState } from "react";
import Navbar from "./Components/Navbar/Navbar";
import Presentacion from "./Components/Presentacion/Presentacion";
import Planes from "./Components/Planes/Planes";
import Titulo from "./Components/Titulo/Titulo";
import AcercaDe from "./Components/AcercaDe/AcercaDe";
import Galeria from "./Components/Galeria/Galeria";
import Testimonios from "./Components/Testimonios/Testimonios";
import Contacto from "./Components/Contacto/Contacto";
import Footer from "./Components/Footer/Footer";
import Maps from "./Components/Maps/Maps";
import ReproductorVideo from "./Components/ReproductorVideo/ReproductorVideo";
import { useLanguage } from "../src/LanguageContext"; 

const App = () => {
    const [playState, setPlayState] = useState(false);
    const { language } = useLanguage();

    return (
        <div>
            <Navbar />
            <Presentacion />
            <div className="container">
                <AcercaDe setPlayState={setPlayState} language={language}/>
                <Titulo 
                    subTitulo={language === "es" ? "Servicios" : "Services"} 
                    titulo={language === "es" ? "Lo Que Ofrecemos" : "What We Offer"} 
                />
                <Planes />
                <Titulo 
                    subTitulo={language === "es" ? "Galeria" : "Gallery"} 
                    titulo={language === "es" ? "Nuestras Mejores Gelatinas" : "Our Best Jellies"} 
                />
                <Galeria />
                <Titulo 
                    subTitulo={language === "es" ? "TESTIMONIOS" : "TESTIMONIALS"} 
                    titulo={language === "es" ? "Lo Que Dicen Nuestros Clientes" : "What Our Clients Say"} 
                />
                <Testimonios />
                <Titulo 
                    subTitulo={language === "es" ? "Contactanos" : "Contact Us"} 
                    titulo={language === "es" ? "Ponte en Contacto" : "Get in Touch"} 
                />
                <Contacto />
                <Maps />
            </div>
            
            <Footer />
            <ReproductorVideo playState={playState} setPlayState={setPlayState} />
        </div>
    );
}

export default App;
