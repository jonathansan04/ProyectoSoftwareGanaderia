import { Router } from "express";
import { login, fields } from "../Controllers/SpecificControllers";

const router = Router();

router.post('/Login', login);
router.get('/Fields/:col', fields);

export default router;