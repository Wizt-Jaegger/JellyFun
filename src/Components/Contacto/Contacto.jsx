import React from "react";
import './Contacto.css';
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import { useLanguage } from "../../LanguageContext"; // Import context

const Contacto = () => {
    const { language } = useLanguage(); // Get the current language

    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult(language === "es" ? "Enviando...." : "Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", "8fa52b60-4c48-4ef8-91d4-098bc7c5bc4a");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            setResult(language === "es" ? "Mensaje enviado con exito!" : "Message sent successfully!");
            event.target.reset();
        } else {
            console.log("Error", data);
            setResult(data.message);
        }
    };

    return (
        <div className="contacto">
            <div className="contacto-col">
                <h3>{language === "es" ? "Envíanos un mensaje" : "Send us a message"} <img src={msg_icon} alt="" /></h3>
                <p>{language === "es" ? "Tómate la libertad de contactarnos por medio de este formulario de contacto. Tu retroalimentación, preguntas y sugerencias son importantes para nosotros." : "Feel free to contact us through this contact form. Your feedback, questions, and suggestions are important to us."}</p>
                <ul>
                    <li><img src={mail_icon} alt="" />rglo210933@upemor.edu.mx</li>
                    <li><img src={phone_icon} alt="" />+52 777-990-4960</li>
                    <li> <img src={location_icon} alt="" />Boulevard Cuauhnáhuac #566, Col. Lomas del Texcal, Jiutepec<br /> {language === "es" ? "Código postal 62550, Morelos, México" : "Postal code 62550, Morelos, Mexico"}</li>
                </ul>
            </div>
            <div className="contacto-col">
                <form onSubmit={onSubmit}>
                    <label>
                        {language === "es" ? "Nombre:" : "Name:"}
                    </label>
                    <input type="text" name="nombre" placeholder={language === "es" ? "Ingresa tu nombre" : "Enter your name"} required />
                    <label>
                        {language === "es" ? "Teléfono:" : "Phone:"}
                    </label>
                    <input type="tel" name="telefono" placeholder={language === "es" ? "Ingresa tu número de teléfono" : "Enter your phone number"} required />
                    <label>
                        {language === "es" ? "Escribe tu mensaje:" : "Write your message:"}
                    </label>
                    <textarea name="mensaje" rows="6" placeholder={language === "es" ? "Ingresa tu mensaje aquí" : "Enter your message here"} required></textarea>
                    <button type="submit" className="btn">{language === "es" ? "¡Enviar ahora!" : "Send Now!"}</button>
                    <span>
                        {result}
                    </span>
                </form>
            </div>
        </div>
    );
}

export default Contacto;
