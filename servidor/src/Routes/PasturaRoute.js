import { Router } from "express";
import { getPastura, getPasturas, postPastura, putPastura, deletePastura } from "../Control/PasturaControl";

const router = Router();

router.get("/pastura", getPasturas);
router.get("/pastura/:idPastura", getPastura);
router.post("/pastura", postPastura);
router.put("/pastura/:idPastura", putPastura);
router.delete("/pastura/:idPastura", deletePastura);

export default router;