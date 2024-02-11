import { conn, sql } from "../DB/connection";

/*-- -----------------------------------------------------
-- Table Medicamentos
-- -----------------------------------------------------
CREATE TABLE Medicamentos(
  idMedicamentos INT NOT NULL identity(1,1),
  nombremedicamento VARCHAR(45) NOT NULL,
  cantidad VARCHAR(45) NOT NULL,
  precio VARCHAR(45) NOT NULL,
  Finca_idFinca INT NOT NULL,
  PRIMARY KEY (idMedicamentos),
  CONSTRAINT fk_Medicamentos_Finca1
    FOREIGN KEY (Finca_idFinca)
    REFERENCES Finca(idFinca));*/

export let getMedicamentos = (req, res) => {
    conn
        .then((e) => e.request().query("select * from medicamentos"))
        .then((e) => e.recordset.length > 0
            ? res.status(200).json(e.recordset)
            : res.status(404).json({ message: "No hay medicamentos registrados" }))
        .catch((e) => res.status(500).json({ message: e.message }));
},
    getMedicamento = (req, res) => {
        conn
            .then((e) => e.request()
                .input("idMedicamentos", sql.Int, req.params.idMedicamentos)
                .query("select * from medicamentos where idMedicamentos = @idMedicamentos"))
            .then((e) => e.recordset[0]
                ? res.status(200).json(e.recordset[0])
                : res.status(404).json({ message: "Medicamento no encontrado" }))
            .catch((e) => res.status(500).json({ message: e.message }));
    },
    postMedicamento = (req, res) => {
        let { nombremedicamento, cantidad, precio, Finca_idFinca } = req.body;
        nombremedicamento && cantidad && precio && Finca_idFinca
            ? conn
                .then((e) => e.request()
                    .input("nombremedicamento", sql.VarChar, nombremedicamento)
                    .input("cantidad", sql.VarChar, cantidad)
                    .input("precio", sql.VarChar, precio)
                    .input("Finca_idFinca", sql.Int, Finca_idFinca)
                    .query("insert into medicamentos values(@nombremedicamento, @cantidad, @precio, @Finca_idFinca)"))
                .then((e) => res.status(201).json({ message: "Medicamento creado" }))
                .catch((e) => res.status(500).json({ message: e.message }))
            : res.status(400).json({ message: "Faltan campos" });
    },
    putMedicamento = (req, res) => {
        let { nombremedicamento, cantidad, precio, Finca_idFinca } = req.body;
        nombremedicamento && cantidad && precio && Finca_idFinca
            ? conn
                .then((e) => e.request()
                    .input("idMedicamentos", sql.Int, req.params.idMedicamentos)
                    .input("nombremedicamento", sql.VarChar, nombremedicamento)
                    .input("cantidad", sql.VarChar, cantidad)
                    .input("precio", sql.VarChar, precio)
                    .input("Finca_idFinca", sql.Int, Finca_idFinca)
                    .query("update medicamentos set nombremedicamento = @nombremedicamento, cantidad = @cantidad, precio = @precio, Finca_idFinca = @Finca_idFinca where idMedicamentos = @idMedicamentos"))
                .then((e) => e.rowsAffected[0]
                    ? res.status(200).json({ message: "Medicamento actualizado" })
                    : res.status(404).json({ message: "Medicamento no encontrado" }))
                .catch((e) => res.status(500).json({ message: e.message }))
            : res.status(400).json({ message: "Faltan campos" });
    },
    deleteMedicamento = (req, res) => {
        conn
            .then((e) => e.request()
                .input("idMedicamentos", sql.Int, req.params.idMedicamentos)
                .query("delete from medicamentos where idMedicamentos = @idMedicamentos"))
            .then((e) => e.rowsAffected[0]
                ? res.status(200).json({ message: "Medicamento eliminado" })
                : res.status(404).json({ message: "Medicamento no encontrado" }))
            .catch((e) => res.status(500).json({ message: e.message }));
    };