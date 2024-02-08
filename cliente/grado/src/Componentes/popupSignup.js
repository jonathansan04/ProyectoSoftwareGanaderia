import './styles/popupForm.css';

export default function PopupSignup() {
    let hide = (e) => e.target.classList.contains('popup') && document.getElementById("popsignup").classList.add('hide');

    return (
        <div id="popsignup" className="popup hide" onClick={hide}>
            <div className="wrapper">
                <h3>Registrarse</h3>
                <form>
                    <div>
                        <label>Usuario: </label>
                        <input type="text" />
                    </div>
                    <div>
                        <label>Contraseña: </label>
                        <input type="password" />
                    </div>
                    <div>
                        <label>Confirme contraseña: </label>
                        <input type="password" />
                    </div>
                    <button type="submit">Aceptar</button>
                </form>
            </div>
        </div>
    )
}