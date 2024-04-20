import React, {useState}from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Contact from "./Screens/contacto";
import Inicio from "./Screens/inicio";
import Funcion from "./Screens/funcion";
import Quienes from "./Screens/quienes";
import Publicidad from "./Screens/publicidad";
import PopupSignup from "./Componentes/popupSignup";
import PopupSignin from "./Componentes/popupSignin";
import NavBar from "./Componentes/navBar";
import './Todo.css';


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

      <h3 className="slogan">LLeva la mejor solución para el manejo de tú ganaderia</h3>
      <div >
        <Router >
          <nav className="navv">

          <NavBar />

          </nav>

          

          <Routes>
            
            <Route path="/home" element={<Inicio />} />

            <Route path="funcion" element={< Funcion />} />

            <Route path="/quienes" element={<Quienes />} />

            <Route path="/publicidad" element={< Publicidad />} />

            <Route path="/contact" element={< Contact />} />

          </Routes>
        </Router>
      </div>

      <footer className="piepagina">
        <div className="divpie">
          <div className="box">
            <h3>GANASOFT J&J S.A.S</h3>
          </div>
          <div className="box">
            <h2>SOBRE NOSOTROS</h2>
            <p>Jonathan Santos Cel. 3052518319</p>
            <p>Johan Cortez Cel. </p>
          </div>
          <div className="box">
          <h2>SIGUENOS</h2>
          <div className="redes">
            <a href="#" className="fa fa-instagram"></a>


          </div>
          </div>

        </div>
        <div className="divpagina">
          <small>&copy; 2024 <b>GANASOFT J&J S.A.S</b> - Todos los Derechos Reservados</small>


        </div>
      </footer>
   
    </div>





  );
}

export default App;