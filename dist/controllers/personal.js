"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deletePersonal = exports.updatePersonal = exports.createPersonal = exports.getPersonalById = exports.getPersonal = void 0;
const personal_1 = require("../models/personal");
//-------------GET-------------//
// Obtener todo el personal
const getPersonal = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const personal = yield personal_1.Personal.findAll();
        res.status(200).json(personal);
    }
    catch (error) {
        res.status(500).json({ message: 'Ocurrió un error al obtener el personal.', error });
    }
});
exports.getPersonal = getPersonal;
// Obtener una persona por su ID
const getPersonalById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const personalId = req.params.id;
        const persona = yield personal_1.Personal.findByPk(personalId);
        if (!persona) {
            return res.status(404).json({ message: `No se encontró ninguna persona con el ID ${personalId}.` });
        }
        res.status(200).json(persona);
    }
    catch (error) {
        res.status(500).json({ message: 'Ocurrió un error al obtener la persona.', error });
    }
});
exports.getPersonalById = getPersonalById;
//-------------CREATE-------------//
const createPersonal = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { nombres, apellidos, nroDNI, celular, genero, fechaNacimiento, edad, email, direccion, departamento, provincia, distrito, perfil } = req.body;
        const nuevaPersona = yield personal_1.Personal.create({
            nombres, apellidos, nroDNI, celular, genero, fechaNacimiento, edad, email,
            direccion, departamento, provincia, distrito, perfil
        });
        res.status(201).json(nuevaPersona);
    }
    catch (error) {
        res.status(400).json({ message: 'Ocurrió un error al crear la nueva persona.', error });
    }
});
exports.createPersonal = createPersonal;
//-------------UPDATE-------------//
const updatePersonal = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const personalId = req.params.id;
        const { nombres, apellidos, nroDNI, celular, genero, fechaNacimiento, edad, email, direccion, departamento, provincia, distrito, perfil } = req.body;
        const existingPersona = yield personal_1.Personal.findByPk(personalId);
        if (!existingPersona) {
            return res.status(404).json({ message: `No se encontró ninguna persona con el ID ${personalId}.` });
        }
        yield existingPersona.update({
            nombres, apellidos, nroDNI, celular, genero, fechaNacimiento, edad, email,
            direccion, departamento, provincia, distrito, perfil
        });
        res.status(200).json({ message: `Persona con ID ${personalId} actualizada correctamente.` });
    }
    catch (error) {
        res.status(400).json({ message: 'Ocurrió un error al actualizar la persona.', error });
    }
});
exports.updatePersonal = updatePersonal;
//-------------DELETE-------------//
const deletePersonal = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const personalId = req.params.id;
        const existingPersona = yield personal_1.Personal.findByPk(personalId);
        if (!existingPersona) {
            return res.status(404).json({ message: `No se encontró ninguna persona con el ID ${personalId}.` });
        }
        yield existingPersona.destroy();
        res.status(200).json({ message: `Persona con ID ${personalId} eliminada correctamente.` });
    }
    catch (error) {
        res.status(400).json({ message: 'Ocurrió un error al eliminar la persona.', error });
    }
});
exports.deletePersonal = deletePersonal;
