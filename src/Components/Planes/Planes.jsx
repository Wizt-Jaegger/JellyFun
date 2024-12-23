import React from 'react';
import './Planes.css';
import plan_1 from '../../assets/program-1.png'
import plan_2 from '../../assets/program-2.png'
import plan_3 from '../../assets/program-3.png'
import plan_icon_1 from '../../assets/program-icon-1.png'
import plan_icon_2 from '../../assets/program-icon-2.png'
import plan_icon_3 from '../../assets/program-icon-3.png'

const Planes = () => {
    return(
        <div className='planes'>
            <div className="plan">
                <img src={plan_1} alt=''/>
                <div className='subtitulo'>
                    <img src={plan_icon_1} alt=''/>
                    <p>Servicio con meseros</p>
                </div>
            </div>
            <div className="plan">
                <img src={plan_2} alt=''/>
                <div className='subtitulo'>
                    <img src={plan_icon_2} alt=''/>
                    <p>Servicio con alimentos</p>
                </div>
            </div>
            <div className="plan">
                <img src={plan_3} alt=''/>
                <div className='subtitulo'>
                    <img src={plan_icon_3} alt=''/>
                    <p>Servicio completo</p>
                </div>
            </div>
            

        </div>
    )
}
export default Planes