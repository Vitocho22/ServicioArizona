"use strict";
/*import { Request, Response } from "express"
import { Estado } from "../models/estado";

//-------------GET-------------//
export const getEstado = async (req: Request, res: Response) => {
    try {
        const estados = await Estado.findAll();
        res.status(200).json(estados);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener los estados', error });
    }
};
//get por id
export const getEstadoById = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const estado = await Estado.findByPk(id);
        if (!estado) {
            return res.status(404).json({ message: 'Estado no encontrado' });
        }
        res.status(200).json(estado);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener el estado', error });
    }
};

//-------------CREATE-------------//
export const createEstado = async (req: Request, res: Response) => {
    const { estado } = req.body;
    try {
        const nuevoEstado = await Estado.create({ estado });
        res.status(201).json(nuevoEstado);
    } catch (error) {
        res.status(400).json({ message: 'Error al crear un nuevo estado', error });
    }
};

//-------------UPDATE-------------//
export const updateEstado = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { estado } = req.body;
    try {
        const estadoActualizado = await Estado.update({ estado }, { where: { id } });
        if (estadoActualizado[0] === 0) {
            return res.status(404).json({ message: 'Estado no encontrado' });
        }
        res.status(200).json({ message: 'Estado actualizado correctamente' });
    } catch (error) {
        res.status(400).json({ message: 'Error al actualizar el estado', error });
    }
};

//-------------DELETE-------------//
export const deleteEstado = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const estadoEliminado = await Estado.destroy({ where: { id } });
        if (!estadoEliminado) {
            return res.status(404).json({ message: 'Estado no encontrado' });
        }
        res.status(200).json({ message: 'Estado eliminado correctamente' });
    } catch (error) {
        res.status(400).json({ message: 'Error al eliminar el estado', error });
    }
};*/
