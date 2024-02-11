import { Router } from "express";
import { getProduccion, getProducciones, postProduccion, putProduccion, deleteProduccion } from "../Control/ProduccionControl";

const router = Router();

router.get("/produccion", getProducciones);
router.get("/produccion/:idProduccion", getProduccion);
router.post("/produccion", postProduccion);
router.put("/produccion/:idProduccion", putProduccion);
router.delete("/produccion/:idProduccion", deleteProduccion);

export default router;