import React from "react";
import {Route, BrowserRouter as Router, Routes} from "react-router-dom";
import NavBar from "./Componentes/NavBar";
import Contact from "./Screens/Contacto";
import Inicio from "./Screens/Inicio";
import Funcion from "./Screens/Funcion";
import Quienes from "./Screens/Quienes";
import './Componentes/Todo.css';
import Publicidad from "./Screens/Publicidad";



function App() {

  return (
    <div className="App">
      <div>
      
      <div>
        <div >  
          <div className="row">
          <div className="container mt-5">
       
            <h1>Software ganadero</h1>
           
           </div>
            <div className="Cabecera-ubi">
            <table>
            <tr>
              <td>
              <label>Usuario:</label> <br></br>
              <label>Contraseña:</label>
              </td>
              <td>
              <input className='Cabecera-input'  id="inputcontra" />
              
              <input  className='Cabecera-input' type="password" id="inputusuario" />
            
              </td>
              <td>
                <a href="http://localhost:3000/registrar" target="_parent">
                <button className="Cabecera-botom" >Iniciar sesion </button>
                </a>
              
              
              <button id="show-login" className="Cabecera-botom" >Registrarse </button>
              
            
              </td>
            </tr>

            </table>    
           
            </div>
          </div>
           </div>
           </div>
     
      </div>
      

      <h3>LLeva la mejor solución para el manejo de tú ganaderia</h3>
      <div>
      <Router>
      <NavBar/>
      
      <Routes>
        
        <Route path="/home" element={<Inicio/>}/>
        
        <Route path="funcion" element={< Funcion/>}/>

        <Route path="/quienes" element={<Quienes/>}/>
        
        <Route path="/publicidad" element={< Publicidad/>}/>

        <Route path="/contact" element={< Contact/>}/>
       
      </Routes>
      </Router>
      </div>
    </div>
      
      
   


  );
}

export default App;