import { conn, sql } from "../DB/connection";

/* -- -----------------------------------------------------
-- Table Usuario
-- -----------------------------------------------------
CREATE TABLE Usuario(
  idUsuario INT NOT NULL identity(1,1),
  nombreusuario VARCHAR(45) NOT NULL,
  apellidousuario VARCHAR(45) NOT NULL,
  celular INT NOT NULL,
  tipodeidentidad VARCHAR(45) NOT NULL,
  numeroidentidad VARCHAR(45) NOT NULL,
  correoelectronico VARCHAR(45) NOT NULL,
  contraseña VARCHAR(45) NOT NULL,
  PRIMARY KEY (idUsuario)); */

export let getUsuarios = (req, res) => {
    conn
        .then((e) => e.request().query("select * from usuario"))
        .then((e) => e.recordset.length > 0
            ? res.status(200).json(e.recordset)
            : res.status(404).json({ message: "No hay usuarios registrados" }))
        .then((e) => console.log('res: ' + e))
        .catch((e) => res.status(500).json({ message: e.message }));
},
    getUsuario = (req, res) => {
        conn
            .then((e) => e.request()
                .input("idUsuario", sql.Int, req.params.idUsuario)
                .query("select * from usuario where idUsuario = @idUsuario"))
            .then((e) => e.recordset[0]
                ? res.status(200).json(e.recordset[0])
                : res.status(404).json({ message: "Usuario no encontrado" }))
            .catch((e) => res.status(500).json({ message: e.message }));
    },
    postUsuario = (req, res) => {
        let { nombreusuario, apellidousuario, celular, tipodeidentidad, numeroidentidad, correoelectronico, contraseña } = req.body;
        nombreusuario && apellidousuario && celular && tipodeidentidad && numeroidentidad && correoelectronico && contraseña
            ? conn
                .then((e) => e.request()
                    .input("nombreusuario", sql.VarChar, nombreusuario)
                    .input("apellidousuario", sql.VarChar, apellidousuario)
                    .input("celular", sql.Int, celular)
                    .input("tipodeidentidad", sql.VarChar, tipodeidentidad)
                    .input("numeroidentidad", sql.VarChar, numeroidentidad)
                    .input("correoelectronico", sql.VarChar, correoelectronico)
                    .input("contraseña", sql.VarChar, contraseña)
                    .query("insert into usuario values(@nombreusuario, @apellidousuario, @celular, @tipodeidentidad, @numeroidentidad, @correoelectronico, @contraseña)"))
                .then((e) => res.status(201).json({ message: "Usuario creado" }))
                .catch((e) => res.status(500).json({ message: e.message }))
            : res.status(400).json({ message: "Faltan campos" });
    },
    putUsuario = (req, res) => {
        let { nombreusuario, apellidousuario, celular, tipodeidentidad, numeroidentidad, correoelectronico, contraseña } = req.body;
        nombreusuario && apellidousuario && celular && tipodeidentidad && numeroidentidad && correoelectronico && contraseña
            ? conn
                .then((e) => e.request()
                    .input("idUsuario", sql.Int, req.params.idUsuario)
                    .input("nombreusuario", sql.VarChar, nombreusuario)
                    .input("apellidousuario", sql.VarChar, apellidousuario)
                    .input("celular", sql.Int, celular)
                    .input("tipodeidentidad", sql.VarChar, tipodeidentidad)
                    .input("numeroidentidad", sql.VarChar, numeroidentidad)
                    .input("correoelectronico", sql.VarChar, correoelectronico)
                    .input("contraseña", sql.VarChar, contraseña)
                    .query("update usuario set nombreusuario = @nombreusuario, apellidousuario = @apellidousuario, celular = @celular, tipodeidentidad = @tipodeidentidad, numeroidentidad = @numeroidentidad, correoelectronico = @correoelectronico, contraseña = @contraseña where idUsuario = @idUsuario"))
                .then((e) => e.rowsAffected[0]
                    ? res.status(200).json({ message: "Usuario actualizado" })
                    : res.status(404).json({ message: "Usuario no encontrado" }))
                .catch((e) => res.status(500).json({ message: e.message }))
            : res.status(400).json({ message: "Faltan campos" });
    },
    deleteUsuario = (req, res) => {
        conn
            .then((e) => e.request()
                .input("idUsuario", sql.Int, req.params.idUsuario)
                .query("delete from usuario where idUsuario = @idUsuario"))
            .then((e) => e.rowsAffected[0]
                ? res.status(200).json({ message: "Usuario eliminado" })
                : res.status(404).json({ message: "Usuario no encontrado" }))
            .catch((e) => res.status(500).json({ message: e.message }));
    };
