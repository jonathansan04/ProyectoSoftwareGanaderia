import { Router } from "express";
import { getAnimal, getAnimales, postAnimal, putAnimal, deleteAnimal } from "../Control/AnimalControl";

const router = Router();

router.get("/animal", getAnimales);
router.get("/animal/:idAnimal", getAnimal);
router.post("/animal", postAnimal);
router.put("/animal/:idAnimal", putAnimal);
router.delete("/animal/:idAnimal", deleteAnimal);

export default router;