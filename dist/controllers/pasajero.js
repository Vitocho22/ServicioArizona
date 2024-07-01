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
exports.deletePasajero = exports.updatePasajero = exports.createPasajero = exports.getPasajeroById = exports.getPasajero = void 0;
const pasajero_1 = require("../models/pasajero");
//
//-------------GET-------------//
const getPasajero = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const pasajeros = yield pasajero_1.Pasajero.findAll();
        res.json(pasajeros);
    }
    catch (error) {
        res.status(400).json({ message: 'Ocurrió un error al obtener los pasajeros.', error });
    }
});
exports.getPasajero = getPasajero;
// Obtener un registro de pasajero por su ID
const getPasajeroById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const pasajeroId = req.params.id;
        const pasajero = yield pasajero_1.Pasajero.findByPk(pasajeroId);
        if (!pasajero) {
            return res.status(404).json({ message: `No se encontró ningún pasajero con el ID ${pasajeroId}.` });
        }
        res.json(pasajero);
    }
    catch (error) {
        res.status(400).json({ message: 'Ocurrió un error al obtener el pasajero.', error });
    }
});
exports.getPasajeroById = getPasajeroById;
//-------------CREATE-------------//
const createPasajero = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { pasajero, Apellido, dni, edad, asiento, fechaEmision, fechaViaje, horaViaje, nrocar, origen, destino, precio, estado, } = req.body;
        // Crear el nuevo pasajero en la base de datos
        const nuevoPasajero = yield pasajero_1.Pasajero.create({
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
    }
    catch (error) {
        // Si ocurre un error, responder con un mensaje de error
        res.status(400).json({ message: "Ocurrió un error al crear el nuevo pasajero.", error });
    }
});
exports.createPasajero = createPasajero;
//-------------UPDATE-------------//
const updatePasajero = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const pasajeroId = req.params.id; // Obtener el ID del pasajero de los parámetros de la solicitud
        const { pasajero, Apellido, dni, edad, asiento, fechaEmision, fechaViaje, horaViaje, nrocar, origen, destino, precio, estado } = req.body;
        // Verificar si el pasajero existe en la base de datos
        const pasajeroExistente = yield pasajero_1.Pasajero.findByPk(pasajeroId);
        if (!pasajeroExistente) {
            return res.status(404).json({ message: `No se encontró ningún pasajero con el ID ${pasajeroId}.` });
        }
        yield pasajeroExistente.update({
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
    }
    catch (error) {
        // Si ocurre un error, responder con un mensaje de error
        res.status(400).json({ message: 'Ocurrió un error al actualizar el pasajero.', error });
    }
});
exports.updatePasajero = updatePasajero;
//-------------DELETE-------------//
const deletePasajero = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const pasajeroId = req.params.id;
        const pasajeroExistente = yield pasajero_1.Pasajero.findByPk(pasajeroId);
        if (!pasajeroExistente) {
            return res.status(404).json({ message: `No se encontró ningún pasajero con el ID ${pasajeroId}.` });
        }
        yield pasajero_1.Pasajero.destroy({
            where: { id: pasajeroId }
        });
        res.json({ message: `Pasajero con ID ${pasajeroId} eliminado exitosamente.` });
    }
    catch (error) {
        res.status(400).json({ message: 'Ocurrió un error al eliminar el pasajero.', error });
    }
});
exports.deletePasajero = deletePasajero;
