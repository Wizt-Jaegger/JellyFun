import React from "react";
import './AcercaDe.css';
import acercaDe_img from '../../assets/about.png';
import play_icon from '../../assets/play-icon.png';
import { useLanguage } from "../../LanguageContext"; // Importar el contexto

const AcercaDe = ({ setPlayState }) => {
    const { language } = useLanguage(); 

    return (
        <div className="acercaDe">
            <div className="acercaDe-izq">
                <img src={acercaDe_img} alt="" className="acercaDe-img" />
                <img src={play_icon} alt="" className="play-icon" onClick={() => setPlayState(true)} />
            </div>
            <div className="acercaDe-der">
                <h3>{language === "es" ? "ACERCA DE JELLYFUN" : "ABOUT JELLYFUN"}</h3>
                <h2>
                    {language === "es"
                        ? "¡Disfruta de una experiencia única con nuestras gelatinas artesanales!"
                        : "Enjoy a unique experience with our artisanal jellies!"}
                </h2>
                <p>
                    {language === "es"
                        ? "JellyFun es una gelatería nacida en Cuernavaca, Morelos, en el 2025, donde fusionamos la alta cocina con la tradición artesanal de la gelatina. Cada una de nuestras creaciones es hecha a mano con ingredientes frescos y de la más alta calidad, llevando este postre a un nivel gourmet."
                        : "JellyFun is a jelly shop founded in Cuernavaca, Morelos, in 2025, where we merge haute cuisine with the artisanal tradition of jelly. Each of our creations is handmade with fresh, high-quality ingredients, taking this dessert to a gourmet level."}
                </p>
                <p>
                    {language === "es"
                        ? "Nos especializamos en ofrecer gelatinas innovadoras, que van más allá del sabor tradicional, con opciones que incluyen infusiones de sabores exóticos, combinaciones creativas y presentaciones sorprendentes. Ya sea que busques un toque dulce para tu día o un postre especial para tu evento, en JellyFun te brindamos una experiencia culinaria única."
                        : "We specialize in offering innovative jellies that go beyond traditional flavors, with options including exotic flavor infusions, creative combinations, and surprising presentations. Whether you're looking for a sweet treat for your day or a special dessert for your event, JellyFun provides a unique culinary experience."}
                </p>
                <p>
                    {language === "es"
                        ? "En JellyFun, nos enorgullece cuidar cada detalle en la elaboración de nuestras gelatinas, asegurando que cada bocado sea una explosión de sabores y texturas que te sorprenderán. Disfruta de nuestras creaciones en nuestro local o realiza tu pedido para llevar y disfrutar donde tú prefieras."
                        : "At JellyFun, we take pride in every detail of our jelly-making process, ensuring that each bite is an explosion of flavors and textures that will surprise you. Enjoy our creations at our shop or place an order to take away and enjoy wherever you like."}
                </p>
            </div>
        </div>
    );
};

export default AcercaDe;