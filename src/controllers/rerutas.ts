import { Request, Response } from "express"
import { Ruta } from "../models/rerutas";

//-------------GET-------------//
// Obtener todas las rutas
export const getRutas = async (req: Request, res: Response) => {
    try {
        const rutas = await Ruta.findAll();
        res.status(200).json(rutas);
    } catch (error) {
        res.status(500).json({ message: 'Ocurrió un error al obtener las rutas.', error });
    }
};

// Obtener una ruta por su ID
export const getRutaById = async (req: Request, res: Response) => {
    try {
        const rutaId = req.params.id;
        const ruta = await Ruta.findByPk(rutaId);
        if (!ruta) {
            return res.status(404).json({ message: `No se encontró ninguna Ruta con el ID ${rutaId}.` });
        }
        res.status(200).json(ruta);
    } catch (error) {
        res.status(500).json({ message: 'Ocurrió un error al obtener la Ruta.', error });
    }
};

//-------------CREATE-------------//
export const createRuta = async (req: Request, res: Response) => {
    try {
        const { ruta, estado } = req.body;
        const nuevaRuta = await Ruta.create({ ruta, estado });
        res.status(201).json(nuevaRuta);
    } catch (error) {
        res.status(400).json({ message: 'Ocurrió un error al crear la nueva ruta.', error });
    }
};

//-------------UPDATE-------------//
export const updateRuta = async (req: Request, res: Response) => {
    try {
        const rutaId = req.params.id;
        const { ruta, estado } = req.body;
        const existingRuta = await Ruta.findByPk(rutaId);
        if (!existingRuta) {
            return res.status(404).json({ message: `No se encontró ninguna Ruta con el ID ${rutaId}.` });
        }
        await existingRuta.update({ ruta, estado });
        res.status(200).json({ message: `Ruta con ID ${rutaId} actualizada correctamente.` });
    } catch (error) {
        res.status(400).json({ message: 'Ocurrió un error al actualizar la ruta.', error });
    }
};

//-------------DELETE-------------//
export const deleteRuta = async (req: Request, res: Response) => {
    try {
        const rutaId = req.params.id;
        const existingRuta = await Ruta.findByPk(rutaId);
        if (!existingRuta) {
            return res.status(404).json({ message: `No se encontró ninguna Ruta con el ID ${rutaId}.` });
        }
        await existingRuta.destroy();
        res.status(200).json({ message: `Ruta con ID ${rutaId} eliminada correctamente.` });
    } catch (error) {
        res.status(400).json({ message: 'Ocurrió un error al eliminar la ruta.', error });
    }
};