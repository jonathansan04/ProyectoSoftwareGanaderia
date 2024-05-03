import React from "react";
import './estilosscreens.css'

const Contacto =() =>{
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

       

        <form className="form">
        <div className="formcont">
            <h3 className="formtitulo">Contactenos</h3>     
            <input type="text" className="funcioninput" placeholder="Nombre"></input>
            <input type="email" className="funcioninput" placeholder="Email"></input>
            <input  className="funcioninput" placeholder="Celular"></input>

            <textarea className="funcioninput funcioninput--message" placeholder="Mensaje"></textarea>
            
            <input type="submit" value="Enviar" className="formboton"></input>


        </div>
        </form>
        </div>
    )
    
}

export default Contacto