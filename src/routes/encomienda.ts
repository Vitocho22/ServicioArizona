import { Router } from "express";
import { createEncomienda, getEncomiendaById, updateEncomienda, deleteEncomienda, getEncomiendas } from "../controllers/encomienda";

const router = Router();

// Rutas para operaciones CRUD de Encomienda
router.post('/encomiendas', createEncomienda); // Crear un nuevo registro de Encomienda
router.get('/encomienda', getEncomiendas); // Obtener todos los registros de Encomienda
router.get('/encomienda/:id', getEncomiendaById); // Obtener un registro de Encomienda por ID
router.put('/encomienda/:id', updateEncomienda); // Actualizar un registro de Encomienda por ID
router.delete('/encomienda/:id', deleteEncomienda); // Eliminar un registro de Encomienda por ID

export default router;
