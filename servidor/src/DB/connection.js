import sql from "mssql";
import config from "../config";

const sett = {
  user: config.user,
  password: config.password,
  server: config.server,
  database: config.database,
  options: {
    encrypt: true,
    enableArithAbort: true,
    trustServerCertificate: true,
  },
};

export let conn = (async () => await sql.connect(sett))();

export { sql };

//conn.then((e) => e.request().query("select sysdatetime()")).then((e) => console.log(e)).catch((e) => console.log(e.message));
