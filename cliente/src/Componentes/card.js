import { useNavigate } from 'react-router-dom';
import './styles/card.css';

const context = require.context('../img/tables', true); //icon-library.com

export default function Card({ col }) {
    let navigate = useNavigate(),
        img = (col) => {
            try { return context(`./${col}.jpg`) }
            catch { return "" }
        }
    return (
        <div className='secciontarjeta'>
            <img src={img(col)} alt={col} className='iconotarjeta' />
            <h4 className='titulotarjeta'>{col}</h4>
            <div className='botones'>
                <button className='botontarjeta' onClick={() => navigate(`/app/form/${col}`)}>Crear</button>
                <button className='botontarjeta2' onClick={() => navigate(`/app/table/${col}`)}>Consultar</button>
            </div>
            <div className='line'></div>
        </div>
    );
}