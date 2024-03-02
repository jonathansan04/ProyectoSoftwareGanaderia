import { conn, sql } from "../DB/connection";

/*-- -----------------------------------------------------
-- Table Potrero
-- -----------------------------------------------------
CREATE TABLE Potrero(
  idPotrero INT NOT NULL identity(1,1),
  numeropotrero INT NOT NULL,
  extension INT NOT NULL,
  tipodepasto VARCHAR(45) NOT NULL,
  Finca_idFinca INT NOT NULL,
  PRIMARY KEY (idPotrero),
  CONSTRAINT fk_Potrero_Finca1
    FOREIGN KEY (Finca_idFinca)
    REFERENCES Finca(idFinca));*/

export let getPotreros = (req, res) => {
    conn
        .then((e) => e.request().query("select * from potrero"))
        .then((e) => e.recordset.length > 0
            ? res.status(200).json(e.recordset)
            : res.status(404).json({ message: "No hay potreros registrados" }))
        .catch((e) => res.status(500).json({ message: e.message }));
},
    getPotrero = (req, res) => {
        conn
            .then((e) => e.request()
                .input("idPotrero", sql.Int, req.params.idPotrero)
                .query("select * from potrero where idPotrero = @idPotrero"))
            .then((e) => e.recordset[0]
                ? res.status(200).json(e.recordset[0])
                : res.status(404).json({ message: "Potrero no encontrado" }))
            .catch((e) => res.status(500).json({ message: e.message }));
    },
    postPotrero = (req, res) => {
        let { numeropotrero, extension, tipodepasto, Finca_idFinca } = req.body;
        numeropotrero && extension && tipodepasto && Finca_idFinca
            ? conn
                .then((e) => e.request()
                    .input("numeropotrero", sql.Int, numeropotrero)
                    .input("extension", sql.Int, extension)
                    .input("tipodepasto", sql.VarChar, tipodepasto)
                    .input("Finca_idFinca", sql.Int, Finca_idFinca)
                    .query("insert into potrero values(@numeropotrero, @extension, @tipodepasto, @Finca_idFinca)"))
                .then((e) => res.status(201).json({ message: "Potrero creado" }))
                .catch((e) => res.status(500).json({ message: e.message }))
            : res.status(400).json({ message: "Faltan campos" });
    },
    putPotrero = (req, res) => {
        let { numeropotrero, extension, tipodepasto, Finca_idFinca } = req.body;
        numeropotrero && extension && tipodepasto && Finca_idFinca
            ? conn
                .then((e) => e.request()
                    .input("idPotrero", sql.Int, req.params.idPotrero)
                    .input("numeropotrero", sql.Int, numeropotrero)
                    .input("extension", sql.Int, extension)
                    .input("tipodepasto", sql.VarChar, tipodepasto)
                    .input("Finca_idFinca", sql.Int, Finca_idFinca)
                    .query("update potrero set numeropotrero = @numeropotrero, extension = @extension, tipodepasto = @tipodepasto, Finca_idFinca = @Finca_idFinca where idPotrero = @idPotrero"))
                .then((e) => e.rowsAffected[0]
                    ? res.status(200).json({ message: "Potrero actualizado" })
                    : res.status(404).json({ message: "Potrero no encontrado" }))
                .catch((e) => res.status(500).json({ message: e.message }))
            : res.status(400).json({ message: "Faltan campos" });
    },
    deletePotrero = (req, res) => {
        conn
            .then((e) => e.request()
                .input("idPotrero", sql.Int, req.params.idPotrero)
                .query("delete from potrero where idPotrero = @idPotrero"))
            .then((e) => e.rowsAffected[0]
                ? res.status(200).json({ message: "Potrero eliminado" })
                : res.status(404).json({ message: "Potrero no encontrado" }))
            .catch((e) => res.status(500).json({ message: e.message }));
    };