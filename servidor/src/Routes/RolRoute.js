import { Router } from "express";
import { getRol, getRoles, postRol, putRol, deleteRol } from "../Control/RolControl";

const router = Router();

router.get("/rol", getRoles);
router.get("/rol/:idRol", getRol);
router.post("/rol", postRol);
router.put("/rol/:idRol", putRol);
router.delete("/rol/:idRol", deleteRol);

export default router;