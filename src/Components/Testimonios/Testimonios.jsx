import React, { useRef } from "react";
import './Testimonios.css';
import siguiente_icon from '../../assets/next-icon.png';
import atras_icon from '../../assets/back-icon.png';
import user_1 from '../../assets/user-1.png';
import user_2 from '../../assets/user-2.png';
import user_3 from '../../assets/user-3.png';
import user_4 from '../../assets/user-4.png';
import { useLanguage } from "../../LanguageContext"; // Import context

const Testimonios = () => {
    const { language } = useLanguage(); // Get language state
    const slider = useRef();
    let tx = 0;

    const slideFordward = () => {
        if (tx > -50) {
            tx -= 25;
        }
        slider.current.style.transform = `translateX(${tx}%)`;
    }

    const slideBackward = () => {
        if (tx < 0) {
            tx += 25;
        }
        slider.current.style.transform = `translateX(${tx}%)`;
    }

    return (
        <div className="testimonios">
            <img src={siguiente_icon} alt="" className="siguiente-btn" onClick={slideFordward} />
            <img src={atras_icon} alt="" className="atras-btn" onClick={slideBackward} />
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
                            <p>{language === "es" ? "¡Las mejores gelatinas que he probado! La textura es increíble y los sabores son súper intensos. Me encantó la de mango con chamoy, realmente una delicia. Sin duda, volveré por más." : "The best jellies I've ever had! The texture is amazing, and the flavors are very intense. I loved the mango with chamoy, it was truly delicious. I will definitely come back for more."}</p>
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
                            <p>{language === "es" ? "JellyFun es el lugar perfecto para un antojo dulce. Compré una gelatina mosaico y estaba espectacular. Me gusta que los ingredientes sean naturales y que tengan opciones sin azúcar." : "JellyFun is the perfect place for a sweet craving. I bought a mosaic jelly, and it was amazing. I like that the ingredients are natural and they have sugar-free options."}</p>
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
                            <p>{language === "es" ? "Visité JellyFun durante mi estancia en Morelos y quedé encantada. Las gelatinas son tan cremosas y tienen combinaciones muy originales. Probé la de coco con piña y estaba espectacular." : "I visited JellyFun during my stay in Morelos and was delighted. The jellies are so creamy and have very original combinations. I tried the coconut with pineapple one, and it was spectacular."}</p>
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
                            <p>{language === "es" ? "Encargamos gelatinas personalizadas para el cumpleaños de mi hija y quedaron preciosas. No solo se veían increíbles, sino que sabían deliciosas. El servicio al cliente fue excelente." : "We ordered custom jellies for my daughter's birthday, and they turned out beautiful. Not only did they look amazing, but they tasted delicious. The customer service was excellent."}</p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Testimonios;
