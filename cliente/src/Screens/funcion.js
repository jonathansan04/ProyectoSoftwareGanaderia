import React from "react";
import './estilosscreens.css'


const Funcion =() =>{
    return (
        <div>
           
         <h3>
           ¿Comó funciona?
        </h3>

        <p> Lo primero que debes hacer para poder disfrutar del software es contactarte con los propietarios del software, en la pestaña de conctactos, 
            para adquirir el pin con el que se podra registrar.
            
        </p>

        <p>
            Despues de adquirir el pin, usted se podra registrar, digitando cada uno de los datos que se piden en el formulario, verificara en su correo electronico el registro exitoso.
        </p>
        
        <p>
            Con el registro exitoso podra iniciar sesión y disfrutar de las diferentes funcionalidades del aplicativo.
        </p>

        <p>
            Para efectuar un óptimo funcionamiento, primero debe crear una finca, con los datos que el formulario requiere.
    
        </p>
            
        <p>
        Despues de crear la finca podemos dar uso a los distintos items que nos ofrece el aplicativo, como el registro de animales, registro de potreros, producción de leche...
        </p>
        <label className="funlabel">Preguntas</label>
        <br>
        </br>
        <input className="funcioninput" type="text"></input>

        <button className="funcboton" type="submit">Enviar</button>
        </div>
    )
    
}

export default Funcion