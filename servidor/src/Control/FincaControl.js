import { conn, sql } from "../DB/connection";

/* -- -----------------------------------------------------
-- Table Finca
-- -----------------------------------------------------
CREATE TABLE Finca(
  idFinca INT NOT NULL identity(1,1),
  nombrefinca VARCHAR(45) NOT NULL,
  ubicacion VARCHAR(45) NOT NULL,
  extension INT NOT NULL,
  numeropredial VARCHAR(45) NOT NULL,
  Usuario_idUsuario INT NOT NULL,
  PRIMARY KEY (idFinca),
  CONSTRAINT fk_Finca_Usuario
    FOREIGN KEY (Usuario_idUsuario)
    REFERENCES Usuario(idUsuario)); */

export let getFincas = (req, res) => {
    conn
        .then((e) => e.request().query("select * from finca"))
        .then((e) => e.recordset.length > 0
            ? res.status(200).json(e.recordset)
            : res.status(404).json({ message: "No hay fincas registradas" }))
        .catch((e) => res.status(500).json({ message: e.message }));
},
    getFinca = (req, res) => {
        conn
            .then((e) => e.request()
                .input("idFinca", sql.Int, req.params.idFinca)
                .query("select * from finca where idFinca = @idFinca"))
            .then((e) => e.recordset[0]
                ? res.status(200).json(e.recordset[0])
                : res.status(404).json({ message: "Finca no encontrada" }))
            .catch((e) => res.status(500).json({ message: e.message }));
    },
    postFinca = (req, res) => {
        let { nombrefinca, ubicacion, extension, numeropredial, Usuario_idUsuario } = req.body;
        nombrefinca && ubicacion && extension && numeropredial && Usuario_idUsuario
            ? conn
                .then((e) => e.request().input("nombrefinca", sql.VarChar, nombrefinca)
                    .input("ubicacion", sql.VarChar, ubicacion)
                    .input("extension", sql.Int, extension)
                    .input("numeropredial", sql.VarChar, numeropredial)
                    .input("Usuario_idUsuario", sql.Int, Usuario_idUsuario)
                    .query("insert into finca values(@nombrefinca, @ubicacion, @extension, @numeropredial, @Usuario_idUsuario)"))
                .then((e) => res.status(201).json({ message: "Finca creada" }))
                .catch((e) => res.status(500).json({ message: e.message }))
            : res.status(400).json({ message: "Faltan campos" });
    },
    putFinca = (req, res) => {
        let { nombrefinca, ubicacion, extension, numeropredial, Usuario_idUsuario } = req.body;
        nombrefinca && ubicacion && extension && numeropredial && Usuario_idUsuario
            ? conn
                .then((e) => e.request().input("idFinca", sql.Int, req.params.idFinca)
                    .input("nombrefinca", sql.VarChar, nombrefinca)
                    .input("ubicacion", sql.VarChar, ubicacion)
                    .input("extension", sql.Int, extension)
                    .input("numeropredial", sql.VarChar, numeropredial)
                    .input("Usuario_idUsuario", sql.Int, Usuario_idUsuario)
                    .query("update finca set nombrefinca = @nombrefinca, ubicacion = @ubicacion, extension = @extension, numeropredial = @numeropredial, Usuario_idUsuario = @Usuario_idUsuario where idFinca = @idFinca"))
                .then((e) => e.rowsAffected[0]
                    ? res.status(200).json({ message: "Finca actualizada" })
                    : res.status(404).json({ message: "Finca no encontrada" }))
                .catch((e) => res.status(500).json({ message: e.message }))
            : res.status(400).json({ message: "Faltan campos" });
    },
    deleteFinca = (req, res) => {
        conn
            .then((e) => e.request().input("idFinca", sql.Int, req.params.idFinca)
                .query("delete from finca where idFinca = @idFinca"))
            .then((e) => e.rowsAffected[0]
                ? res.status(200).json({ message: "Finca eliminada" })
                : res.status(404).json({ message: "Finca no encontrada" }))
            .catch((e) => res.status(500).json({ message: e.message }));
    };