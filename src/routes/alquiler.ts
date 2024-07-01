import { Router } from "express";
import { createAlquiler, deleteAlquiler, getAlquilerById, getAlquiler, updateAlquiler } from "../controllers/alquiler";

const router = Router();

// Rutas para operaciones CRUD de Alquiler
router.post('/alquiler', createAlquiler); 
router.get('/alquiler', getAlquiler); 
router.get('/alquiler/:id', getAlquilerById);
router.put('/alquiler/:id', updateAlquiler); 
router.delete('/alquiler/:id', deleteAlquiler);

export default router;
