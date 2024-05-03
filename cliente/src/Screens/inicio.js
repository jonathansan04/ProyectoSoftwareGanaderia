import React from "react";
import './estilosscreens.css'
import imagen1 from "./Imagesscreen/imagenslider2a.jpg"
import imagen2 from "./Imagesscreen/imagenslider3a.jpg"
import imagen3 from "./Imagesscreen/imagenprueba3.jpg"

const Inicio =() =>{
   

   
    return (
        <div>
        
        <div>
        <div>
        <section className="sectioncuadro textocentro  ">
        <div className="cuadroinicio">
            <h6 className="titulos">
            ¿Tiene problemas para manejar la información de su ganadería?
            </h6>
            <p>
            En el manejo de las ganaderías, sin importar el propósito o las razas, se deben manejar diferentes procesos e información que usualmente se llevan en papel, por lo que, a lo largo, puede existir perdidas o daño de información, por ende, BOVISOFT J&J S.A.S le brinda la solución adecuada, sin importar si apenas inicia con la ganadería o si lleva varios años, este software le permitirá llevar el registro de cada uno de los potreros y animales, además de procesos que se manejen, sin importar la raza de su ganado o su utilidad, ya sea para carne, leche o doble propósito.             </p>
        </div>
        </section>
            

        </div>

        <div>
        <section id="gallery">
        <div class="gallery-container">
        <figure class="gallery-item">
        <img src={imagen2}  alt="Imagen 1"/>
            
        </figure>
        <figure class="gallery-item">
        <img src={imagen1}  alt="Imagen 2"/>

        </figure>
        <figure class="gallery-item">
        <img src={imagen3}  alt="Imagen 3"/>

        </figure>
    </div>
    <nav class="gallery-navigation">
        <button class="nav-button prev-button"><span>&#60;</span></button>
        <button class="nav-button next-button"><span>&#62;</span></button>
    </nav>
    </section>
    </div>

    </div>
      
        </div>
    )
    
}

export default Inicio

