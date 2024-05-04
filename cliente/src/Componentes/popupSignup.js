import './styles/popupForm.css';
import { post } from '../Suports/rest';

export default function PopupSignup() {
  let hide = (e) => e.target.classList.contains('popup') && document.getElementById("popsignup").classList.add('hide'),
    submit = async (e) => {
      e.preventDefault();
      let $form = e.target.parentElement,
        data = Object.fromEntries(new FormData($form)),
        response = await post('/Usuario', data);
        console.log(data);
      console.log(response);
    }

  return (
    <div id="popsignup" className="popup hide" onClick={hide}>
      <div className="wrapper">
        <form className='formpopup'>
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
            <label htmlFor="tipo_id">Tipo de ID</label>
            <select defaultValue={""} id="tipo_id" name="tipo_id">
              <option value="CC">Cedula de ciudadania</option>
              <option value="CE">Cedula de extranjeria</option>
            </select>
          </div>
          <div className="form-element">
            <label htmlFor="numero_id">Número ID</label>
            <input type="text" id="numero_id" name="numero_id" placeholder="Ingresar número ID" />
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