import React from "react";
import { Route, Routes } from "react-router-dom";
import Contact from "./Screens/contacto";
import Funcion from "./Screens/funcion";
import Quienes from "./Screens/quienes";
import Inicio from "./Screens/inicio";
import Publicidad from "./Screens/publicidad";
import PopupSignup from "./Componentes/popupSignup";
import PopupSignin from "./Componentes/popupSignin";
import NavBar from "./Componentes/navBar";
import './Todo.css';
import Home from "./Screens/home";
import Auth from "./Suports/auth";
import logo from "./Screens/Imagesscreen/logoprueba.jpg";

function App() {
  let show = (id) => document.getElementById(id).classList.remove('hide');

  return (
    <div className="App">
      <div >
        <div className="row">
          <div className="titulo">

            <h1>Software ganadero</h1>

          </div>
          <PopupSignup />
          <PopupSignin />
        </div>
      </div>

      <div className="sign">
        <button id="btnsignup" onClick={() => show("popsignup")}>Sign up</button>
        <button id="btnsignin" onClick={() => show("popsignin")}>Sign in</button>
      </div >

      <h3 className="slogan">Lleva la mejor solución para el manejo de tú ganaderia</h3>
      
      <div >
          <nav className="navv">
            <button className="nav-boton" >Menú</button>
            <NavBar />
          </nav>
          <Routes>
            <Route path="/inicio" element={<Inicio />} />
            <Route path="/funcion" element={<Funcion />} />
            <Route path="/quienes" element={<Quienes />} />
            <Route path="/publicidad" element={<Publicidad />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/" element={<Auth><Home /></Auth>} />
          </Routes>
      </div>
      

      <footer className="piepagina">
        <div className="divpie">
          <div className="box">
            <figure>
            <img src={logo}  alt="Logo"/>
            </figure>
          </div>
          <div className="box">
            <h2>SOBRE NOSOTROS</h2>
            <p>Jonathan Santos Cel. 3052518319</p>
            <p>jasantoss@udistrital.edu.co</p>
            <p>Johan Cortez Cel. 3013560782     </p>
            <p>jdcortezg@udistrital.edu.co</p>
          </div>
          <div className="box">
          <h2>SIGUENOS</h2>
          <div className="redes">


          </div>
          </div>

        </div>
        <div className="divpagina">
          <small>&copy; 2024 <b>BOVISOFT J&J S.A.S</b> - Todos los Derechos Reservados</small>


        </div>
      </footer>

    </div>
  );
}

export default App;