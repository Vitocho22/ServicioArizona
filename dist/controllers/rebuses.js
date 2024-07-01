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
exports.deleteRebus = exports.updateRebus = exports.createRebus = exports.getRebusById = exports.getRebuses = void 0;
const rebuses_1 = require("../models/rebuses");
//-------------GET-------------//
const getRebuses = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const rebuses = yield rebuses_1.Rebus.findAll();
        res.status(200).json(rebuses);
    }
    catch (error) {
        res.status(500).json({ message: 'Ocurrió un error al obtener los registros de buses.', error });
    }
});
exports.getRebuses = getRebuses;
// Obtener un registro de Rebus por ID
const getRebusById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const rebusId = req.params.id;
        const rebus = yield rebuses_1.Rebus.findByPk(rebusId);
        if (!rebus) {
            return res.status(404).json({ message: `No se encontró ningún Rebus con el ID ${rebusId}.` });
        }
        res.status(200).json(rebus);
    }
    catch (error) {
        res.status(500).json({ message: 'Ocurrió un error al obtener el Rebus.', error });
    }
});
exports.getRebusById = getRebusById;
//CREATE
const createRebus = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // Extraemos los datos del cuerpo de la solicitud
        const { marca, nro_placa, modelo, color, nroserie, nroCarro } = req.body;
        // Verificamos si el número de placa ya existe en la base de datos
        const existingRebusByPlaca = yield rebuses_1.Rebus.findOne({ where: { nro_placa } });
        if (existingRebusByPlaca) {
            return res.status(400).json({
                msg: `El número de placa ${nro_placa} ya está registrado.`
            });
        }
        // Verificamos si el número de serie ya existe en la base de datos
        const existingRebusBySerie = yield rebuses_1.Rebus.findOne({ where: { nroserie } });
        if (existingRebusBySerie) {
            return res.status(400).json({
                msg: `El número de serie ${nroserie} ya está registrado.`
            });
        }
        // Creamos el nuevo registro de Rebus
        const newRebus = yield rebuses_1.Rebus.create({
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
    }
    catch (error) {
        // Si ocurre algún error, respondemos con un mensaje de error
        res.status(400).json({ message: 'Ocurrió un error al crear el Rebus.', error });
    }
});
exports.createRebus = createRebus;
//-------------Update-------------//
const updateRebus = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // Extraemos el ID del Rebus a actualizar y los nuevos datos del cuerpo de la solicitud
        const rebusId = req.params.id;
        const updateData = req.body;
        // Verificamos si el Rebus a actualizar existe en la base de datos
        const existingRebus = yield rebuses_1.Rebus.findByPk(rebusId);
        if (!existingRebus) {
            return res.status(404).json({
                msg: `No se encontró ningún Rebus con el ID ${rebusId}.`
            });
        }
        // Verificamos si se está intentando cambiar el número de placa por uno ya existente
        if (updateData.nro_placa && updateData.nro_placa !== existingRebus.nro_placa) {
            const existingRebusByPlaca = yield rebuses_1.Rebus.findOne({ where: { nro_placa: updateData.nro_placa } });
            if (existingRebusByPlaca) {
                return res.status(400).json({
                    msg: `El número de placa ${updateData.nro_placa} ya está registrado.`
                });
            }
        }
        // Verificamos si se está intentando cambiar el número de serie por uno ya existente
        if (updateData.nroserie && updateData.nroserie !== existingRebus.nroserie) {
            const existingRebusBySerie = yield rebuses_1.Rebus.findOne({ where: { nroserie: updateData.nroserie } });
            if (existingRebusBySerie) {
                return res.status(400).json({
                    msg: `El número de serie ${updateData.nroserie} ya está registrado.`
                });
            }
        }
        // Actualizamos los datos del Rebus solo con los campos proporcionados en la solicitud
        yield existingRebus.update(updateData);
        // Respondemos con un mensaje de éxito
        res.status(200).json({
            msg: `Rebus con ID ${rebusId} actualizado correctamente.`
        });
    }
    catch (error) {
        // Si ocurre algún error, respondemos con un mensaje de error
        res.status(400).json({ message: 'Ocurrió un error al actualizar el Rebus.', error });
    }
});
exports.updateRebus = updateRebus;
//---------DELETE--------
const deleteRebus = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const rebusId = req.params.id;
        const deletedRebus = yield rebuses_1.Rebus.destroy({ where: { id: rebusId } });
        if (!deletedRebus) {
            return res.status(404).json({ message: `No se encontró ningún Rebus con el ID ${rebusId} para eliminar.` });
        }
        res.status(200).json({ message: `Rebus con ID ${rebusId} eliminado correctamente.` });
    }
    catch (error) {
        res.status(500).json({ message: 'Ocurrió un error al eliminar el Rebus.', error });
    }
});
exports.deleteRebus = deleteRebus;
