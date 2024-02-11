import { conn, sql } from "../DB/connection";

/*-- -----------------------------------------------------
-- Table Animal
-- -----------------------------------------------------
CREATE TABLE Animal(
  idAnimal INT NOT NULL identity(1,1),
  nombreanimal VARCHAR(45) NOT NULL,
  numeroanimal VARCHAR(45) NOT NULL,
  fechanacimiento DATE NOT NULL,
  sexo VARCHAR(45) NOT NULL,
  nombremadre VARCHAR(45) NULL,
  nombrepadre VARCHAR(45) NULL,
  pesonac VARCHAR(45) NOT NULL,
  Usuario_idUsuario INT NOT NULL,
  idRaza INT NOT NULL,
  PRIMARY KEY (idAnimal),
  CONSTRAINT fk_Animal_Usuario1
    FOREIGN KEY (Usuario_idUsuario)
    REFERENCES Usuario(idUsuario),
  CONSTRAINT idRaza
    FOREIGN KEY (idRaza)
    REFERENCES Raza(idRaza));*/

export let getAnimales = (req, res) => {
    conn
        .then((e) => e.request().query("select * from animal"))
        .then((e) => e.recordset.length > 0
            ? res.status(200).json(e.recordset)
            : res.status(404).json({ message: "No hay animales registrados" }))
        .catch((e) => res.status(500).json({ message: e.message }));
},
    getAnimal = (req, res) => {
        conn
            .then((e) => e.request()
                .input("idAnimal", sql.Int, req.params.idAnimal)
                .query("select * from animal where idAnimal = @idAnimal"))
            .then((e) => e.recordset[0]
                ? res.status(200).json(e.recordset[0])
                : res.status(404).json({ message: "Animal no encontrado" }))
            .catch((e) => res.status(500).json({ message: e.message }));
    },
    postAnimal = (req, res) => {
        let { nombreanimal, numeroanimal, fechanacimiento, sexo, nombremadre, nombrepadre, pesonac, Usuario_idUsuario, idRaza } = req.body;
        nombreanimal && numeroanimal && fechanacimiento && sexo && pesonac && Usuario_idUsuario && idRaza
            ? conn
                .then((e) => e.request()
                    .input("nombreanimal", sql.VarChar, nombreanimal)
                    .input("numeroanimal", sql.VarChar, numeroanimal)
                    .input("fechanacimiento", sql.Date, fechanacimiento)
                    .input("sexo", sql.VarChar, sexo)
                    .input("nombremadre", sql.VarChar, nombremadre)
                    .input("nombrepadre", sql.VarChar, nombrepadre)
                    .input("pesonac", sql.VarChar, pesonac)
                    .input("Usuario_idUsuario", sql.Int, Usuario_idUsuario)
                    .input("idRaza", sql.Int, idRaza)
                    .query("insert into animal values(@nombreanimal, @numeroanimal, @fechanacimiento, @sexo, @nombremadre, @nombrepadre, @pesonac, @Usuario_idUsuario, @idRaza)"))
                .then((e) => res.status(201).json({ message: "Animal creado" }))
                .catch((e) => res.status(500).json({ message: e.message }))
            : res.status(400).json({ message: "Faltan campos" });
    },
    putAnimal = (req, res) => {
        let { nombreanimal, numeroanimal, fechanacimiento, sexo, nombremadre, nombrepadre, pesonac, Usuario_idUsuario, idRaza } = req.body;
        nombreanimal && numeroanimal && fechanacimiento && sexo && pesonac && Usuario_idUsuario && idRaza
            ? conn
                .then((e) => e.request()
                    .input("idAnimal", sql.Int, req.params.idAnimal)
                    .input("nombreanimal", sql.VarChar, nombreanimal)
                    .input("numeroanimal", sql.VarChar, numeroanimal)
                    .input("fechanacimiento", sql.Date, fechanacimiento)
                    .input("sexo", sql.VarChar, sexo)
                    .input("nombremadre", sql.VarChar, nombremadre)
                    .input("nombrepadre", sql.VarChar, nombrepadre)
                    .input("pesonac", sql.VarChar, pesonac)
                    .input("Usuario_idUsuario", sql.Int, Usuario_idUsuario)
                    .input("idRaza", sql.Int, idRaza)
                    .query("update animal set nombreanimal = @nombreanimal, numeroanimal = @numeroanimal, fechanacimiento = @fechanacimiento, sexo = @sexo, nombremadre = @nombremadre, nombrepadre = @nombrepadre, pesonac = @pesonac, Usuario_idUsuario = @Usuario_idUsuario, idRaza = @idRaza where idAnimal = @idAnimal"))
                .then((e) => e.rowsAffected[0]
                    ? res.status(200).json({ message: "Animal actualizado" })
                    : res.status(404).json({ message: "Animal no encontrado" }))
            : res.status(400).json({ message: "Faltan campos" });
    },
    deleteAnimal = (req, res) => {
        conn
            .then((e) => e.request()
                .input("idAnimal", sql.Int, req.params.idAnimal)
                .query("delete from animal where idAnimal = @idAnimal"))
            .then((e) => e.rowsAffected[0]
                ? res.status(200).json({ message: "Animal eliminado" })
                : res.status(404).json({ message: "Animal no encontrado" }))
            .catch((e) => res.status(500).json({ message: e.message }));
    };