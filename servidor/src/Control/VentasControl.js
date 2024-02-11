import { conn, sql } from "../DB/connection";

/*-- -----------------------------------------------------
-- Table Ventas
-- -----------------------------------------------------
CREATE TABLE Ventas(
  idVentas INT NOT NULL identity(1,1),
  fecha DATE NOT NULL,
  cantidaddeanimales VARCHAR(45) NOT NULL,
  idEmpleado INT NOT NULL,
  PRIMARY KEY (idVentas),
  CONSTRAINT idEmpleado
    FOREIGN KEY (idEmpleado)
    REFERENCES Empleado(idEmpleado));*/

export let getVentas = (req, res) => {
    conn
        .then((e) => e.request().query("select * from ventas"))
        .then((e) => e.recordset.length > 0
            ? res.status(200).json(e.recordset)
            : res.status(404).json({ message: "No hay ventas registradas" }))
        .catch((e) => res.status(500).json({ message: e.message }));
},
    getVenta = (req, res) => {
        conn
            .then((e) => e.request()
                .input("idVentas", sql.Int, req.params.idVentas)
                .query("select * from ventas where idVentas = @idVentas"))
            .then((e) => e.recordset[0]
                ? res.status(200).json(e.recordset[0])
                : res.status(404).json({ message: "Venta no encontrada" }))
            .catch((e) => res.status(500).json({ message: e.message }));
    },
    postVenta = (req, res) => {
        let { fecha, cantidaddeanimales, idEmpleado } = req.body;
        fecha && cantidaddeanimales && idEmpleado
            ? conn
                .then((e) => e.request()
                    .input("fecha", sql.Date, fecha)
                    .input("cantidaddeanimales", sql.VarChar, cantidaddeanimales)
                    .input("idEmpleado", sql.Int, idEmpleado)
                    .query("insert into ventas values(@fecha, @cantidaddeanimales, @idEmpleado)"))
                .then((e) => res.status(201).json({ message: "Venta creada" }))
                .catch((e) => res.status(500).json({ message: e.message }))
            : res.status(400).json({ message: "Faltan campos" });
    },
    putVenta = (req, res) => {
        let { fecha, cantidaddeanimales, idEmpleado } = req.body;
        fecha && cantidaddeanimales && idEmpleado
            ? conn
                .then((e) => e.request()
                    .input("idVentas", sql.Int, req.params.idVentas)
                    .input("fecha", sql.Date, fecha)
                    .input("cantidaddeanimales", sql.VarChar, cantidaddeanimales)
                    .input("idEmpleado", sql.Int, idEmpleado)
                    .query("update ventas set fecha = @fecha, cantidaddeanimales = @cantidaddeanimales, idEmpleado = @idEmpleado where idVentas = @idVentas"))
                .then((e) => e.rowsAffected[0]
                    ? res.status(200).json({ message: "Venta actualizada" })
                    : res.status(404).json({ message: "Venta no encontrada" }))
                .catch((e) => res.status(500).json({ message: e.message }))
            : res.status(400).json({ message: "Faltan campos" });
    },
    deleteVenta = (req, res) => {
        conn
            .then((e) => e.request()
                .input("idVentas", sql.Int, req.params.idVentas)
                .query("delete from ventas where idVentas = @idVentas"))
            .then((e) => e.rowsAffected[0]
                ? res.status(200).json({ message: "Venta eliminada" })
                : res.status(404).json({ message: "Venta no encontrada" }))
            .catch((e) => res.status(500).json({ message: e.message }));
    };