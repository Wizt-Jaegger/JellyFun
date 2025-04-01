import React from 'react';
import './Planes.css';
import plan_1 from '../../assets/program-1.png'
import plan_2 from '../../assets/program-2.png'
import plan_3 from '../../assets/program-3.png'
import plan_icon_1 from '../../assets/program-icon-1.png'
import plan_icon_2 from '../../assets/program-icon-2.png'
import plan_icon_3 from '../../assets/program-icon-3.png'
import { useLanguage } from "../../LanguageContext";

const Planes = () => {
    const { language } = useLanguage();
    const plans = [
        {
            img: plan_1,
            icon: plan_icon_1,
            es: "Gelatinas Modernas",
            en: "Modern Gelatine"
        },
        {
            img: plan_2,
            icon: plan_icon_2,
            es: "Gelatinas Caseras",
            en: "Homemade Gelatine"
        },
        {
            img: plan_3,
            icon: plan_icon_3,
            es: "Gelatinas sorpresa",
            en: "Surprise Gelatine"
        }
    ];
    return(
        <div className='planes'>
            {plans.map((plan, index) => (
                <div className="plan" key={index}>
                    <img src={plan.img} alt='' />
                    <div className='subtitulo'>
                        <img src={plan.icon} alt='' />
                        <p>{language === "es" ? plan.es : plan.en}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}
export default Planes