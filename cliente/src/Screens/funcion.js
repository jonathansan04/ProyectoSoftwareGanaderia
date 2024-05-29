import React, {useRef} from "react";
import './estilosscreens.css'
import emailjs from '@emailjs/browser';

const Funcion =() =>{
   const refForm = useRef();

    const handleSubmit = (event) =>{
        event.preventDefault();
      
        const serviceID= "service_5mjq5vl";
        const templateID= "template_7xr9qzm";
        const apikey= "nUrK1tnAE_Fd-C5-G";

        emailjs.sendForm(serviceID, templateID, refForm.current, apikey)
        .then(result =>console.log(result.text))
        .catch(error => console.error(error))

        alert("Mensaje enviado");
    }
    return (
        <div>
           
        <section className="sectionfuncion textocentro  ">
        <div className="cuadrofuncion">
        <h3 className="titulos">
           ¿Comó funciona?
        </h3>

        <p> Lo primero que debes hacer para poder disfrutar del software es contactarte con los propietarios del software, en la pestaña de contactos, 
            para adquirir el pin con el que se podra registrar.   
        </p>
           </div>
        </section>

        <section className="sectionprecios textocentro  ">
        <div className="cuadroinicio">
        <h3 className="titulos">
           Precios
        </h3>

        <p> 
           Para adquirir el software este comprende 2 planes: <br></br>
           <b>Plan de prueba</b> Podra ver el funcionamiento del software, sin poder acceder a todos los beneficios presentes  <br></br>
           <b>Plan oro</b> Tiene un costo de $100.000 mensuales, en los que podra disfrutar de todos los beneficios que BOVISOFT J%J S.A.S le ofrece  <br></br>

           Si desea aparecer en nuestro directorio de servicios, debe enviarnos los siguientes datos: 
        Nombre, Logo, Descripción, Servicios, Lugar, Contacto  
            <br></br>
        El plan del directorio de servicios tiene un valor de $50.000 mensuales 
        </p>
           </div>
        </section>
        
        <section className="sectionquehacer textocentro  ">
        <div className="cuadroinicio">
        <h3 className="titulos">
           ¿Qué debo hacer después de adquirir el plan?
        </h3>

        <p> Tras adquirir el pin, usted se podrá registrar, digitando los datos solicitados en el formulario, verificará en su correo el registro exitoso y después puede realizar el inicio de sesión.  
        </p>
           </div>

           <div className="cuadroinicio">
            <h3 className="titulos">¿Qué debo hacer al ingresar al aplicativo?
            </h3>
            <p>Para efectuar un óptimo funcionamiento, la primera vez que ingrese, primero debe crear una finca, con los datos que el formulario requiere.</p>

           </div>

           <div className="cuadroinicio">
            <h3 className="titulos">
                ¿Que funcionalidades puedo encontrar?
            </h3>

            <p>
        Despues de crear la finca podemos dar uso a los distintos items que nos ofrece el aplicativo, como el registro de animales, registro de potreros, producción de leche y registros de ventas.
        </p>

           </div>
        </section>


        <section className="sectionfunciona textocentro  ">
        <div className="cuadrofunciona">
        <p>
        Si tienes alguna inquietud, puedes dejarla en el siguiente formulario y prontamente te daremos respuesta. 
        </p>
           </div>
        </section>
            
        <br></br>

        <form className="form" ref={refForm} action="" onSubmit={handleSubmit}>
        <div className="formcont">
            <h3 className="formtitulo titulos">Preguntas</h3>     
            <input type="text" className="funcioninput" placeholder="Nombre" id="username" name="username" required></input>
            <textarea maxLength={400} className="funcioninput funcioninput--message" placeholder="Mensaje" name="message" id="message" required></textarea>
            
            <input type="submit" value="Enviar" className="formboton"></input>


        </div>
        </form>
       
        </div>
    )
    
}

export default Funcion