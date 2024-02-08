import React from "react";
import { Link } from "react-router-dom";

const links = [
    {
        name:"Inicio",
        href: "/home",
    },
    {
        name:"¿Como funciona?",
        href:"/funcion",
    },
    {
        name:"¿Quienes somos?",
        href:"/quienes",
    },

    {
        name:"Publicidad",
        href:"/publicidad",
    },
    {
        name:"Contacto",
        href:"/contact",
    },
    
    
   
];

const NavBar =() =>{
    return (
        <div className="Cabecera">

        { links.map((X,i) =>(
                <Link key={i} to={X.href}>
                {X.name}
                </Link>
            ))
        }
    </div>
    );
   
};
export default NavBar;