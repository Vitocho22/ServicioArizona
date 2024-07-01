import { Request, Response } from "express"
import { Pasajero } from "../models/pasajero";
import { Ruta } from "../models/rerutas";
//

//-------------GET-------------//
export const getPasajero = async (req: Request, res: Response) => {
  try {
    const pasajeros = await Pasajero.findAll();
    res.json(pasajeros);
  } catch (error) {
    res.status(400).json({ message: 'Ocurrió un error al obtener los pasajeros.', error });
  }
};

// Obtener un registro de pasajero por su ID
export const getPasajeroById = async (req: Request, res: Response) => {
  try {
    const pasajeroId = req.params.id;
    const pasajero = await Pasajero.findByPk(pasajeroId);
    if (!pasajero) {
      return res.status(404).json({ message: `No se encontró ningún pasajero con el ID ${pasajeroId}.` });
    }
    res.json(pasajero);
  } catch (error) {
    res.status(400).json({ message: 'Ocurrió un error al obtener el pasajero.', error });
  }
};

//-------------CREATE-------------//
export const createPasajero = async (req: Request, res: Response) => {
  try {
      const {
          pasajero,
          Apellido,
          dni,
          edad,
          asiento,
          fechaEmision,
          fechaViaje,
          horaViaje,
          nrocar,
          origen,
          destino,
          precio,
          estado,
      } = req.body;

      // Crear el nuevo pasajero en la base de datos
      const nuevoPasajero = await Pasajero.create({
          pasajero,
          Apellido,
          dni,
          edad,
          asiento,
          fechaEmision,
          fechaViaje,
          horaViaje,
          nrocar,
          origen, // Asignar el nombre de la ruta de origen
          destino, // Asignar el nombre de la ruta de destino
          precio,
          estado // Asignar el nombre del estado
      });

      // Responder con el nuevo pasajero creado
      res.status(201).json(nuevoPasajero);
  } catch (error) {
      // Si ocurre un error, responder con un mensaje de error
      res.status(400).json({ message: "Ocurrió un error al crear el nuevo pasajero.", error });
  }
};
//-------------UPDATE-------------//
export const updatePasajero = async (req: Request, res: Response) => {
  try {
    const pasajeroId = req.params.id; // Obtener el ID del pasajero de los parámetros de la solicitud
    const {
      pasajero,
      Apellido,
      dni,
      edad,
      asiento,
      fechaEmision,
      fechaViaje,
      horaViaje,
      nrocar,
      origen,
      destino,
      precio,
      estado
    } = req.body;

    // Verificar si el pasajero existe en la base de datos
    const pasajeroExistente = await Pasajero.findByPk(pasajeroId);
    if (!pasajeroExistente) {
      return res.status(404).json({ message: `No se encontró ningún pasajero con el ID ${pasajeroId}.` });
    }
    await pasajeroExistente.update({
      pasajero,
      Apellido,
      dni,
      edad,
      asiento,
      fechaEmision,
      fechaViaje,
      horaViaje,
      nrocar,
      origen, // Asignar el nombre de la ruta de origen
      destino, // Asignar el nombre de la ruta de destino
      precio,
      estado // Asignar el nombre del estado
    });

    // Responder con el pasajero actualizado
    res.json(pasajeroExistente);
  } catch (error) {
    // Si ocurre un error, responder con un mensaje de error
    res.status(400).json({ message: 'Ocurrió un error al actualizar el pasajero.', error });
  }
};
//-------------DELETE-------------//
export const deletePasajero = async (req: Request, res: Response) => {
  try {
    const pasajeroId = req.params.id;

    const pasajeroExistente = await Pasajero.findByPk(pasajeroId);
    if (!pasajeroExistente) {
      return res.status(404).json({ message: `No se encontró ningún pasajero con el ID ${pasajeroId}.` });
    }

    await Pasajero.destroy({
      where: { id: pasajeroId }
    });

    res.json({ message: `Pasajero con ID ${pasajeroId} eliminado exitosamente.` });
  } catch (error) {

    res.status(400).json({ message: 'Ocurrió un error al eliminar el pasajero.', error });
  }
};