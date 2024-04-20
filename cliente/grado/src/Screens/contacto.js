import React from "react";
import './estilosscreens.css'

const Contacto =() =>{
    return (
        <div>
           
         <h3>
            Buenaaass

            Información de contacto..

            Ingrese la información del formulario y prontamente nos estaremos comunicando con usted para enverle toda la información
        </h3>

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