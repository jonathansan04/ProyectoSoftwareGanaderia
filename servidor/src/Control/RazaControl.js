import { conn, sql } from "../DB/connection";

/*-- -----------------------------------------------------
-- Table Raza
-- -----------------------------------------------------
CREATE TABLE Raza(
  idRaza INT NOT NULL identity(1,1),
  nombreraza VARCHAR(45) NOT NULL,
  idTipoRaza INT NOT NULL,
  PRIMARY KEY (idRaza),
  CONSTRAINT idTipoRaza
    FOREIGN KEY (idTipoRaza)
    REFERENCES Tiporaza(idTiporaza));*/

export let getRazas = (req, res) => {
    conn
        .then((e) => e.request().query("select * from raza"))
        .then((e) => e.recordset.length > 0
            ? res.status(200).json(e.recordset)
            : res.status(404).json({ message: "No hay razas registradas" }))
        .then((e) => console.log('res: ' + e))
        .catch((e) => res.status(500).json({ message: e.message }));
},
    getRaza = (req, res) => {
        conn
            .then((e) => e.request()
                .input("idRaza", sql.Int, req.params.idRaza)
                .query("select * from raza where idRaza = @idRaza"))
            .then((e) => e.recordset[0]
                ? res.status(200).json(e.recordset[0])
                : res.status(404).json({ message: "Raza no encontrada" }))
            .catch((e) => res.status(500).json({ message: e.message }));
    },
    postRaza = (req, res) => {
        let { nombreraza, idTipoRaza } = req.body;
        nombreraza && idTipoRaza
            ? conn
                .then((e) => e.request()
                    .input("nombreraza", sql.VarChar, nombreraza)
                    .input("idTipoRaza", sql.Int, idTipoRaza)
                    .query("insert into raza values(@nombreraza, @idTipoRaza)"))
                .then((e) => res.status(201).json({ message: "Raza creada" }))
                .catch((e) => res.status(500).json({ message: e.message }))
            : res.status(400).json({ message: "Faltan campos" });
    },
    putRaza = (req, res) => {
        let { nombreraza, idTipoRaza } = req.body;
        nombreraza && idTipoRaza
            ? conn
                .then((e) => e.request()
                    .input("idRaza", sql.Int, req.params.idRaza)
                    .input("nombreraza", sql.VarChar, nombreraza)
                    .input("idTipoRaza", sql.Int, idTipoRaza)
                    .query("update raza set nombreraza = @nombreraza, idTipoRaza = @idTipoRaza where idRaza = @idRaza"))
                .then((e) => e.rowsAffected[0]
                    ? res.status(200).json({ message: "Raza actualizada" })
                    : res.status(404).json({ message: "Raza no encontrada" }))
                .catch((e) => res.status(500).json({ message: e.message }))
            : res.status(400).json({ message: "Faltan campos" });
    },
    deleteRaza = (req, res) => {
        conn
            .then((e) => e.request()
                .input("idRaza", sql.Int, req.params.idRaza)
                .query("delete from raza where idRaza = @idRaza"))
            .then((e) => e.recordset[0]
                ? res.status(200).json({ message: "Raza eliminada" })
                : res.status(404).json({ message: "Raza no encontrada" }))
            .catch((e) => res.status(500).json({ message: e.message }));
    };