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
            <input type="text" id="nombre" name="nombre" placeholder="Ingresar Nombre" maxLength={50} />
          </div>
          <div className="form-element">
            <label htmlFor="apellido">Apellido</label>
            <input type="text" id="apellido" name="apellido" placeholder="Ingresar Apellido" maxLength={50}/>
          </div>
          <div className="form-element">
            <label htmlFor="celular">Celular</label>
            <input type="text" id="celular" name="celular" placeholder="Ingresar numero de celular" maxLength={15} />
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
            <input type="text" id="numero_id" name="numero_id" placeholder="Ingresar número ID" maxLength={20} />
          </div>
          <div className="form-element">
            <label htmlFor="ucorreo">Email</label>
            <input type="text" id="ucorreo" name="correo" placeholder="Ingresar Email" maxLength={50} />
          </div>
          <div className="form-element">
            <label htmlFor="ucontraseña">Contraseña</label>
            <input type="password" id="ucontraseña" name="contraseña" placeholder="Ingresar contraseña" minLength={4} maxLength={50} />
          </div>
          <button className='submit' type="submit" onClick={submit}>Aceptar</button>
        </form>
      </div>
    </div>
  )
}