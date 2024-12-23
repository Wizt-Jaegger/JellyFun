import React from "react";
import './AcercaDe.css'
import acercaDe_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'

const AcercaDe = ({setPlayState}) =>{
    return(
        <div className="acercaDe">
            <div className="acercaDe-izq">
                <img src={acercaDe_img} alt="" className="acercaDe-img"/>
                <img src={play_icon} alt="" className="play-icon" onClick={()=>{
                    setPlayState(true)
                }}/>
            </div>
            <div className="acercaDe-der">
                <h3>ACERCA DEL JARDÍN</h3>
                <h2>¡Vive los mejores momentos con tus seres queridos!</h2>
                <p>Relájate bajo el sol mientras disfrutas de nuestra alberca, diseñada para brindarte un espacio de confort y tranquilidad. Escapa de las preocupaciones cotidianas y vive una experiencia inolvidable.</p>
                <p>Deja en nuestras manos todos los detalles con nuestro servicio de meseros. Ellos se encargarán de que tú y tus invitados solo tengan que preocuparse por disfrutar, asegurándose de que cada momento sea especial y sin estrés.</p>
                <p>Nuestras instalaciones están completamente protegidas con bardas perimetrales, lo que garantiza tu privacidad y seguridad. Además, contamos con equipo de sonido para ambientar tu evento, una barra de meseros con hielera integrada para mantener tus bebidas siempre frías, y baños impecables que estarán limpios y listos para tus invitados en todo momento.</p>
            </div>

        </div>
    )
}
export default AcercaDe