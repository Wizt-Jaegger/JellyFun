import React from "react";
import { useLanguage } from "../../LanguageContext";
import styled from "styled-components";

const PrivacyPolicy = () => {
    const { language } = useLanguage();

    return (
        <PrivacyContainer>
            <h1>
                {language === "es" ? "POLÍTICA DE PRIVACIDAD" : "PRIVACY POLICY"}
            </h1>
            <p>
                {language === "es" 
                    ? "La presente Política de Privacidad establece los términos en que JellyFu Inc. usa y protege la información que es proporcionada por sus usuarios al utilizar su sitio web. Estamos comprometidos con la seguridad de los datos de nuestros usuarios. Cuando solicitamos información personal que pueda identificarlo, garantizamos que será utilizada de acuerdo con los términos de este documento. Sin embargo, esta Política de Privacidad puede cambiar con el tiempo, por lo que recomendamos revisar esta página regularmente para asegurarse de estar de acuerdo con los cambios." 
                    : "This Privacy Policy establishes the terms under which JellyFu Inc. uses and protects the information provided by its users when using its website. We are committed to ensuring the security of user data. When we request personal information that may identify you, we guarantee that it will be used in accordance with the terms of this document. However, this Privacy Policy may change over time, so we recommend checking this page regularly to ensure that you agree with any updates."
                }
            </p>

            <h2>{language === "es" ? "Información que es recogida" : "Information Collected"}</h2>
            <p>
                {language === "es" 
                    ? "Podemos recopilar información personal como: nombre, dirección de correo electrónico e información demográfica. También podemos solicitar información específica para procesar pedidos o facturación." 
                    : "We may collect personal information such as: name, email address, and demographic information. We may also request specific information to process orders or billing."
                }
            </p>

            <h2>{language === "es" ? "Uso de la información recogida" : "Use of Collected Information"}</h2>
            <p>
                {language === "es" 
                    ? "Usamos la información para mejorar nuestros servicios, mantener registros de usuarios y, en algunos casos, enviar correos electrónicos con ofertas especiales o información relevante. Estos correos pueden ser cancelados en cualquier momento." 
                    : "We use the information to improve our services, maintain user records, and, in some cases, send emails with special offers or relevant information. These emails can be unsubscribed from at any time."
                }
            </p>

            <h2>Cookies</h2>
            <p>
                {language === "es" 
                    ? "Nuestro sitio web utiliza cookies para mejorar la experiencia del usuario. Puede aceptar o rechazar el uso de cookies en la configuración de su navegador." 
                    : "Our website uses cookies to enhance the user experience. You can accept or decline the use of cookies in your browser settings."
                }
            </p>

            <h2>{language === "es" ? "Enlaces a terceros" : "Links to Third Parties"}</h2>
            <p>
                {language === "es" 
                    ? "Este sitio web puede contener enlaces a otros sitios. No somos responsables de sus políticas de privacidad, por lo que le recomendamos revisarlas antes de proporcionar información personal." 
                    : "This website may contain links to other sites. We are not responsible for their privacy policies, so we recommend reviewing them before providing personal information."
                }
            </p>

            <h2>{language === "es" ? "Control de su información personal" : "Control of Your Personal Information"}</h2>
            <p>
                {language === "es" 
                    ? "Puede restringir la recopilación o uso de su información en cualquier momento. JellyFu Inc. no venderá ni distribuirá su información sin su consentimiento, salvo requerimiento legal." 
                    : "You can restrict the collection or use of your information at any time. JellyFu Inc. will not sell or distribute your information without your consent, except as required by law."
                }
            </p>

            <p>
                {language === "es" 
                    ? "JellyFu Inc. se reserva el derecho de modificar esta Política de Privacidad en cualquier momento." 
                    : "JellyFu Inc. reserves the right to modify this Privacy Policy at any time."
                }
            </p>
        </PrivacyContainer>
    );
};

// 📌 Estilos con styled-components
const PrivacyContainer = styled.div`
    margin: 20px;
    padding: 30px;
    background-color: rgba(255, 255, 255, 0.7);
    border-radius: 15px;
    font-size: 1.2rem;
    line-height: 1.7;
    color: #333;

    h1 {
        text-align: center;
        color: #132d46;
        margin-bottom: 20px;
        font-size: 2.5rem;
    }

    h2 {
        color: #01c38e;
        margin-bottom: 15px;
        font-size: 1.8rem;
    }

    p {
        color: #666;
        margin-bottom: 20px; 
        font-size: 1.1rem;
    }

    a {
        color: #01c38e;
        text-decoration: none;
    }

    a:hover {
        text-decoration: underline;
    }
`;

export default PrivacyPolicy;
