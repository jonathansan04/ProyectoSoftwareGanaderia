import { Router } from "express";
import { getPotrero, getPotreros, postPotrero, putPotrero, deletePotrero } from "../Control/PotreroControl";

const router = Router();

router.get("/potrero", getPotreros);
router.get("/potrero/:idPotrero", getPotrero);
router.post("/potrero", postPotrero);
router.put("/potrero/:idPotrero", putPotrero);
router.delete("/potrero/:idPotrero", deletePotrero);

export default router;