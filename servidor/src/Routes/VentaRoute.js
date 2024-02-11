import { Router } from "express";
import { getVenta, getVentas, postVenta, putVenta, deleteVenta } from "../Control/VentasControl";

const router = Router();

router.get("/venta", getVentas);
router.get("/venta/:idVenta", getVenta);
router.post("/venta", postVenta);
router.put("/venta/:idVenta", putVenta);
router.delete("/venta/:idVenta", deleteVenta);

export default router;