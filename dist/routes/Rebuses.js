"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const rebuses_1 = require("../controllers/rebuses");
const router = (0, express_1.Router)();
// Rutas para operaciones CRUD de Rebus
router.post('/rebuses', rebuses_1.createRebus); // Crear un nuevo registro de Rebus
router.get('/rebuses', rebuses_1.getRebuses); // Obtener todos los registros de Rebus
router.get('/rebuses/:id', rebuses_1.getRebusById); // Obtener un registro de Rebus por ID
router.put('/rebuses/:id', rebuses_1.updateRebus); // Actualizar un registro de Rebus por ID
router.delete('/rebuses/:id', rebuses_1.deleteRebus); // Eliminar un registro de Rebus por ID
exports.default = router;
