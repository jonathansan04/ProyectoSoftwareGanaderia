import './styles/popupForm.css';

export default function PopupSignup() {
    let hide = (e) => e.target.classList.contains('popup') && document.getElementById("popsignin").classList.add('hide');

    return (
        <div id="popsignin" className="popup hide" onClick={hide}>
            <div >
            <div className="close-btn">%times;</div>
            <div className="form">
                <h2>Iniciar sesion</h2>
                <form>
                <div className="form-element">
                  <label for="email">Email</label>
                  <input type="text" id="email" placeholder="Ingresar Email"/>
                </div>
                <div className="form-element">
                  <label for="password">Password</label>
                  <input type="password" id="password" placeholder="Ingresar contraseña"/>
                </div>
                <div className="form-element">
                  <input type="checkbox" id="remember-me"/>
                  <label for="remember-me">Recordar</label>
                </div>
                <div className="form-element">
                  <button type='submit'>Iniciar</button>
                </div>
                  
                </form>
            </div>
            </div>
        </div>
    )
}