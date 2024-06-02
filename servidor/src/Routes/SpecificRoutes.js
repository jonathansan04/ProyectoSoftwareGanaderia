import { Router } from "express";
import { login, fields, collections, upload } from "../Controllers/SpecificControllers";
import multer from "multer";

const router = Router();
const storage = multer.memoryStorage();
const up = multer({ storage: storage });

router.post('/Login', login);
router.get('/Fields/:col', fields);
router.get('/Collections', collections);
router.post('/Upload', up.single("file"), upload);

export default router;