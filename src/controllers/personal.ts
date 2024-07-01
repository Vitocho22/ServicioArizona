import { Request, Response } from "express";
import { Personal } from "../models/personal";

//-------------GET-------------//
// Obtener todo el personal
export const getPersonal = async (req: Request, res: Response) => {
    try {
        const personal = await Personal.findAll();
        res.status(200).json(personal);
    } catch (error) {
        res.status(500).json({ message: 'Ocurrió un error al obtener el personal.', error });
    }
};

// Obtener una persona por su ID
export const getPersonalById = async (req: Request, res: Response) => {
    try {
        const personalId = req.params.id;
        const persona = await Personal.findByPk(personalId);
        if (!persona) {
            return res.status(404).json({ message: `No se encontró ninguna persona con el ID ${personalId}.` });
        }
        res.status(200).json(persona);
    } catch (error) {
        res.status(500).json({ message: 'Ocurrió un error al obtener la persona.', error });
    }
};

//-------------CREATE-------------//
export const createPersonal = async (req: Request, res: Response) => {
    try {
        const { 
            nombres, apellidos, nroDNI, celular, genero, fechaNacimiento, edad, email, 
            direccion, departamento, provincia, distrito, perfil 
        } = req.body;
        const nuevaPersona = await Personal.create({
            nombres, apellidos, nroDNI, celular, genero, fechaNacimiento, edad, email,
            direccion, departamento, provincia, distrito, perfil
        });
        res.status(201).json(nuevaPersona);
    } catch (error) {
        res.status(400).json({ message: 'Ocurrió un error al crear la nueva persona.', error });
    }
};

//-------------UPDATE-------------//
export const updatePersonal = async (req: Request, res: Response) => {
    try {
        const personalId = req.params.id;
        const {
            nombres, apellidos, nroDNI, celular, genero, fechaNacimiento, edad, email,
            direccion, departamento, provincia, distrito, perfil
        } = req.body;
        const existingPersona = await Personal.findByPk(personalId);
        if (!existingPersona) {
            return res.status(404).json({ message: `No se encontró ninguna persona con el ID ${personalId}.` });
        }
        await existingPersona.update({
            nombres, apellidos, nroDNI, celular, genero, fechaNacimiento, edad, email,
            direccion, departamento, provincia, distrito, perfil
        });
        res.status(200).json({ message: `Persona con ID ${personalId} actualizada correctamente.` });
    } catch (error) {
        res.status(400).json({ message: 'Ocurrió un error al actualizar la persona.', error });
    }
};

//-------------DELETE-------------//
export const deletePersonal = async (req: Request, res: Response) => {
    try {
        const personalId = req.params.id;
        const existingPersona = await Personal.findByPk(personalId);
        if (!existingPersona) {
            return res.status(404).json({ message: `No se encontró ninguna persona con el ID ${personalId}.` });
        }
        await existingPersona.destroy();
        res.status(200).json({ message: `Persona con ID ${personalId} eliminada correctamente.` });
    } catch (error) {
        res.status(400).json({ message: 'Ocurrió un error al eliminar la persona.', error });
    }
};