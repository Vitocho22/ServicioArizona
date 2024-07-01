import { Router } from "express";
import { createPasajero, deletePasajero, getPasajeroById, getPasajero, updatePasajero, } from "../controllers/pasajero";
const router = Router();

// Rutas para operaciones CRUD de Pasajero
router.post('/pasajero', createPasajero); // Crear un nuevo registro de Pasajero
router.get('/pasajero', getPasajero); // Obtener todos los registros de Pasajero
router.get('/pasajero/:id', getPasajeroById); // Obtener un registro de Pasajero por ID
router.put('/pasajero/:id', updatePasajero); // Actualizar un registro de Pasajero por ID
router.delete('/pasajero/:id', deletePasajero); // Eliminar un registro de Pasajero por ID

export default router;
