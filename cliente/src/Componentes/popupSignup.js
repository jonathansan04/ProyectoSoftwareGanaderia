import './styles/popupForm.css';

export default function PopupSignup() {
    let hide = (e) => e.target.classList.contains('popup') && document.getElementById("popsignup").classList.add('hide');

    return (
        <div id="popsignup" className="popupregis hide" onClick={hide}>
            <div className="wrapper">
                <h2>Registrarse</h2>
                <form>
                <div className="form-element">
                  <label for="nombre">Nombre</label>
                  <input type="text" id="nombre" placeholder="Ingresar Nombre"/>
                </div>
                <div className="form-element">
                  <label for="apellido">Apellido</label>
                  <input type="text" id="apellido" placeholder="Ingresar Apellido"/>
                </div>
                <div className="form-element">
                  <label for="celular">Celular</label>
                  <input type="text" id="celular" placeholder="Ingresar numero de celular"/>
                </div>
                <div className="form-element">
                  <label for="tipoidentidad">Tipo de ID</label>
                  <select for="tipoid" id="tipoid">
                    <option >Escoger tipo de ID</option>
                    <option value="Cedula de ciudadania">Cedula de ciudadania</option>
                    <option value="Cedula de extranjeria">Cedula de extranjeria</option>
                    
                  </select>
                </div>
                <div className="form-element">
                  <label for="numidentidad">Número ID</label>
                  <input type="text" id="numidentidad" placeholder="Ingresar número ID"/>
                </div>
                <div className="form-element">
                  <label for="email">Email</label>
                  <input type="text" id="email" placeholder="Ingresar Email"/>
                </div>
                <div className="form-element">
                  <label for="contrasena">Contraseña</label>
                  <input type="text" id="contrasena" placeholder="Ingresar contraseña"/>
                </div>
                    <button type="submit">Aceptar</button>
                </form>
            </div>
        </div>
    )
}