import './styles/popupForm.css';
import { post } from '../Suports/rest';

export default function PopupSignup() {
  let hide = (e) => e.target.classList.contains('popup') && document.getElementById("popsignin").classList.add('hide'),
    submit = async (e) => {
      e.preventDefault();
      let $form = e.target.parentElement,
        data = Object.fromEntries(new FormData($form)),
        response = await post('/Login', data);
      console.log(response);
      alert(response.message);
    };

  return (
    <div id="popsignin" className="popup hide" onClick={hide}>
      <div className="wrapper">
        <form>
          <h2>Iniciar sesion</h2>
          <div className="form-element">
            <label for="correo">Email</label>
            <input type="text" id="correo" name="correo" placeholder="Ingresar Email" />
          </div>
          <div className="form-element">
            <label for="contraseña">Password</label>
            <input type="password" id="contraseña" name="contraseña" placeholder="Ingresar contraseña" />
          </div>
          <div className="form-element">
            <input type="checkbox" id="remember-me" />
            <label for="remember-me">Recordar</label>
          </div>
          <button type='submit' onClick={submit}>Iniciar</button>
        </form>
      </div>
    </div>
  )
}