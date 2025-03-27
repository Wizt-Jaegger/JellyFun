import React from 'react';
import { useLanguage } from "../../LanguageContext"; 
import styled from 'styled-components'; 

const TermsConditions = () => {
    const { language } = useLanguage(); 
    return (
        <TermsContainer>
            <h1>
                {language === "es" ? "TÉRMINOS Y CONDICIONES DE USO" : "TERMS AND CONDITIONS"}
            </h1>
            <h2>{language === "es" ? "INFORMACIÓN RELEVANTE" : "RELEVANT INFORMATION"}</h2>
            <p>
                {language === "es" ? 
                    "Es requisito necesario para la adquisición de los productos que se ofrecen en este sitio, que lea y acepte los siguientes Términos y Condiciones. El uso de nuestros servicios y la compra de nuestros productos implicará que usted ha leído y aceptado los Términos y Condiciones de Uso. Todas los productos ofrecidos por nuestro sitio web pudieran ser creados, cobrados, enviados o presentados por una página web tercera y estarían sujetas a sus propios Términos y Condiciones. En algunos casos, para adquirir un producto, será necesario el registro por parte del usuario con datos personales fidedignos y definición de una contraseña." :
                    "It is a requirement to read and accept the following Terms and Conditions to acquire the products offered on this site. The use of our services and the purchase of our products implies that you have read and accepted the Terms and Conditions. All products offered by our website may be created, charged, shipped, or presented by a third-party website and would be subject to their own Terms and Conditions. In some cases, to acquire a product, user registration with truthful personal data and password definition will be necessary."
                }
            </p>
            <h2>{language === "es" ? "LICENCIA" : "LICENSE"}</h2>
            <p>
                {language === "es" ? 
                    "JellyFun Inc. a través de su sitio web concede una licencia para que los usuarios utilicen los productos vendidos en este sitio de acuerdo a los Términos y Condiciones aquí descritos." :
                    "JellyFun Inc. through its website grants a license for users to use the products sold on this site in accordance with the Terms and Conditions described herein."
                }
            </p>
            <h2>{language === "es" ? "USO NO AUTORIZADO" : "UNAUTHORIZED USE"}</h2>
            <p>
                {language === "es" ? 
                    "En caso de que aplique (para la venta de software, plantillas u otros productos de diseño y programación), usted no puede colocar uno de nuestros productos, modificado o sin modificar, en un CD, sitio web o cualquier otro medio y ofrecerlos para redistribución o reventa de ningún tipo." :
                    "If applicable (for the sale of software, templates, or other design and programming products), you may not place any of our products, modified or unmodified, on a CD, website, or any other medium and offer them for redistribution or resale of any kind."
                }
            </p>
            <h2>{language === "es" ? "PROPIEDAD" : "PROPERTY"}</h2>
            <p>
                {language === "es" ? 
                    "Usted no puede declarar propiedad intelectual o exclusiva sobre ninguno de nuestros productos, modificados o sin modificar. Todos los productos son propiedad de los proveedores del contenido. Salvo que se especifique lo contrario, nuestros productos se proporcionan sin garantía expresa o implícita. En ningún caso esta compañía será responsable de daños, incluyendo, pero no limitado a, daños directos, indirectos, especiales, fortuitos o consecuentes derivados del uso o imposibilidad de uso de nuestros productos." :
                    "You may not claim intellectual or exclusive ownership of any of our products, modified or unmodified. All products are the property of the content providers. Unless otherwise specified, our products are provided without express or implied warranty. In no event shall this company be liable for damages, including but not limited to, direct, indirect, special, incidental, or consequential damages arising from the use or inability to use our products."
                }
            </p>
            <h2>{language === "es" ? "POLÍTICA DE REEMBOLSO Y GARANTÍA" : "REFUND AND WARRANTY POLICY"}</h2>
            <p>
                {language === "es" ? 
                    "En el caso de productos que sean mercancías irrevocables no tangibles, no realizamos reembolsos después de que se envíe el producto. Usted tiene la responsabilidad de entender esto antes de comprarlo. Le pedimos que lea cuidadosamente antes de realizar la compra. Hacemos excepciones cuando la descripción no se ajusta al producto. Algunos productos pueden tener garantía y posibilidad de reembolso, lo cual se especificará al momento de la compra." :
                    "In the case of irrevocable non-tangible goods, we do not offer refunds after the product is sent. You are responsible for understanding this before making a purchase. We ask that you read carefully before purchasing. Exceptions are made when the description does not match the product. Some products may have a warranty and refund possibility, which will be specified at the time of purchase."
                }
            </p>
        </TermsContainer>
    );
};

const TermsContainer = styled.div`
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

export default TermsConditions;
