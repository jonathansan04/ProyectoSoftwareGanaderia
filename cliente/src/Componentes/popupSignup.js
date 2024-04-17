import './styles/popupForm.css';
import { post } from '../Suports/rest';

export default function PopupSignup() {
  let hide = (e) => e.target.classList.contains('popup') && document.getElementById("popsignup").classList.add('hide'),
    submit = async (e) => {
      e.preventDefault();
      let $form = e.target.parentElement,
        data = Object.fromEntries(new FormData($form)),
        response = await post('/Usuario', data);
      console.log(response);
    }

  return (
    <div id="popsignup" className="popup hide" onClick={hide}>
      <div className="wrapper">
        <form>
          <h2>Registrarse</h2>
          <div className="form-element">
            <label htmlFor="nombre">Nombre</label>
            <input type="text" id="nombre" name="nombre" placeholder="Ingresar Nombre" />
          </div>
          <div className="form-element">
            <label htmlFor="apellido">Apellido</label>
            <input type="text" id="apellido" name="apellido" placeholder="Ingresar Apellido" />
          </div>
          <div className="form-element">
            <label htmlFor="celular">Celular</label>
            <input type="text" id="celular" name="celular" placeholder="Ingresar numero de celular" />
          </div>
          <div className="form-element">
            <label htmlFor="tipoid">Tipo de ID</label>
            <select id="tipoid" name="tipoid">
              <option > </option>
              <option value="Cedula de ciudadania">Cedula de ciudadania</option>
              <option value="Cedula de extranjeria">Cedula de extranjeria</option>
            </select>
          </div>
          <div className="form-element">
            <label htmlFor="numeroid">Número ID</label>
            <input type="text" id="numeroid" name="numeroid" placeholder="Ingresar número ID" />
          </div>
          <div className="form-element">
            <label htmlFor="correo">Email</label>
            <input type="text" id="correo" name="correo" placeholder="Ingresar Email" />
          </div>
          <div className="form-element">
            <label htmlFor="contraseña">Contraseña</label>
            <input type="password" id="contraseña" name="contraseña" placeholder="Ingresar contraseña" />
          </div>
          <button type="submit" onClick={submit}>Aceptar</button>
        </form>
      </div>
    </div>
  )
}