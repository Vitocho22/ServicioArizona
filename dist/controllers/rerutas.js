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
exports.deleteRuta = exports.updateRuta = exports.createRuta = exports.getRutaById = exports.getRutas = void 0;
const rerutas_1 = require("../models/rerutas");
//-------------GET-------------//
// Obtener todas las rutas
const getRutas = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const rutas = yield rerutas_1.Ruta.findAll();
        res.status(200).json(rutas);
    }
    catch (error) {
        res.status(500).json({ message: 'Ocurrió un error al obtener las rutas.', error });
    }
});
exports.getRutas = getRutas;
// Obtener una ruta por su ID
const getRutaById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const rutaId = req.params.id;
        const ruta = yield rerutas_1.Ruta.findByPk(rutaId);
        if (!ruta) {
            return res.status(404).json({ message: `No se encontró ninguna Ruta con el ID ${rutaId}.` });
        }
        res.status(200).json(ruta);
    }
    catch (error) {
        res.status(500).json({ message: 'Ocurrió un error al obtener la Ruta.', error });
    }
});
exports.getRutaById = getRutaById;
//-------------CREATE-------------//
const createRuta = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { ruta, estado } = req.body;
        const nuevaRuta = yield rerutas_1.Ruta.create({ ruta, estado });
        res.status(201).json(nuevaRuta);
    }
    catch (error) {
        res.status(400).json({ message: 'Ocurrió un error al crear la nueva ruta.', error });
    }
});
exports.createRuta = createRuta;
//-------------UPDATE-------------//
const updateRuta = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const rutaId = req.params.id;
        const { ruta, estado } = req.body;
        const existingRuta = yield rerutas_1.Ruta.findByPk(rutaId);
        if (!existingRuta) {
            return res.status(404).json({ message: `No se encontró ninguna Ruta con el ID ${rutaId}.` });
        }
        yield existingRuta.update({ ruta, estado });
        res.status(200).json({ message: `Ruta con ID ${rutaId} actualizada correctamente.` });
    }
    catch (error) {
        res.status(400).json({ message: 'Ocurrió un error al actualizar la ruta.', error });
    }
});
exports.updateRuta = updateRuta;
//-------------DELETE-------------//
const deleteRuta = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const rutaId = req.params.id;
        const existingRuta = yield rerutas_1.Ruta.findByPk(rutaId);
        if (!existingRuta) {
            return res.status(404).json({ message: `No se encontró ninguna Ruta con el ID ${rutaId}.` });
        }
        yield existingRuta.destroy();
        res.status(200).json({ message: `Ruta con ID ${rutaId} eliminada correctamente.` });
    }
    catch (error) {
        res.status(400).json({ message: 'Ocurrió un error al eliminar la ruta.', error });
    }
});
exports.deleteRuta = deleteRuta;
