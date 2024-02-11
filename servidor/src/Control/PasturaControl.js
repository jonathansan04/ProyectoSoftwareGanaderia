import { conn, sql } from "../DB/connection";

/*-- -----------------------------------------------------
-- Table Pastura
-- -----------------------------------------------------
CREATE TABLE Pastura(
  idPastura INT NOT NULL identity(1,1),
  fechainicio DATE NOT NULL,
  fechafinal DATE NOT NULL,
  Potrero_idPotrero INT NOT NULL,
  PRIMARY KEY (idPastura),
  CONSTRAINT fk_Pastura_Potrero1
    FOREIGN KEY (Potrero_idPotrero)
    REFERENCES Potrero(idPotrero));*/

export let getPasturas = (req, res) => {
    conn
        .then((e) => e.request().query("select * from pastura"))
        .then((e) => e.recordset.length > 0
            ? res.status(200).json(e.recordset)
            : res.status(404).json({ message: "No hay pasturas registrados" }))
        .catch((e) => res.status(500).json({ message: e.message }));
},
    getPastura = (req, res) => {
        conn
            .then((e) => e.request()
                .input("idPastura", sql.Int, req.params.idPastura)
                .query("select * from pastura where idPastura = @idPastura"))
            .then((e) => e.recordset[0]
                ? res.status(200).json(e.recordset[0])
                : res.status(404).json({ message: "Pastura no encontrado" }))
            .catch((e) => res.status(500).json({ message: e.message }));
    },
    postPastura = (req, res) => {
        let { fechainicio, fechafinal, Potrero_idPotrero } = req.body;
        fechainicio && fechafinal && Potrero_idPotrero
            ? conn
                .then((e) => e.request()
                    .input("fechainicio", sql.Date, fechainicio)
                    .input("fechafinal", sql.Date, fechafinal)
                    .input("Potrero_idPotrero", sql.Int, Potrero_idPotrero)
                    .query("insert into pastura values(@fechainicio, @fechafinal, @Potrero_idPotrero)"))
                .then((e) => res.status(201).json({ message: "Pastura creado" }))
                .catch((e) => res.status(500).json({ message: e.message }))
            : res.status(400).json({ message: "Faltan campos" });
    },
    putPastura = (req, res) => {
        let { fechainicio, fechafinal, Potrero_idPotrero } = req.body;
        fechainicio && fechafinal && Potrero_idPotrero
            ? conn
                .then((e) => e.request()
                    .input("idPastura", sql.Int, req.params.idPastura)
                    .input("fechainicio", sql.Date, fechainicio)
                    .input("fechafinal", sql.Date, fechafinal)
                    .input("Potrero_idPotrero", sql.Int, Potrero_idPotrero)
                    .query("update pastura set fechainicio = @fechainicio, fechafinal = @fechafinal, Potrero_idPotrero = @Potrero_idPotrero where idPastura = @idPastura"))
                .then((e) => e.rowsAffected[0]
                    ? res.status(200).json({ message: "Pastura actualizado" })
                    : res.status(404).json({ message: "Pastura no encontrado" }))
            : res.status(400).json({ message: "Faltan campos" });
    },
    deletePastura = (req, res) => {
        conn
            .then((e) => e.request()
                .input("idPastura", sql.Int, req.params.idPastura)
                .query("delete from pastura where idPastura = @idPastura"))
            .then((e) => e.rowsAffected[0]
                ? res.status(200).json({ message: "Pastura eliminado" })
                : res.status(404).json({ message: "Pastura no encontrado" }))
            .catch((e) => res.status(500).json({ message: e.message }));
    };