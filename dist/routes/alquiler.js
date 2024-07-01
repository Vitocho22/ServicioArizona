"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const alquiler_1 = require("../controllers/alquiler");
const router = (0, express_1.Router)();
// Rutas para operaciones CRUD de Alquiler
router.post('/alquiler', alquiler_1.createAlquiler);
router.get('/alquiler', alquiler_1.getAlquiler);
router.get('/alquiler/:id', alquiler_1.getAlquilerById);
router.put('/alquiler/:id', alquiler_1.updateAlquiler);
router.delete('/alquiler/:id', alquiler_1.deleteAlquiler);
exports.default = router;
