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
exports.deleteEncomienda = exports.updateEncomienda = exports.createEncomienda = exports.getEncomiendaById = exports.getEncomiendas = void 0;
const encomienda_1 = require("../models/encomienda");
//import { EstadoRe } from "../models/estadore";
//-------------GET-------------//
const getEncomiendas = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const encomiendas = yield encomienda_1.Encomienda.findAll();
        res.json(encomiendas);
    }
    catch (error) {
        res.status(400).json({ message: 'Ocurrió un error al obtener las encomiendas.', error });
    }
});
exports.getEncomiendas = getEncomiendas;
//por id
const getEncomiendaById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const encomienda = yield encomienda_1.Encomienda.findByPk(id);
        if (!encomienda) {
            return res.status(404).json({ message: `No se encontró ninguna encomienda con el ID ${id}.` });
        }
        res.json(encomienda);
    }
    catch (error) {
        res.status(400).json({ message: 'Ocurrió un error al obtener la encomienda.', error });
    }
});
exports.getEncomiendaById = getEncomiendaById;
//-------------CREATE-------------//
const createEncomienda = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { remitente, dni_remi, destinatario, dni_dest, descripcion, fechaEnvio, fechaEntrega, estado, // Nuevo campo para la estadoId
        precio, nombreRuta // Nuevo campo para la rutaId
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
        const nuevaEncomienda = yield encomienda_1.Encomienda.create({
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
    }
    catch (error) {
        // Si ocurre un error, responder con un mensaje de error
        res.status(400).json({ message: 'Ocurrió un error al crear la nueva encomienda.', error });
    }
});
exports.createEncomienda = createEncomienda;
//-------------UPDATE-------------//
const updateEncomienda = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params; // Obtener el ID de la encomienda de los parámetros de la solicitud
        const { remitente, dni_remi, destinatario, dni_dest, descripcion, fechaEnvio, fechaEntrega, estado, // Nuevo campo para la estadoId
        precio, nombreRuta // Nuevo campo para la rutaId
         } = req.body;
        // Verificar si la encomienda existe en la base de datos
        const encomienda = yield encomienda_1.Encomienda.findByPk(id);
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
        yield encomienda.update({
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
    }
    catch (error) {
        // Si ocurre un error, responder con un mensaje de error
        res.status(400).json({ message: 'Ocurrió un error al actualizar la encomienda.', error });
    }
});
exports.updateEncomienda = updateEncomienda;
//-------------DELETE-------------//
const deleteEncomienda = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const encomienda = yield encomienda_1.Encomienda.findByPk(id);
        if (!encomienda) {
            return res.status(404).json({ message: `No se encontró ninguna encomienda con el ID ${id}.` });
        }
        yield encomienda.destroy();
        res.json({ message: `Encomienda con ID ${id} eliminada correctamente.` });
    }
    catch (error) {
        res.status(400).json({ message: 'Ocurrió un error al eliminar la encomienda.', error });
    }
});
exports.deleteEncomienda = deleteEncomienda;
