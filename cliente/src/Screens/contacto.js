import React, {useRef} from "react";
import './estilosscreens.css';
import emailjs from '@emailjs/browser';

const Contacto =() =>{

    const refForm = useRef();

    const handleSubmit = (event) =>{
        event.preventDefault();
      
        const serviceID= "service_5mjq5vl";
        const templateID= "template_g7ytd2c";
        const apikey= "nUrK1tnAE_Fd-C5-G";

        emailjs.sendForm(serviceID, templateID, refForm.current, apikey)
        .then(result =>console.log(result.text))
        .catch(error => console.error(error))

        alert("Mensaje Enviado");
    }
    
    return (
        <div>
         
        <section className="sectioncontacto textocentro  ">
        <div className="cuadrocontacto">
            <h6 className="titulos">
            CONTACTENOS...
            </h6>
            <p>
            Si desea obtener más información de como aparecer en nuestro directorio de servicios o si desea adquirir las funcionalidades de nuestro software ganadero y tiene alguna duda, llena el siguiente formulario y nos estaremos comunicando.             </p>
        </div>
        </section>

       

        <form className="form" ref={refForm} action="" onSubmit={handleSubmit}>
        <div className="formcont">
            <h3 className="formtitulo">Contactenos</h3>     
            <input type="text" className="funcioninput" placeholder="Nombre" name="username" id="username" required></input>
            <input type="email" className="funcioninput" placeholder="Email" name="email" id="email" required></input>
            <input name="celular" id="celular" className="funcioninput" placeholder="Celular" required></input>

            <textarea maxLength={400} className="funcioninput funcioninput--message" placeholder="Mensaje" name="message" id="message" required></textarea>
            
            <input type="submit" value="Enviar" className="formboton"></input>


        </div>
        </form>
        </div>
    )
    
}

export default Contacto