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

const App = () =>{

    const [playState, setPlayState] = useState(false);

    return(
        <div>
            <Navbar/>
            <Presentacion/>
            <div className="container">
                <AcercaDe setPlayState={setPlayState}/>
                <Titulo subTitulo="Servicios" titulo="Lo Que Ofrecemos"/>
                <Planes/>
                <Titulo subTitulo="Galeria" titulo="Fotos De Nuetros Eventos"/>
                <Galeria/>
                <Titulo subTitulo="TESTIMONIOS" titulo="Lo Que Dicen Nuestros Clientes"/>
                <Testimonios/>
                <Titulo subTitulo="Contactanos" titulo="Ponte en Contacto"/>
                <Contacto/>
                <Maps/>
                
            </div>
            
            <Footer/>
            <ReproductorVideo playState ={playState} setPlayState ={setPlayState}/>
        </div>
    )
}

export default App