import { Router } from "express";
import { getTipoRaza, getTipoRazas, postTipoRaza, putTipoRaza, deleteTipoRaza } from "../Control/TipoRazaControl";

const router = Router();

router.get("/tipoRaza", getTipoRazas);
router.get("/tipoRaza/:idTipoRaza", getTipoRaza);
router.post("/tipoRaza", postTipoRaza);
router.put("/tipoRaza/:idTipoRaza", putTipoRaza);
router.delete("/tipoRaza/:idTipoRaza", deleteTipoRaza);

export default router;