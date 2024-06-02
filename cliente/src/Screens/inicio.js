import React, { useState, useEffect } from "react";
import './estilosscreens.css'
import imagen1 from "../img/screen/imagenslider2a.jpg";
import imagen2 from "../img/screen/imagenslider3a.jpg"
import imagen3 from "../img/screen/imagenprueba3.jpg"

const Inicio =() =>{
   
        const [currentIndex, setCurrentIndex] = useState(0);
        const totalImages = document.querySelectorAll('.gallery-item').length;
    
        const navigate = (direction) => {
            setCurrentIndex((prevIndex) => (prevIndex + direction + totalImages) % totalImages);
        };
    
        useEffect(() => {
            const galleryContainer = document.querySelector('.gallery-container');
            const offset = -currentIndex * 100;
            galleryContainer.style.transform = `translateX(${offset}%)`;
        }, [currentIndex]);
    
        let autoplayInterval = null;
    
        const startAutoplay = (interval) => {
            stopAutoplay();
            autoplayInterval = setInterval(() => {
                navigate(1);
            }, interval);
        };
    
        const stopAutoplay = () => {
            clearInterval(autoplayInterval);
        };
    
        useEffect(() => {
            startAutoplay(3000);
            return () => stopAutoplay();
        }, []);
    
    return (
        <div>
        
        <div>
        <div>
        <section className="sectioncuadro textocentro  ">
        <div className="cuadroinicios">
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
        <div className="gallery-container">
        <figure className="gallery-item">
        <img src={imagen2}  alt="Imagen 1"/>
            
        </figure>
        <figure className="gallery-item">
        <img src={imagen1}  alt="Imagen 2"/>

        </figure>
        <figure className="gallery-item">
        <img src={imagen3}  alt="Imagen 3"/>

        </figure>
    </div>
    <nav className="gallery-navigation">
        <button className="nav-button prev-button" onClick={() => navigate(-1)}><span>&#60;</span></button>
        <button className="nav-button prev-button" onClick={() => navigate(1)}><span>&#62;</span></button>
     
    </nav>
    </section>
    </div>

    </div>
      
        </div>
    )
    
}

export default Inicio

