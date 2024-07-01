"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pasajero = void 0;
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
exports.Pasajero = connection_1.default.define('Pasajero', {
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    pasajero: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    Apellido: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    dni: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    asiento: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    edad: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    fechaEmision: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: false
    },
    fechaViaje: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: false
    },
    horaViaje: {
        type: sequelize_1.DataTypes.TIME,
        allowNull: false
    },
    nrocar: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true
    },
    origen: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    destino: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    precio: {
        type: sequelize_1.DataTypes.FLOAT,
        allowNull: false
    },
    estado: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    }
});
