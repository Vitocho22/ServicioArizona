"use strict";
/*import { Request, Response } from "express"
import { EstadoRe } from "../models/estadore";

//-------------GET-------------//
export const getEstadosRe = async (req: Request, res: Response) => {
    try {
        const estadosRe = await EstadoRe.findAll();
        res.json(estadosRe);
    } catch (error) {
        res.status(500).json({ message: "Error al obtener los estados.", error });
    }
};
//por ID
export const getEstadoReById = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const estadoRe = await EstadoRe.findByPk(id);
        if (!estadoRe) {
        return res.status(404).json({ message: "Estado no encontrado." });
    }
        res.json(estadoRe);
    } catch (error) {
        res.status(500).json({ message: "Error al obtener el estado.", error });
    }
};
//-------------CREATE-------------//
export const createEstadoRe = async (req: Request, res: Response) => {
    try {
        const { estado } = req.body;
        const nuevoEstadoRe = await EstadoRe.create({ estado });
        res.status(201).json(nuevoEstadoRe);
    } catch (error) {
        res.status(400).json({ message: "Error al crear un nuevo estado.", error });
    }
};

//-------------UPDATE-------------//
export const updateEstadoRe = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const { estado } = req.body;

        const estadoRe = await EstadoRe.findByPk(id);
    if (!estadoRe) {
        return res.status(404).json({ message: "Estado no encontrado." });
    }

    await estadoRe.update({ estado });
        res.json({ message: "Estado actualizado correctamente." });
    } catch (error) {
        res.status(400).json({ message: "Error al actualizar el estado.", error });
    }
};

//-------------DELETE-------------//
export const deleteEstadoRe = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const estadoRe = await EstadoRe.findByPk(id);
    if (!estadoRe) {
        return res.status(404).json({ message: "Estado no encontrado." });
    }
    await estadoRe.destroy();
        res.json({ message: "Estado eliminado correctamente." });
    } catch (error) {
        res.status(400).json({ message: "Error al eliminar el estado.", error });
    }
};*/
