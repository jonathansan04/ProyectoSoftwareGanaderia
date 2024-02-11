import { Router } from "express";
import { getFinca, getFincas, postFinca, putFinca, deleteFinca } from "../Control/FincaControl";

const router = Router();

router.get("/finca", getFincas);
router.get("/finca/:idFinca", getFinca);
router.post("/finca", postFinca);
router.put("/finca/:idFinca", putFinca);
router.delete("/finca/:idFinca", deleteFinca);

export default router;