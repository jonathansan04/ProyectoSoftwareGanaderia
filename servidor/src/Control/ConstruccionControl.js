import { conn, sql } from "../DB/connection";

/*-- -----------------------------------------------------
-- Table Construcciones
-- -----------------------------------------------------
CREATE TABLE Construcciones(
  idConstrucciones INT NOT NULL identity(1,1),
  cantidad INT NOT NULL,
  extension INT NOT NULL,
  descripcion VARCHAR(45) NOT NULL,
  Potrero_idPotrero INT NOT NULL,
  PRIMARY KEY (idConstrucciones),
  CONSTRAINT fk_Construcciones_Potrero1
    FOREIGN KEY (Potrero_idPotrero)
    REFERENCES Potrero(idPotrero));*/

export let getConstrucciones = (req, res) => {
    conn
        .then((e) => e.request().query("select * from construcciones"))
        .then((e) => e.recordset.length > 0
            ? res.status(200).json(e.recordset)
            : res.status(404).json({ message: "No hay construccioness registrados" }))
        .catch((e) => res.status(500).json({ message: e.message }));
},
    getConstruccion = (req, res) => {
        conn
            .then((e) => e.request()
                .input("idConstrucciones", sql.Int, req.params.idConstrucciones)
                .query("select * from construcciones where idConstrucciones = @idConstrucciones"))
            .then((e) => e.recordset[0]
                ? res.status(200).json(e.recordset[0])
                : res.status(404).json({ message: "Construcciones no encontrado" }))
            .catch((e) => res.status(500).json({ message: e.message }));
    },
    postConstruccion = (req, res) => {
        let { cantidad, extension, descripcion, Potrero_idPotrero } = req.body;
        cantidad && extension && descripcion && Potrero_idPotrero
            ? conn
                .then((e) => e.request()
                    .input("cantidad", sql.Int, cantidad)
                    .input("extension", sql.Int, extension)
                    .input("descripcion", sql.VarChar, descripcion)
                    .input("Potrero_idPotrero", sql.Int, Potrero_idPotrero)
                    .query("insert into construcciones values(@cantidad, @extension, @descripcion, @Potrero_idPotrero)"))
                .then((e) => res.status(201).json({ message: "Construcciones creado" }))
                .catch((e) => res.status(500).json({ message: e.message }))
            : res.status(400).json({ message: "Faltan campos" });
    },
    putConstruccion = (req, res) => {
        let { cantidad, extension, descripcion, Potrero_idPotrero } = req.body;
        cantidad && extension && descripcion && Potrero_idPotrero
            ? conn
                .then((e) => e.request()
                    .input("idConstrucciones", sql.Int, req.params.idConstrucciones)
                    .input("cantidad", sql.Int, cantidad)
                    .input("extension", sql.Int, extension)
                    .input("descripcion", sql.VarChar, descripcion)
                    .input("Potrero_idPotrero", sql.Int, Potrero_idPotrero)
                    .query("update construcciones set cantidad = @cantidad, extension = @extension, descripcion = @descripcion, Potrero_idPotrero = @Potrero_idPotrero where idConstrucciones = @idConstrucciones"))
                .then((e) => e.rowsAffected[0]
                    ? res.status(200).json({ message: "Construcciones actualizado" })
                    : res.status(404).json({ message: "Construcciones no encontrado" }))
            : res.status(400).json({ message: "Faltan campos" });
    },
    deleteConstruccion = (req, res) => {
        conn
            .then((e) => e.request()
                .input("idConstrucciones", sql.Int, req.params.idConstrucciones)
                .query("delete from construcciones where idConstrucciones = @idConstrucciones"))
            .then((e) => e.rowsAffected[0]
                ? res.status(200).json({ message: "Construccion eliminado" })
                : res.status(404).json({ message: "Construccion no encontrado" }))
            .catch((e) => res.status(500).json({ message: e.message }));
    };