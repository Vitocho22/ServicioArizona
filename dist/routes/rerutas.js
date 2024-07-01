"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const rerutas_1 = require("../controllers/rerutas");
const router = (0, express_1.Router)();
// Rutas para operaciones CRUD de Ruta
router.post('/rerutas', rerutas_1.createRuta); // Crear un nuevo registro de Ruta
router.get('/rerutas', rerutas_1.getRutas); // Obtener todos los registros de Ruta
router.get('/rerutas/:id', rerutas_1.getRutaById); // Obtener un registro de Ruta por ID
router.put('/rerutas/:id', rerutas_1.updateRuta); // Actualizar un registro de Ruta por ID
router.delete('/rerutas/:id', rerutas_1.deleteRuta); // Eliminar un registro de Ruta por ID
exports.default = router;
