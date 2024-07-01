"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const encomienda_1 = require("../controllers/encomienda");
const router = (0, express_1.Router)();
// Rutas para operaciones CRUD de Encomienda
router.post('/encomiendas', encomienda_1.createEncomienda); // Crear un nuevo registro de Encomienda
router.get('/encomienda', encomienda_1.getEncomiendas); // Obtener todos los registros de Encomienda
router.get('/encomienda/:id', encomienda_1.getEncomiendaById); // Obtener un registro de Encomienda por ID
router.put('/encomienda/:id', encomienda_1.updateEncomienda); // Actualizar un registro de Encomienda por ID
router.delete('/encomienda/:id', encomienda_1.deleteEncomienda); // Eliminar un registro de Encomienda por ID
exports.default = router;
