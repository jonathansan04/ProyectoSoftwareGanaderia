import { conn, sql } from "../DB/connection";

/*-- -----------------------------------------------------
-- Table Implementos
-- -----------------------------------------------------
CREATE TABLE Implementos(
  idImplementos INT NOT NULL identity(1,1),
  nombreimplemento VARCHAR(45) NOT NULL,
  cantidad VARCHAR(45) NOT NULL,
  precio VARCHAR(45) NOT NULL,
  Finca_idFinca INT NOT NULL,
  PRIMARY KEY (idImplementos),
  CONSTRAINT fk_Implementos_Finca1
    FOREIGN KEY (Finca_idFinca)
    REFERENCES Finca(idFinca));*/

export let getImplementos = (req, res) => {
    conn
        .then((e) => e.request().query("select * from implementos"))
        .then((e) => e.recordset.length > 0
            ? res.status(200).json(e.recordset)
            : res.status(404).json({ message: "No hay implementos registrados" }))
        .catch((e) => res.status(500).json({ message: e.message }));
},
    getImplemento = (req, res) => {
        conn
            .then((e) => e.request()
                .input("idImplementos", sql.Int, req.params.idImplementos)
                .query("select * from implementos where idImplementos = @idImplementos"))
            .then((e) => e.recordset[0]
                ? res.status(200).json(e.recordset[0])
                : res.status(404).json({ message: "Implemento no encontrado" }))
            .catch((e) => res.status(500).json({ message: e.message }));
    },
    postImplemento = (req, res) => {
        let { nombreimplemento, cantidad, precio, Finca_idFinca } = req.body;
        nombreimplemento && cantidad && precio && Finca_idFinca
            ? conn
                .then((e) => e.request()
                    .input("nombreimplemento", sql.VarChar, nombreimplemento)
                    .input("cantidad", sql.VarChar, cantidad)
                    .input("precio", sql.VarChar, precio)
                    .input("Finca_idFinca", sql.Int, Finca_idFinca)
                    .query("insert into implementos values(@nombreimplemento, @cantidad, @precio, @Finca_idFinca)"))
                .then((e) => res.status(201).json({ message: "Implemento creado" }))
                .catch((e) => res.status(500).json({ message: e.message }))
            : res.status(400).json({ message: "Faltan campos" });
    },
    putImplemento = (req, res) => {
        let { nombreimplemento, cantidad, precio, Finca_idFinca } = req.body;
        nombreimplemento && cantidad && precio && Finca_idFinca
            ? conn
                .then((e) => e.request()
                    .input("idImplementos", sql.Int, req.params.idImplementos)
                    .input("nombreimplemento", sql.VarChar, nombreimplemento)
                    .input("cantidad", sql.VarChar, cantidad)
                    .input("precio", sql.VarChar, precio)
                    .input("Finca_idFinca", sql.Int, Finca_idFinca)
                    .query("update implementos set nombreimplemento = @nombreimplemento, cantidad = @cantidad, precio = @precio, Finca_idFinca = @Finca_idFinca where idImplementos = @idImplementos"))
                .then((e) => e.rowsAffected[0]
                    ? res.status(200).json({ message: "Implemento actualizado" })
                    : res.status(404).json({ message: "Implemento no encontrado" }))
                .catch((e) => res.status(500).json({ message: e.message }))
            : res.status(400).json({ message: "Faltan campos" });
    },
    deleteImplemento = (req, res) => {
        conn
            .then((e) => e.request()
                .input("idImplementos", sql.Int, req.params.idImplementos)
                .query("delete from implementos where idImplementos = @idImplementos"))
            .then((e) => e.rowsAffected[0]
                ? res.status(200).json({ message: "Implemento eliminado" })
                : res.status(404).json({ message: "Implemento no encontrado" }))
            .catch((e) => res.status(500).json({ message: e.message }));
    };