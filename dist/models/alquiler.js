"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Alquiler = void 0;
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
exports.Alquiler = connection_1.default.define('Alquiler', {
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    fechaInicio: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: false
    },
    fechaFin: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: false
    },
    origen: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    destino: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    duracion: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false
    },
    nombre: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    apellido: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    dni: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    telefono: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    precio: {
        type: sequelize_1.DataTypes.FLOAT,
        allowNull: false
    }
});
