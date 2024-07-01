import { Request, Response } from "express"
import { Alquiler } from "../models/alquiler";

//-------------GET-------------//
export const getAlquiler = async (req: Request, res: Response) => {
    try {
    const alquileres = await Alquiler.findAll();
    res.json(alquileres);
    } catch (error) {
    res.status(400).json({ message: 'Ocurrió un error al obtener los alquileres.', error });
    }
};
// Obtener un registro de alquiler por su ID
export const getAlquilerById = async (req: Request, res: Response) => {
    try {
        const alquilerId = req.params.id;
    const alquiler = await Alquiler.findByPk(alquilerId);
    if (!alquiler) {
        return res.status(404).json({ message: `No se encontró ningún alquiler con el ID ${alquilerId}.` });
    }
    res.json(alquiler);
    } catch (error) {
    res.status(400).json({ message: 'Ocurrió un error al obtener el alquiler.', error });
    }
};
//-------------CREATE-------------//
export const createAlquiler = async (req: Request, res: Response) => {
    try {
    const {
        fechaInicio,
        fechaFin,
        origen,
        destino,
        duracion,
        nombre,
        apellido,
        dni,
        telefono,
        precio
    } = req.body;

    const nuevoAlquiler = await Alquiler.create({
        fechaInicio,
        fechaFin,
        origen,
        destino,
        duracion,
        nombre,
        apellido,
        dni,
        telefono,
        precio
    });
      // Responder con el nuevo alquiler creado
        res.status(201).json(nuevoAlquiler);
    } catch (error) {
      // Si ocurre un error, responder con un mensaje de error
        res.status(400).json({ message: 'Ocurrió un error al crear el nuevo alquiler.', error });
    }
};

//-------------UPDATE-------------//
export const updateAlquiler = async (req: Request, res: Response) => {
    try {
    const alquilerId = req.params.id;
    const {
        fechaInicio,
        fechaFin,
        origen,
        destino,
        duracion,
        nombre,
        apellido,
        dni,
        telefono,
        precio
    } = req.body;

      // Verificar si el alquiler existe
    const alquiler = await Alquiler.findByPk(alquilerId);
    if (!alquiler) {
        return res.status(404).json({ message: `No se encontró ningún alquiler con el ID ${alquilerId}.` });
    }

      // Actualizar los datos del alquiler
    await alquiler.update({
        fechaInicio,
        fechaFin,
        origen,
        destino,
        duracion,
        nombre,
        apellido,
        dni,
        telefono,
        precio
    });

      // Responder con el alquiler actualizado
        res.json(alquiler);
    } catch (error) {
      // Si ocurre un error, responder con un mensaje de error
        res.status(400).json({ message: 'Ocurrió un error al actualizar el alquiler.', error });
    }
};
//-------------DELETE-------------//
export const deleteAlquiler = async (req: Request, res: Response) => {
try {
    const alquilerId = req.params.id;

    const alquiler = await Alquiler.findByPk(alquilerId);
    if (!alquiler) {
        return res.status(404).json({ message: `No se encontró ningún alquiler con el ID ${alquilerId}.` });
    }
    await alquiler.destroy();

    res.json({ message: `El alquiler con ID ${alquilerId} ha sido eliminado exitosamente.` });
} catch (error) {
    res.status(400).json({ message: 'Ocurrió un error al eliminar el alquiler.', error });
    }
};
