import { Router } from "express";
import { getEmpleado, getEmpleados, postEmpleado, putEmpleado, deleteEmpleado } from "../Control/EmpleadoControl";

const router = Router();

router.get("/empleado", getEmpleados);
router.get("/empleado/:idEmpleado", getEmpleado);
router.post("/empleado", postEmpleado);
router.put("/empleado/:idEmpleado", putEmpleado);
router.delete("/empleado/:idEmpleado", deleteEmpleado);

export default router;