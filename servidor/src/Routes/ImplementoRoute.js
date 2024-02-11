import { Router } from "express";
import { getImplemento, getImplementos, postImplemento, putImplemento, deleteImplemento } from "../Control/ImplementoControl";

const router = Router();

router.get("/implemento", getImplementos);
router.get("/implemento/:idImplemento", getImplemento);
router.post("/implemento", postImplemento);
router.put("/implemento/:idImplemento", putImplemento);
router.delete("/implemento/:idImplemento", deleteImplemento);

export default router;