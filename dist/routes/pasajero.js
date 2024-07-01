"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const pasajero_1 = require("../controllers/pasajero");
const router = (0, express_1.Router)();
// Rutas para operaciones CRUD de Pasajero
router.post('/pasajero', pasajero_1.createPasajero); // Crear un nuevo registro de Pasajero
router.get('/pasajero', pasajero_1.getPasajero); // Obtener todos los registros de Pasajero
router.get('/pasajero/:id', pasajero_1.getPasajeroById); // Obtener un registro de Pasajero por ID
router.put('/pasajero/:id', pasajero_1.updatePasajero); // Actualizar un registro de Pasajero por ID
router.delete('/pasajero/:id', pasajero_1.deletePasajero); // Eliminar un registro de Pasajero por ID
exports.default = router;
