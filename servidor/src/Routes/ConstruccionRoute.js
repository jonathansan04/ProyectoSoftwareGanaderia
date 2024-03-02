import { Router } from "express";
import { getConstruccion, getConstrucciones, postConstruccion, putConstruccion, deleteConstruccion } from "../Control/ConstruccionControl";

const router = Router();

router.get("/construccion", getConstrucciones);
router.get("/construccion/:idConstruccion", getConstruccion);
router.post("/construccion", postConstruccion);
router.put("/construccion/:idConstruccion", putConstruccion);
router.delete("/construccion/:idConstruccion", deleteConstruccion);

export default router;