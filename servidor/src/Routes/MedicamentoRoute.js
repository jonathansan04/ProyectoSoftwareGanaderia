import { Router } from "express";
import { getMedicamento, getMedicamentos, postMedicamento, putMedicamento, deleteMedicamento } from "../Control/MedicamentoControl";

const router = Router();

router.get("/medicamento", getMedicamentos);
router.get("/medicamento/:idMedicamento", getMedicamento);
router.post("/medicamento", postMedicamento);
router.put("/medicamento/:idMedicamento", putMedicamento);
router.delete("/medicamento/:idMedicamento", deleteMedicamento);

export default router;