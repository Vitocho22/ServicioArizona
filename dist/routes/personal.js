"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const personal_1 = require("../controllers/personal");
const router = (0, express_1.Router)();
router.get("/personal", personal_1.getPersonal);
router.get("/personal/:id", personal_1.getPersonalById);
router.post("/personal", personal_1.createPersonal);
router.put("/personal/:id", personal_1.updatePersonal);
router.delete("/personal/:id", personal_1.deletePersonal);
exports.default = router;
