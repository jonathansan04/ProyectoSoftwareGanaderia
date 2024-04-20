import React from "react";
import './estilosscreens.css'

const Quienes =() =>{
    return (
        <div>
           
         <article className="articuloquienes textocentro">
         <h3 className="titulos">
            ¿Quienes somos?
        </h3>

        <p>
            Somos una empresa dedicada y especializada en la mejora de las ganaderías de Colombia, BOVISOFT J&J S.A.S busca mejorar el manejo de la información y optimización de los diferentes procesos de las fincas ganaderas.
        </p>
         </article>

        <section className="sectionquienesmis textocentro ">
        <div className="quienesmis">
            <h6 className="titulos">
            Misión
            </h6>
            <p>
            Brindar una solución innovadora a la hora del manejo de bovinos y diferentes ganaderías, por lo que buscamos impulsar el manejo, productividad y sostenibilidad de las fincas ganaderas. Por ende, buscamos dar soluciones radicales y tecnológicas al manejo y la eficiencia operativa e informativa de cada uno de los animales que pertenecen a la finca, con lo que se conseguirá mejoras a nivel económico, operativo y minimizando el impacto ambiental, siendo amigables y dando solución a una necesidad de los productores, como poder estar en contacto y en supervisión de la ganadería desde cualquier lugar del mundo. 
            </p>
        </div>

        <div className="quienesmis">
            <h6 className="titulos">
            Visión
            </h6>
            <p>
            Para el 2027 esperamos ser reconocidos a nivel nacional e internacional en el sector ganadero como los lideres en la transformación y mejoras en el manejo de la información y los procesos de fincas ganaderas, con el ideal de poder correlacionar diferentes fincas para lograr una mejora en la genética de los animales, así mismo permitir al dueño tener primero que todo una finca que apoye la salud del planeta y pueda ser manejada desde cualquier lugar donde se encuentre.
            </p>
        </div>
        </section>
        
        </div>
    )
    
}

export default Quienes