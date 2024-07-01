import { Router } from "express";
import { createRebus, updateRebus, getRebuses, getRebusById, deleteRebus } from "../controllers/rebuses";

const router = Router();

// Rutas para operaciones CRUD de Rebus
router.post('/rebuses', createRebus); // Crear un nuevo registro de Rebus
router.get('/rebuses', getRebuses); // Obtener todos los registros de Rebus
router.get('/rebuses/:id', getRebusById); // Obtener un registro de Rebus por ID
router.put('/rebuses/:id', updateRebus); // Actualizar un registro de Rebus por ID
router.delete('/rebuses/:id', deleteRebus); // Eliminar un registro de Rebus por ID
export  default router;

