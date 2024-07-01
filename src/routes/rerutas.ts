import { Router } from "express";
import { createRuta, updateRuta, getRutas, getRutaById, deleteRuta } from "../controllers/rerutas";

const router = Router();

// Rutas para operaciones CRUD de Ruta
router.post('/rerutas', createRuta); // Crear un nuevo registro de Ruta
router.get('/rerutas', getRutas); // Obtener todos los registros de Ruta
router.get('/rerutas/:id', getRutaById); // Obtener un registro de Ruta por ID
router.put('/rerutas/:id', updateRuta); // Actualizar un registro de Ruta por ID
router.delete('/rerutas/:id', deleteRuta); // Eliminar un registro de Ruta por ID
export  default router;