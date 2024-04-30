import { Router } from "express";
import controllers from "../Controllers/DefaultControllers";

const router = Router();

const keys = Object.keys(controllers);

keys.forEach(key => {
    router.get(`/${key}`, controllers[key].get);
    router.get(`/${key}/:id`, controllers[key].getById);
    router.post(`/${key}`, controllers[key].post);
    router.put(`/${key}/:id`, controllers[key].put);
    router.delete(`/${key}/:id`, controllers[key].delete);
});

export default router;