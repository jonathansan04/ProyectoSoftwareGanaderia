import { Router } from "express";
import { getVacunacion, getVacunaciones, postVacunacion, putVacunacion, deleteVacunacion } from "../Control/VacunacionControl";

const router = Router();

router.get("/vacunacion", getVacunaciones);
router.get("/vacunacion/:idVacunacion", getVacunacion);
router.post("/vacunacion", postVacunacion);
router.put("/vacunacion/:idVacunacion", putVacunacion);
router.delete("/vacunacion/:idVacunacion", deleteVacunacion);

export default router;