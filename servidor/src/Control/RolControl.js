import { conn, sql } from "../DB/connection";

/* -- -----------------------------------------------------
-- Table Rol
-- -----------------------------------------------------
CREATE TABLE Rol(
  idRol INT NOT NULL identity(1,1),
  nombrerol VARCHAR(45) NOT NULL,
  PRIMARY KEY (idRol)); */

export let getRoles = (req, res) => {
    conn
        .then((e) => e.request().query("select * from rol"))
        .then((e) => e.recordset.length > 0
            ? res.status(200).json(e.recordset)
            : res.status(404).json({ message: "No hay roles registrados" }))
        .then((e) => console.log('res: ' + e))
        .catch((e) => res.status(500).json({ message: e.message }));
},
    getRol = (req, res) => {
        conn
            .then((e) => e.request()
                .input("idRol", sql.Int, req.params.idRol)
                .query("select * from rol where idRol = @idRol"))
            .then((e) => e.recordset[0]
                ? res.status(200).json(e.recordset[0])
                : res.status(404).json({ message: "Rol no encontrado" }))
            .catch((e) => res.status(500).json({ message: e.message }));
    },
    postRol = (req, res) => {
        let { nombrerol } = req.body;
        nombrerol
            ? conn
                .then((e) => e.request()
                    .input("nombrerol", sql.VarChar, nombrerol)
                    .query("insert into rol values(@nombrerol)"))
                .then((e) => res.status(201).json({ message: "Rol creado" }))
                .catch((e) => res.status(500).json({ message: e.message }))
            : res.status(400).json({ message: "Faltan campos" });
    },
    putRol = (req, res) => {
        let { nombrerol } = req.body;
        nombrerol
            ? conn
                .then((e) => e.request()
                    .input("idRol", sql.Int, req.params.idRol)
                    .input("nombrerol", sql.VarChar, nombrerol)
                    .query("update rol set nombrerol = @nombrerol where idRol = @idRol"))
                .then((e) => e.rowsAffected[0]
                    ? res.status(200).json({ message: "Rol actualizado" })
                    : res.status(404).json({ message: "Rol no encontrado" }))
                .catch((e) => res.status(500).json({ message: e.message }))
            : res.status(400).json({ message: "Faltan campos" });
    },
    deleteRol = (req, res) => {
        conn
            .then((e) => e.request()
                .input("idRol", sql.Int, req.params.idRol)
                .query("delete from rol where idRol = @idRol"))
            .then((e) => e.rowsAffected[0]
                ? res.status(200).json({ message: "Rol eliminado" })
                : res.status(404).json({ message: "Rol no encontrado" }))
            .catch((e) => res.status(500).json({ message: e.message }));
    };