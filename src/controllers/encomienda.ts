import { Request, Response } from "express"
import { Encomienda } from "../models/encomienda";
import { Ruta } from "../models/rerutas";
//import { EstadoRe } from "../models/estadore";

//-------------GET-------------//
export const getEncomiendas = async (req: Request, res: Response) => {
    try {
      const encomiendas = await Encomienda.findAll();
        res.json(encomiendas);
    } catch (error) {
      res.status(400).json({ message: 'Ocurrió un error al obtener las encomiendas.', error });
    }
  };
//por id
export const getEncomiendaById = async (req: Request, res: Response) => {
    try {
      const { id } = req.params; 
      const encomienda = await Encomienda.findByPk(id);

      if (!encomienda) {
        return res.status(404).json({ message: `No se encontró ninguna encomienda con el ID ${id}.` });
      }
  
      res.json(encomienda);
    } catch (error) {
      res.status(400).json({ message: 'Ocurrió un error al obtener la encomienda.', error });
    }
  };
//-------------CREATE-------------//
export const createEncomienda = async (req: Request, res: Response) => {
    try {
      const {
        remitente,
        dni_remi,
        destinatario,
        dni_dest,
        descripcion,
        fechaEnvio,
        fechaEntrega,
        estado, // Nuevo campo para la estadoId
        precio,
        nombreRuta // Nuevo campo para la rutaId
      } = req.body;
  
      // Buscar la ruta por su ID
      /*const ruta: any = await Ruta.findByPk(rutaId);
      if (!ruta) {
        return res.status(404).json({ message: `No se encontró ninguna ruta con el ID ${rutaId}.` });
      }*/
      // Buscar la Estadore por su ID
      /*const estadore: any = await EstadoRe.findByPk(estadoId);
      if (!estadore) {
        return res.status(404).json({ message: `No se encontró ninguna ruta con el ID ${estadoId}.` });
      }*/
      // Crear la nueva encomienda en la base de datos, utilizando el nombre de la ruta
      const nuevaEncomienda = await Encomienda.create({
        remitente,
        dni_remi,
        destinatario,
        dni_dest,
        descripcion,
        fechaEnvio,
        fechaEntrega,
        estado,
        precio,
        nombreRuta // Asignamos el nombre de la ruta encontrado
      });
  
      // Responder con la nueva encomienda creada
      res.status(201).json(nuevaEncomienda);
    } catch (error) {
      // Si ocurre un error, responder con un mensaje de error
      res.status(400).json({ message: 'Ocurrió un error al crear la nueva encomienda.', error });
    }
  };
  
//-------------UPDATE-------------//
export const updateEncomienda = async (req: Request, res: Response) => {
    try {
      const { id } = req.params; // Obtener el ID de la encomienda de los parámetros de la solicitud
    const {
        remitente,
        dni_remi,
        destinatario,
        dni_dest,
        descripcion,
        fechaEnvio,
        fechaEntrega,
        estado,// Nuevo campo para la estadoId
        precio,
        nombreRuta // Nuevo campo para la rutaId
    } = req.body;

      // Verificar si la encomienda existe en la base de datos
    const encomienda = await Encomienda.findByPk(id);
    if (!encomienda) {
        return res.status(404).json({ message: `No se encontró ninguna encomienda con el ID ${id}.` });
    }
      // Buscar la ruta por su ID
    /*const estado: any = await EstadoRe.findByPk(estadoId);
      // Verificar si se encontró la ruta
    if (!estado) {
        return res.status(404).json({ message: `No se encontró ninguna ruta con el ID ${estadoId}.` });
    
      // Buscar la estadore por su ID
      const ruta: any = await Ruta.findByPk(rutaId);
      // Verificar si se encontró la ruta
    if (!ruta) {
        return res.status(404).json({ message: `No se encontró ninguna ruta con el ID ${rutaId}.` });
    }*/
    await encomienda.update({
        remitente,
        dni_remi,
        destinatario,
        dni_dest,
        descripcion,
        fechaEnvio,
        fechaEntrega,
        estado,
        precio,
        nombreRuta // Asignamos el nombre de la ruta encontrado
    });

      // Responder con la encomienda actualizada
    res.json({ message: `Encomienda con ID ${id} actualizada correctamente.` });
    } catch (error) {
      // Si ocurre un error, responder con un mensaje de error
    res.status(400).json({ message: 'Ocurrió un error al actualizar la encomienda.', error });
    }
};
//-------------DELETE-------------//
export const deleteEncomienda = async (req: Request, res: Response) => {
    try {
      const { id } = req.params; 
        const encomienda = await Encomienda.findByPk(id);
    if (!encomienda) {
        return res.status(404).json({ message: `No se encontró ninguna encomienda con el ID ${id}.` });
    }
    await encomienda.destroy();
    res.json({ message: `Encomienda con ID ${id} eliminada correctamente.` });
    } catch (error) {
    res.status(400).json({ message: 'Ocurrió un error al eliminar la encomienda.', error });
    }
};