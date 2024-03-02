import express from "express";
import config from "./config";

import FincaRoute from "./Routes/FincaRoute";
import RolRoute from "./Routes/RolRoute";
import UsuarioRoute from "./Routes/UsuarioRoute";
import PotreroRoute from "./Routes/PotreroRoute";
import AnimalRoute from "./Routes/AnimalRoute";
import ProduccionRoute from "./Routes/ProduccionRoute";
import VentaRoute from "./Routes/VentaRoute";
import EmpleadoRoute from "./Routes/EmpleadoRoute";
import RazaRoute from "./Routes/RazaRoute";
import VacunacionRoute from "./Routes/VacunacionRoute";
import PasturaRoute from "./Routes/PasturaRoute";
import ImplementoRoute from "./Routes/ImplementoRoute";
import MedicamentoRoute from "./Routes/MedicamentoRoute";
import TipoRazaRoute from "./Routes/TipoRazaRoute";
import ConstruccionRoute from "./Routes/ConstruccionRoute";


const app = express();
app.set("port", config.port);

app.use(express.json());

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://127.0.0.1:5500');
  res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
  next();
});

app.use(express.urlencoded({ extended: false }));

app.use(FincaRoute);
app.use(RolRoute);
app.use(UsuarioRoute);
app.use(PotreroRoute);
app.use(AnimalRoute);
app.use(ProduccionRoute);
app.use(VentaRoute);
app.use(EmpleadoRoute);
app.use(RazaRoute);
app.use(VacunacionRoute);
app.use(PasturaRoute);
app.use(ImplementoRoute);
app.use(MedicamentoRoute);
app.use(TipoRazaRoute);
app.use(ConstruccionRoute);

export default app;
