import { Router } from "express";

import { createPersonal, updatePersonal, getPersonalById, getPersonal, deletePersonal } from "../controllers/personal";

const router = Router();

router.get("/personal", getPersonal);
router.get("/personal/:id", getPersonalById);
router.post("/personal", createPersonal);
router.put("/personal/:id", updatePersonal);
router.delete("/personal/:id", deletePersonal);

export default router;