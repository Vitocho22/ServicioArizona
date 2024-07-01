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
exports.deleteAlquiler = exports.updateAlquiler = exports.createAlquiler = exports.getAlquilerById = exports.getAlquiler = void 0;
const alquiler_1 = require("../models/alquiler");
//-------------GET-------------//
const getAlquiler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const alquileres = yield alquiler_1.Alquiler.findAll();
        res.json(alquileres);
    }
    catch (error) {
        res.status(400).json({ message: 'Ocurrió un error al obtener los alquileres.', error });
    }
});
exports.getAlquiler = getAlquiler;
// Obtener un registro de alquiler por su ID
const getAlquilerById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const alquilerId = req.params.id;
        const alquiler = yield alquiler_1.Alquiler.findByPk(alquilerId);
        if (!alquiler) {
            return res.status(404).json({ message: `No se encontró ningún alquiler con el ID ${alquilerId}.` });
        }
        res.json(alquiler);
    }
    catch (error) {
        res.status(400).json({ message: 'Ocurrió un error al obtener el alquiler.', error });
    }
});
exports.getAlquilerById = getAlquilerById;
//-------------CREATE-------------//
const createAlquiler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { fechaInicio, fechaFin, origen, destino, duracion, nombre, apellido, dni, telefono, precio } = req.body;
        const nuevoAlquiler = yield alquiler_1.Alquiler.create({
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
    }
    catch (error) {
        // Si ocurre un error, responder con un mensaje de error
        res.status(400).json({ message: 'Ocurrió un error al crear el nuevo alquiler.', error });
    }
});
exports.createAlquiler = createAlquiler;
//-------------UPDATE-------------//
const updateAlquiler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const alquilerId = req.params.id;
        const { fechaInicio, fechaFin, origen, destino, duracion, nombre, apellido, dni, telefono, precio } = req.body;
        // Verificar si el alquiler existe
        const alquiler = yield alquiler_1.Alquiler.findByPk(alquilerId);
        if (!alquiler) {
            return res.status(404).json({ message: `No se encontró ningún alquiler con el ID ${alquilerId}.` });
        }
        // Actualizar los datos del alquiler
        yield alquiler.update({
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
    }
    catch (error) {
        // Si ocurre un error, responder con un mensaje de error
        res.status(400).json({ message: 'Ocurrió un error al actualizar el alquiler.', error });
    }
});
exports.updateAlquiler = updateAlquiler;
//-------------DELETE-------------//
const deleteAlquiler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const alquilerId = req.params.id;
        const alquiler = yield alquiler_1.Alquiler.findByPk(alquilerId);
        if (!alquiler) {
            return res.status(404).json({ message: `No se encontró ningún alquiler con el ID ${alquilerId}.` });
        }
        yield alquiler.destroy();
        res.json({ message: `El alquiler con ID ${alquilerId} ha sido eliminado exitosamente.` });
    }
    catch (error) {
        res.status(400).json({ message: 'Ocurrió un error al eliminar el alquiler.', error });
    }
});
exports.deleteAlquiler = deleteAlquiler;
