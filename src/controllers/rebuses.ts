import { Request, Response } from "express"
import { Rebus } from "../models/rebuses";


//-------------GET-------------//
export const getRebuses = async (req: Request, res: Response) => {
  try {
    const rebuses = await Rebus.findAll();
    res.status(200).json(rebuses);
  } catch (error) {
    res.status(500).json({ message: 'Ocurrió un error al obtener los registros de buses.', error });
  }
};

// Obtener un registro de Rebus por ID
export const getRebusById = async (req: Request, res: Response) => {
  try {
    const rebusId = req.params.id;
    const rebus = await Rebus.findByPk(rebusId);
    if (!rebus) {
      return res.status(404).json({ message: `No se encontró ningún Rebus con el ID ${rebusId}.` });
    }
    res.status(200).json(rebus);
  } catch (error) {
    res.status(500).json({ message: 'Ocurrió un error al obtener el Rebus.', error });
  }
};

//CREATE
export const createRebus = async (req: Request, res: Response) => {
  try {
    // Extraemos los datos del cuerpo de la solicitud
    const { marca, nro_placa, modelo, color, nroserie, nroCarro } = req.body;

    // Verificamos si el número de placa ya existe en la base de datos
    const existingRebusByPlaca = await Rebus.findOne({ where: { nro_placa } });

    if (existingRebusByPlaca) {
      return res.status(400).json({
        msg: `El número de placa ${nro_placa} ya está registrado.`
      });
    }

    // Verificamos si el número de serie ya existe en la base de datos
    const existingRebusBySerie = await Rebus.findOne({ where: { nroserie } });

    if (existingRebusBySerie) {
      return res.status(400).json({
        msg: `El número de serie ${nroserie} ya está registrado.`
      });
    }

    // Creamos el nuevo registro de Rebus
    const newRebus = await Rebus.create({
      marca,
      nro_placa,
      modelo,
      color,
      nroserie,
      nroCarro
    });

    // Respondemos con un mensaje de éxito
    res.status(201).json({
      msg: `Bus con número de placa ${nro_placa} y número de serie ${nroserie} creado correctamente.`,
      data: newRebus
    });
  } catch (error) {
    // Si ocurre algún error, respondemos con un mensaje de error
    res.status(400).json({ message: 'Ocurrió un error al crear el Rebus.', error });
  }
};

//-------------Update-------------//
export const updateRebus = async (req: Request, res: Response) => {
  try {
    // Extraemos el ID del Rebus a actualizar y los nuevos datos del cuerpo de la solicitud
    const rebusId = req.params.id;
    const updateData = req.body;

    // Verificamos si el Rebus a actualizar existe en la base de datos
    const existingRebus: any = await Rebus.findByPk(rebusId);

    if (!existingRebus) {
      return res.status(404).json({
        msg: `No se encontró ningún Rebus con el ID ${rebusId}.`
      });
    }
    // Verificamos si se está intentando cambiar el número de placa por uno ya existente
    if (updateData.nro_placa && updateData.nro_placa !== existingRebus.nro_placa) {
      const existingRebusByPlaca = await Rebus.findOne({ where: { nro_placa: updateData.nro_placa } });
      if (existingRebusByPlaca) {
        return res.status(400).json({
          msg: `El número de placa ${updateData.nro_placa} ya está registrado.`
        });
      }
    }
    // Verificamos si se está intentando cambiar el número de serie por uno ya existente
    if (updateData.nroserie && updateData.nroserie !== existingRebus.nroserie) {
      const existingRebusBySerie = await Rebus.findOne({ where: { nroserie: updateData.nroserie } });
      if (existingRebusBySerie) {
        return res.status(400).json({
          msg: `El número de serie ${updateData.nroserie} ya está registrado.`
        });
      }
    }
    // Actualizamos los datos del Rebus solo con los campos proporcionados en la solicitud
    await existingRebus.update(updateData);

    // Respondemos con un mensaje de éxito
    res.status(200).json({
      msg: `Rebus con ID ${rebusId} actualizado correctamente.`
    });
  } catch (error) {
    // Si ocurre algún error, respondemos con un mensaje de error
    res.status(400).json({ message: 'Ocurrió un error al actualizar el Rebus.', error });
  }
};

//---------DELETE--------
export const deleteRebus = async (req: Request, res: Response) => {
  try {
    const rebusId = req.params.id;
    const deletedRebus = await Rebus.destroy({ where: { id: rebusId } });
    if (!deletedRebus) {
      return res.status(404).json({ message: `No se encontró ningún Rebus con el ID ${rebusId} para eliminar.` });
    }
    res.status(200).json({ message: `Rebus con ID ${rebusId} eliminado correctamente.` });
  } catch (error) {
    res.status(500).json({ message: 'Ocurrió un error al eliminar el Rebus.', error });
  }
};