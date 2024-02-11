import { conn, sql } from "../DB/connection";

/*-- -----------------------------------------------------
-- Table Produccion
-- -----------------------------------------------------
CREATE TABLE Produccion(
  idProduccion INT NOT NULL identity(1,1),
  fecha DATE NOT NULL,
  numeroordeño INT NOT NULL,
  producciondia VARCHAR(45) NOT NULL,
  idFInca INT NOT NULL,
  PRIMARY KEY (idProduccion),
  CONSTRAINT idFinca
    FOREIGN KEY (idFInca)
    REFERENCES Finca(idFinca));*/

export let getProducciones = (req, res) => {
    conn
        .then((e) => e.request().query("select * from produccion"))
        .then((e) => e.recordset.length > 0
            ? res.status(200).json(e.recordset)
            : res.status(404).json({ message: "No hay producciones registradas" }))
        .catch((e) => res.status(500).json({ message: e.message }));
},
    getProduccion = (req, res) => {
        conn
            .then((e) => e.request()
                .input("idProduccion", sql.Int, req.params.idProduccion)
                .query("select * from produccion where idProduccion = @idProduccion"))
            .then((e) => e.recordset[0]
                ? res.status(200).json(e.recordset[0])
                : res.status(404).json({ message: "Produccion no encontrada" }))
            .catch((e) => res.status(500).json({ message: e.message }));
    },
    postProduccion = (req, res) => {
        let { fecha, numeroordeño, producciondia, idFInca } = req.body;
        fecha && numeroordeño && producciondia && idFInca
            ? conn
                .then((e) => e.request()
                    .input("fecha", sql.Date, fecha)
                    .input("numeroordeño", sql.Int, numeroordeño)
                    .input("producciondia", sql.VarChar, producciondia)
                    .input("idFInca", sql.Int, idFInca)
                    .query("insert into produccion values(@fecha, @numeroordeño, @producciondia, @idFInca)"))
                .then((e) => res.status(201).json({ message: "Produccion creada" }))
                .catch((e) => res.status(500).json({ message: e.message }))
            : res.status(400).json({ message: "Faltan campos" });
    },
    putProduccion = (req, res) => {
        let { fecha, numeroordeño, producciondia, idFInca } = req.body;
        fecha && numeroordeño && producciondia && idFInca
            ? conn
                .then((e) => e.request()
                    .input("idProduccion", sql.Int, req.params.idProduccion)
                    .input("fecha", sql.Date, fecha)
                    .input("numeroordeño", sql.Int, numeroordeño)
                    .input("producciondia", sql.VarChar, producciondia)
                    .input("idFInca", sql.Int, idFInca)
                    .query("update produccion set fecha = @fecha, numeroordeño = @numeroordeño, producciondia = @producciondia, idFInca = @idFInca where idProduccion = @idProduccion"))
                .then((e) => e.rowsAffected[0]
                    ? res.status(200).json({ message: "Produccion actualizada" })
                    : res.status(404).json({ message: "Produccion no encontrada" }))
                .catch((e) => res.status(500).json({ message: e.message }))
            : res.status(400).json({ message: "Faltan campos" });
    },
    deleteProduccion = (req, res) => {
        conn
            .then((e) => e.request()
                .input("idProduccion", sql.Int, req.params.idProduccion)
                .query("delete from produccion where idProduccion = @idProduccion"))
            .then((e) => e.rowsAffected[0]
                ? res.status(200).json({ message: "Produccion eliminada" })
                : res.status(404).json({ message: "Produccion no encontrada" }))
            .catch((e) => res.status(500).json({ message: e.message }));
    };