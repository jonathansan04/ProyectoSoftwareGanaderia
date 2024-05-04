import { useNavigate } from 'react-router-dom';
import './estilosscreens.css'

const Home = ({ sesionid }) => {
    let navigate = useNavigate();
    const logout = () => {
        localStorage.removeItem('Sessionid');
        navigate('/app/inicio');
    }

    
    return (
        <div style={{background: "#fff8"}}>
            <h1>
                Bienvenidooo
            </h1>
            
            <section className='tarjetas'>

            <div className='secciontarjeta'>
            <h3 className='titulotarjeta'>
                Finca
            </h3>
            <button className='botontarjeta' >
                   Crear finca
             </button>
             <button className='boton2'>
                   Consultar finca
             </button>
            </div>
            </section>
 

            <section className='tarjetaspot'>

            <div className='secciontarjeta'>
            <h3 className='titulotarjeta'>
                Potreros
            </h3>
            <button className='botontarjeta'  >
                   Crear potrero
             </button>
             <button className='boton2'>
                   Consultar potrero
             </button>
            </div>
            </section>

            <section className='tarjetasani'>

            <div className='secciontarjeta'>
            <h3 className='titulotarjeta'>
                Animales
            </h3>
            <button className='botontarjeta' >
                   Crear animal
             </button>
             <button className='boton2'>
                   Consultar animal
             </button>
            </div>
            </section>

            <section className='tarjetas'>

            <div className='secciontarjeta'>
            <h3 className='titulotarjeta'>
                Vacunacion
            </h3>
            <button className='botontarjeta'>
                   Crear vacunación
             </button>
             <button className='boton2'>
                   Consultar vacunación
             </button>
            </div>
            </section>

            <section className='tarjetasvent'>

            <div className='secciontarjeta'>
            <h3 className='titulotarjeta'>
                Ventas
            </h3>
            <button className='botontarjeta'>
                   Crear venta
             </button>
             <button className='boton2'>
                   Consultar venta
             </button>
            </div>
            </section>

            <section className='tarjetasemp'>

            <div className='secciontarjeta'>
            <h3 className='titulotarjeta'>
                Empleado
            </h3>
            <button className='botontarjeta'>
                   Crear empleado
             </button>
             <button className='boton2'>
                   Consultar empleado
             </button>
            </div>
            </section>
           

            <h3>
                Información de Inicio
            </h3>
            <button onClick={logout}>Cerrar Sesión</button>
        </div>
    )
};

export default Home;