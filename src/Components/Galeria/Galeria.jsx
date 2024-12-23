import React from "react";
import './Galeria.css';
import galeria_1 from '../../assets/gallery-1.png'
import galeria_2 from '../../assets/gallery-2.png'
import galeria_3 from '../../assets/gallery-3.png'
import galeria_4 from '../../assets/gallery-4.png'
import flechaBlanca from '../../assets/dark-arrow.png'

const Galeria = () =>{
    return(
        <div className="galeria">
            <div className="gallery">
                <img src={galeria_1} alt="" />
                <img src={galeria_2} alt="" />
                <img src={galeria_3} alt="" />
                <img src={galeria_4} alt="" />
            </div>
            <button className="btn">Ver mas <img src={flechaBlanca} alt="" /></button>
        </div>
    )
}
export default Galeria