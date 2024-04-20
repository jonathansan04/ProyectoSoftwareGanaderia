import React, {useState} from "react";
import { Link } from "react-router-dom";
import './navBar.css'

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
    const [isOpen, setIsOpen]= useState(false)
    return (
        
        <div className="navbar">
        <div className="nav_logo">BOVISOFT J&J S.A.S</div>
        <div className={`nav_items ${isOpen && "open"}`}>
            { links.map((X,i) =>(
            <Link key={i} to={X.href}>
            {X.name}
            </Link>
            ))
            }
        </div>
        <div className={`nav_toggle ${isOpen && "open"}`} onClick={ ()=>setIsOpen(!isOpen)}>
            <span> </span>
            <span> </span>
            <span> </span>
            
            </div>
        </div>

  
    );
   
};
export default NavBar;