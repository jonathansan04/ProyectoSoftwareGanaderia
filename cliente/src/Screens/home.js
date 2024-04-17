import { useNavigate } from 'react-router-dom';

const Home = ({ sesionid }) => {
    let navigate = useNavigate();
    const logout = () => {
        localStorage.removeItem('Sessionid');
        navigate('/inicio');
    }
    return (
        <div style={{background: "#fff8"}}>
            <h1>
                Bienvenido
            </h1>
            <h3>
                Información de Inicio
            </h3>
            <button onClick={logout}>Cerrar Sesión</button>
        </div>
    )
};

export default Home;