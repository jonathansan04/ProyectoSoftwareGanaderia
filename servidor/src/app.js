import express from "express";
import morgan from "morgan";
import config from "./config";

import router from "./Routes/DefaultRoutes";
import specificRouter from "./Routes/SpecificRoutes";

const app = express();
app.set("port", config.port);

app.use(express.json());
app.use(morgan("dev"));

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
  next();
});

app.use(express.urlencoded({ extended: false }));

app.use(router);
app.use(specificRouter);

export default app;
