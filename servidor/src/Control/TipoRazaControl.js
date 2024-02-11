import { conn, sql } from "../DB/connection";

/*-- -----------------------------------------------------
-- Table Tiporaza
-- -----------------------------------------------------
CREATE TABLE Tiporaza(
  idTiporaza INT NOT NULL identity(1,1),
  nomtipoderaza VARCHAR(45) NOT NULL,
  PRIMARY KEY (idTiporaza));*/

export let getTipoRazas = (req, res) => {
    conn
        .then((e) => e.request().query("select * from tiporaza"))
        .then((e) => e.recordset.length > 0
            ? res.status(200).json(e.recordset)
            : res.status(404).json({ message: "No hay tipos de raza registrados" }))
        .then((e) => console.log('res: ' + e))
        .catch((e) => res.status(500).json({ message: e.message }));
},
    getTipoRaza = (req, res) => {
        conn
            .then((e) => e.request()
                .input("idTiporaza", sql.Int, req.params.idTiporaza)
                .query("select * from tiporaza where idTiporaza = @idTiporaza"))
            .then((e) => e.recordset[0]
                ? res.status(200).json(e.recordset[0])
                : res.status(404).json({ message: "Tipo de raza no encontrado" }))
            .catch((e) => res.status(500).json({ message: e.message }));
    },
    postTipoRaza = (req, res) => {
        let { nomtipoderaza } = req.body;
        nomtipoderaza
            ? conn
                .then((e) => e.request()
                    .input("nomtipoderaza", sql.VarChar, nomtipoderaza)
                    .query("insert into tiporaza values(@nomtipoderaza)"))
                .then((e) => res.status(201).json({ message: "Tipo de raza creado" }))
                .catch((e) => res.status(500).json({ message: e.message }))
            : res.status(400).json({ message: "Faltan campos" });
    },
    putTipoRaza = (req, res) => {
        let { nomtipoderaza } = req.body;
        nomtipoderaza
            ? conn
                .then((e) => e.request()
                    .input("idTiporaza", sql.Int, req.params.idTiporaza)
                    .input("nomtipoderaza", sql.VarChar, nomtipoderaza)
                    .query("update tiporaza set nomtipoderaza = @nomtipoderaza where idTiporaza = @idTiporaza"))
                .then((e) => e.rowsAffected[0]
                    ? res.status(200).json({ message: "Tipo de raza actualizado" })
                    : res.status(404).json({ message: "Tipo de raza no encontrado" }))
                .catch((e) => res.status(500).json({ message: e.message }))
            : res.status(400).json({ message: "Faltan campos" });
    },
    deleteTipoRaza = (req, res) => {
        conn
            .then((e) => e.request()
                .input("idTiporaza", sql.Int, req.params.idTiporaza)
                .query("delete from tiporaza where idTiporaza = @idTiporaza"))
            .then((e) => e.rowsAffected[0]
                ? res.status(200).json({ message: "Tipo de raza eliminado" })
                : res.status(404).json({ message: "Tipo de raza no encontrado" }))
            .catch((e) => res.status(500).json({ message: e.message }));
    };