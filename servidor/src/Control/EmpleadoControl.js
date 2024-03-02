import { conn, sql } from "../DB/connection";

/*-- -----------------------------------------------------
-- Table Empleado
-- -----------------------------------------------------
CREATE TABLE Empleado(
  idEmpleado INT NOT NULL identity(1,1),
  nombreempleado VARCHAR(45) NOT NULL,
  apellidoempleado VARCHAR(45) NOT NULL,
  fechanacimiento VARCHAR(45) NOT NULL,
  celular INT NOT NULL,
  numeroidentidademp VARCHAR(45) NOT NULL,
  tipodeidentidad VARCHAR(45) NOT NULL,
  rh VARCHAR(45) NOT NULL,
  eps VARCHAR(45) NOT NULL,
  fechainiciotrabajo DATE NOT NULL,
  finalcontrato DATE NULL,
  salario VARCHAR(45) NOT NULL,
  salariototal VARCHAR(45) NOT NULL,
  Rol_idRol INT NOT NULL,
  Usuario_idUsuario INT NOT NULL,
  PRIMARY KEY (idEmpleado),
  CONSTRAINT fk_Empleado_Rol1
    FOREIGN KEY (Rol_idRol)
    REFERENCES Rol(idRol),
  CONSTRAINT fk_Empleado_Usuario1
    FOREIGN KEY (Usuario_idUsuario)
    REFERENCES Usuario(idUsuario));*/

export let getEmpleados = (req, res) => {
    conn
        .then((e) => e.request().query("select * from empleado"))
        .then((e) => e.recordset.length > 0
            ? res.status(200).json(e.recordset)
            : res.status(404).json({ message: "No hay empleados registrados" }))
        .then((e) => console.log('res: ' + e))
        .catch((e) => res.status(500).json({ message: e.message }));
},
    getEmpleado = (req, res) => {
        conn
            .then((e) => e.request()
                .input("idEmpleado", sql.Int, req.params.idEmpleado)
                .query("select * from empleado where idEmpleado = @idEmpleado"))
            .then((e) => e.recordset[0]
                ? res.status(200).json(e.recordset[0])
                : res.status(404).json({ message: "Empleado no encontrado" }))
            .catch((e) => res.status(500).json({ message: e.message }));
    },
    postEmpleado = (req, res) => {
        let { nombreempleado, apellidoempleado, fechanacimiento, celular, numeroidentidademp, tipodeidentidad, rh, eps, fechainiciotrabajo, finalcontrato, salario, salariototal, Rol_idRol, Usuario_idUsuario } = req.body;
        nombreempleado && apellidoempleado && fechanacimiento && celular && numeroidentidademp && tipodeidentidad && rh && eps && fechainiciotrabajo && finalcontrato && salario && salariototal && Rol_idRol && Usuario_idUsuario
            ? conn
                .then((e) => e.request()
                    .input("nombreempleado", sql.VarChar, nombreempleado)
                    .input("apellidoempleado", sql.VarChar, apellidoempleado)
                    .input("fechanacimiento", sql.VarChar, fechanacimiento)
                    .input("celular", sql.Int, celular)
                    .input("numeroidentidademp", sql.VarChar, numeroidentidademp)
                    .input("tipodeidentidad", sql.VarChar, tipodeidentidad)
                    .input("rh", sql.VarChar, rh)
                    .input("eps", sql.VarChar, eps)
                    .input("fechainiciotrabajo", sql.Date, fechainiciotrabajo)
                    .input("finalcontrato", sql.Date, finalcontrato)
                    .input("salario", sql.VarChar, salario)
                    .input("salariototal", sql.VarChar, salariototal)
                    .input("Rol_idRol", sql.Int, Rol_idRol)
                    .input("Usuario_idUsuario", sql.Int, Usuario_idUsuario)
                    .query("insert into empleado values(@nombreempleado, @apellidoempleado, @fechanacimiento, @celular, @numeroidentidademp, @tipodeidentidad, @rh, @eps, @fechainiciotrabajo, @finalcontrato, @salario, @salariototal, @Rol_idRol, @Usuario_idUsuario)"))
                .then((e) => res.status(201).json({ message: "Empleado creado" }))
                .catch((e) => res.status(500).json({ message: e.message }))
            : res.status(400).json({ message: "Faltan campos" });
    },
    putEmpleado = (req, res) => {
        let { nombreempleado, apellidoempleado, fechanacimiento, celular, numeroidentidademp, tipodeidentidad, rh, eps, fechainiciotrabajo, finalcontrato, salario, salariototal, Rol_idRol, Usuario_idUsuario } = req.body;
        nombreempleado && apellidoempleado && fechanacimiento && celular && numeroidentidademp && tipodeidentidad && rh && eps && fechainiciotrabajo && finalcontrato && salario && salariototal && Rol_idRol && Usuario_idUsuario
            ? conn
                .then((e) => e.request()
                    .input("idEmpleado", sql.Int, req.params.idEmpleado)
                    .input("nombreempleado", sql.VarChar, nombreempleado)
                    .input("apellidoempleado", sql.VarChar, apellidoempleado)
                    .input("fechanacimiento", sql.VarChar, fechanacimiento)
                    .input("celular", sql.Int, celular)
                    .input("numeroidentidademp", sql.VarChar, numeroidentidademp)
                    .input("tipodeidentidad", sql.VarChar, tipodeidentidad)
                    .input("rh", sql.VarChar, rh)
                    .input("eps", sql.VarChar, eps)
                    .input("fechainiciotrabajo", sql.Date, fechainiciotrabajo)
                    .input("finalcontrato", sql.Date, finalcontrato)
                    .input("salario", sql.VarChar, salario)
                    .input("salariototal", sql.VarChar, salariototal)
                    .input("Rol_idRol", sql.Int, Rol_idRol)
                    .input("Usuario_idUsuario", sql.Int, Usuario_idUsuario)
                    .query("update empleado set nombreempleado = @nombreempleado, apellidoempleado = @apellidoempleado, fechanacimiento = @fechanacimiento, celular = @celular, numeroidentidademp = @numeroidentidademp, tipodeidentidad = @tipodeidentidad, rh = @rh, eps = @eps, fechainiciotrabajo = @fechainiciotrabajo, finalcontrato = @finalcontrato, salario = @salario, salariototal = @salariototal, Rol_idRol = @Rol_idRol, Usuario_idUsuario = @Usuario_idUsuario where idEmpleado = @idEmpleado"))
                .then((e) => e.rowsAffected[0]
                    ? res.status(200).json({ message: "Empleado actualizado" })
                    : res.status(404).json({ message: "Empleado no encontrado" }))
                .catch((e) => res.status(500).json({ message: e.message }))
            : res.status(400).json({ message: "Faltan campos" });
    },
    deleteEmpleado = (req, res) => {
        conn
            .then((e) => e.request()
                .input("idEmpleado", sql.Int, req.params.idEmpleado)
                .query("delete from empleado where idEmpleado = @idEmpleado"))
            .then((e) => e.rowsAffected[0]
                ? res.status(200).json({ message: "Empleado eliminado" })
                : res.status(404).json({ message: "Empleado no encontrado" }))
            .catch((e) => res.status(500).json({ message: e.message }));
    };