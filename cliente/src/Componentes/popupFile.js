import { postForm } from "../Suports/rest";
import exicon from "../img/screen/excel-icon.jpg"
const context = require.context('../sheets', true);

export default function PopupFile({ collection }) {
    let hide = (e) => e.target.classList.contains('popup') && document.getElementById("popfile").classList.add('hide'),
        submit = async (e) => {
            e.preventDefault();
            let file = document.getElementById('archivo').files[0];
            if (!file.name.endsWith('.xlsx')) return alert('Formato no válido');
            let formData = new FormData();
            formData.append('file', file);
            formData.append('collection', collection);
            formData.append('id_usuario', localStorage.getItem('Sessionid'));
            let res = await postForm('/Upload', formData);
            console.log(res);
        },
        sheet = (col) => {
            try { return context(`./${col}.xlsx`) }
            catch { return "" }
        };
    return (
        <div id="popfile" className="popup hide" onClick={hide}>
            <div className="wrapper">
                <form className='formpopup' onSubmit={submit}>

                    <h2>Subir Archivo</h2>
                    <div>
                        <div style={{ margin: "0 auto" }} className="submit-container">
                            <a style={{ color: "black", textDecoration: "none" }} href={sheet(collection)} download>
                                <section className="sec-formato">
                                    <img style={{ alignSelf: "auto" }} className="iconoformato" src={exicon} alt="Archivo"></img>
                                    <span style={{ alignSelf: "auto" }} >Descargar formato</span>
                                </section>
                            </a>
                        </div>
                    </div>
                    <div className="form-element">
                        <label htmlFor="archivo">Archivo</label>
                        <input type="file" id="archivo" name="archivo" accept=".xlsx" />
                    </div>
                    <input type="hidden" name="id_usuario" value={localStorage.getItem('Sessionid')} />
                    <input type="hidden" name="collection" value={collection} />
                    <section className="submit-container">
                        <button className="submit" type="submit">Aceptar</button>
                    </section>
                </form>
            </div>
        </div>
    )
}