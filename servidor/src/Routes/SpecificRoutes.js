import { Router } from "express";
import { login, fields, collections } from "../Controllers/SpecificControllers";

const router = Router();

router.post('/Login', login);
router.get('/Fields/:col', fields);
router.get('/Collections', collections);

export default router;