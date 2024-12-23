import React, { useRef } from "react"
import './Testimonios.css'
import siguiente_icon from '../../assets/next-icon.png'
import atras_icon from '../../assets/back-icon.png'
import user_1 from '../../assets/user-1.png'
import user_2 from '../../assets/user-2.png'
import user_3 from '../../assets/user-3.png'
import user_4 from '../../assets/user-4.png'


const Testimonios =() =>{

    const slider = useRef();
    let tx = 0;

    const slideFordward = () =>{
        if(tx > -50){
            tx -= 25;
        }
        slider.current.style.transform = `translateX(${tx}%)`;
    }

    const slideBackward = () =>{
        if(tx < 0){
            tx += 25;
        }
        slider.current.style.transform = `translateX(${tx}%)`;
    }

    return(
        <div className="testimonios">
            <img src={siguiente_icon} alt="" className="siguiente-btn" onClick={slideFordward}/>
            <img src={atras_icon} alt="" className="atras-btn" onClick={slideBackward}/>
            <div className="slider">
                <ul ref={slider}>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={user_1} alt="" />
                                <div>
                                    <h3>Rosa Valverde</h3>
                                    <span>Cuernavaca, Morelos</span>
                                </div>
                            </div>
                            <p>Fue un evento increíble. Me encantaron el clima y la vista, que hicieron la experiencia aún más especial. La pasé de maravilla disfrutando del excelente servicio y de nadar. Sin duda, ha sido la mejor despedida de soltera que he tenido.</p>

                            
                        </div>
                    </li>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={user_2} alt="" />
                                <div>
                                    <h3>Esteban Contreras</h3>
                                    <span>Jiutepec, Morelos</span>
                                </div>
                            </div>
                            <p>La pasé excelente. Celebramos el bautizo de mi hijo y todo salió a la perfección, sin ningún contratiempo. El servicio fue de primera, ¡100% recomendado! Mis sobrinitos disfrutaron muchísimo de una tarde divertida nadando y jugando, lo que hizo el día aún más especial para todos.</p>

                            
                        </div>
                    </li>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={user_3} alt="" />
                                <div>
                                    <h3>Monica Estrada</h3>
                                    <span>Guadalajara, Jalisco</span>
                                </div>
                            </div>
                            <p>Fue una experiencia muy entretenida; disfruté mucho del excelente servicio de los meseros y de la deliciosa comida que ofrecieron. Aunque el viaje familiar fue largo, el ambiente del lugar logró relajarnos por completo. Además, el sistema de sonido se escuchaba impecable, lo que hizo todo aún más especial.</p>

                            
                        </div>
                    </li>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={user_4} alt="" />
                                <div>
                                    <h3>Juan Quiroga</h3>
                                    <span>Cuernavaca, Morelos</span>
                                </div>
                            </div>
                            <p>Este año celebramos el aniversario de bodas de mis padres, específicamente su boda de oro. El lugar era realmente hermoso, con un ambiente acogedor y sillones muy cómodos donde pude relajarme mientras los meseros nos atendían con gran amabilidad.</p>

                            
                        </div>
                    </li>
                </ul>
            </div>

        </div>
    )
}

export default Testimonios