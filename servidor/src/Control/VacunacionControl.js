import { conn, sql } from "../DB/connection";

/*-- -----------------------------------------------------
-- Table Vacunacion
-- -----------------------------------------------------
CREATE TABLE Vacunacion(
  idVacunacion INT NOT NULL identity(1,1),
  fechavacunacion VARCHAR(45) NOT NULL,
  dosis VARCHAR(45) NOT NULL,
  enfermedad VARCHAR(45) NOT NULL,
  idAnimal INT NOT NULL,
  PRIMARY KEY (idVacunacion),
  CONSTRAINT idAnimal
    FOREIGN KEY (idAnimal)
    REFERENCES Animal(idAnimal));*/

export let getVacunaciones = (req, res) => {
    conn
        .then((e) => e.request().query("select * from vacunacion"))
        .then((e) => e.recordset.length > 0
            ? res.status(200).json(e.recordset)
            : res.status(404).json({ message: "No hay vacunaciones registradas" }))
        .then((e) => console.log('res: ' + e))
        .catch((e) => res.status(500).json({ message: e.message }));
},
    getVacunacion = (req, res) => {
        conn
            .then((e) => e.request()
                .input("idVacunacion", sql.Int, req.params.idVacunacion)
                .query("select * from vacunacion where idVacunacion = @idVacunacion"))
            .then((e) => e.recordset[0]
                ? res.status(200).json(e.recordset[0])
                : res.status(404).json({ message: "Vacunacion no encontrada" }))
            .catch((e) => res.status(500).json({ message: e.message }));
    },
    postVacunacion = (req, res) => {
        let { fechavacunacion, dosis, enfermedad, idAnimal } = req.body;
        fechavacunacion && dosis && enfermedad && idAnimal
            ? conn
                .then((e) => e.request()
                    .input("fechavacunacion", sql.VarChar, fechavacunacion)
                    .input("dosis", sql.VarChar, dosis)
                    .input("enfermedad", sql.VarChar, enfermedad)
                    .input("idAnimal", sql.Int, idAnimal)
                    .query("insert into vacunacion values(@fechavacunacion, @dosis, @enfermedad, @idAnimal)"))
                .then((e) => res.status(201).json({ message: "Vacunacion creada" }))
                .catch((e) => res.status(500).json({ message: e.message }))
            : res.status(400).json({ message: "Faltan campos" });
    },
    putVacunacion = (req, res) => {
        let { fechavacunacion, dosis, enfermedad, idAnimal } = req.body;
        fechavacunacion && dosis && enfermedad && idAnimal
            ? conn
                .then((e) => e.request()
                    .input("idVacunacion", sql.Int, req.params.idVacunacion)
                    .input("fechavacunacion", sql.VarChar, fechavacunacion)
                    .input("dosis", sql.VarChar, dosis)
                    .input("enfermedad", sql.VarChar, enfermedad)
                    .input("idAnimal", sql.Int, idAnimal)
                    .query("update vacunacion set fechavacunacion = @fechavacunacion, dosis = @dosis, enfermedad = @enfermedad, idAnimal = @idAnimal where idVacunacion = @idVacunacion"))
                .then((e) => e.recordset[0]
                    ? res.status(200).json({ message: "Vacunacion actualizada" })
                    : res.status(404).json({ message: "Vacunacion no encontrada" }))
                .catch((e) => res.status(500).json({ message: e.message }))
            : res.status(400).json({ message: "Faltan campos" });
    },
    deleteVacunacion = (req, res) => {
        conn
            .then((e) => e.request()
                .input("idVacunacion", sql.Int, req.params.idVacunacion)
                .query("delete from vacunacion where idVacunacion = @idVacunacion"))
            .then((e) => e.rowsAffected[0]
                ? res.status(200).json({ message: "Vacunacion eliminada" })
                : res.status(404).json({ message: "Vacunacion no encontrada" }))
            .catch((e) => res.status(500).json({ message: e.message }));
    };