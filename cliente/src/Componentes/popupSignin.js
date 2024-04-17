import './styles/popupForm.css';
import { post } from '../Suports/rest';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

export default function PopupSignup() {
  const navigate = useNavigate();
  const [showerror, setShowerror] = useState(null);
  let hide = (e) => e.target.classList.contains('popup') && document.getElementById("popsignin").classList.add('hide'),
    submit = async (e) => {
      e.preventDefault();
      let $form = e.target.parentElement,
        data = Object.fromEntries(new FormData($form)),
        response = await post('/Login', data);
      if (response.success) {
        localStorage.setItem('Sessionid', response.id);
        setShowerror(null);
        document.getElementById("popsignin").classList.add('hide');
        navigate('/');
      }
      else setShowerror(response.message);
      $form.reset();
      console.log(response);
    };

  return (
    <div id="popsignin" className="popup hide" onClick={hide}>
      <div className="wrapper">
        <form>
          <h2>Iniciar sesion</h2>
          <div className="form-element">
            <label htmlFor="correo">Email</label>
            <input type="text" id="correo" name="correo" placeholder="Ingresar Email" />
          </div>
          <div className="form-element">
            <label htmlFor="contraseña">Password</label>
            <input type="password" id="contraseña" name="contraseña" placeholder="Ingresar contraseña" />
          </div>
          <div className="form-element">
            <input type="checkbox" id="remember-me" />
            <label htmlFor="remember-me">Recordar</label>
          </div>
          <button id="submit" type='submit' onClick={submit}>Iniciar</button>
          {showerror && <p style={{ color: "#A22" }}>{showerror}</p>}
        </form>
      </div>
    </div>
  )
}