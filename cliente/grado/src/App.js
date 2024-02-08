import React from "react";
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
          <div className="container mt-5">

            <h1>Software ganadero</h1>

          </div>
          <PopupSignup />
          <PopupSignin />
        </div>
      </div>

      <div className="sign">
        <button id="btnsignup" onClick={() => show("popsignup")}>Sign up</button>
        <button id="btnsignin" onClick={() => show("popsignin")}>Sign in</button>
      </div>

      <h3>LLeva la mejor solución para el manejo de tú ganaderia</h3>
      <div>
        <Router>

          <NavBar />

          <Routes>

            <Route path="/home" element={<Inicio />} />

            <Route path="funcion" element={< Funcion />} />

            <Route path="/quienes" element={<Quienes />} />

            <Route path="/publicidad" element={< Publicidad />} />

            <Route path="/contact" element={< Contact />} />

          </Routes>
        </Router>
      </div>
    </div>





  );
}

export default App;