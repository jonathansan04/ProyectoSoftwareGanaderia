import { Router } from "express";
import { getRaza, getRazas, postRaza, putRaza, deleteRaza } from "../Control/RazaControl";

const router = Router();

router.get("/raza", getRazas);
router.get("/raza/:idRaza", getRaza);
router.post("/raza", postRaza);
router.put("/raza/:idRaza", putRaza);
router.delete("/raza/:idRaza", deleteRaza);

export default router;