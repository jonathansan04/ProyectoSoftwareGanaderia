import { Router } from "express";
import { login } from "../Controllers/SpecificControllers";

const router = Router();

router.post('/Login', login);

export default router;