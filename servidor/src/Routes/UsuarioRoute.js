import { Router } from "express";
import { getUsuario, getUsuarios, postUsuario, putUsuario, deleteUsuario } from "../Control/UsuarioControl";

const router = Router();

router.get("/usuario", getUsuarios);
router.get("/usuario/:idUsuario", getUsuario);
router.post("/usuario", postUsuario);
router.put("/usuario/:idUsuario", putUsuario);
router.delete("/usuario/:idUsuario", deleteUsuario);

export default router;