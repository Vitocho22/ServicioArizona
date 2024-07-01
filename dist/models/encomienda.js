"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Encomienda = void 0;
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
exports.Encomienda = connection_1.default.define('Encomienda', {
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    remitente: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    dni_remi: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    destinatario: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    dni_dest: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    descripcion: {
        type: sequelize_1.DataTypes.TEXT,
        allowNull: false
    },
    fechaEnvio: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: false
    },
    fechaEntrega: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: true
    },
    estado: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    precio: {
        type: sequelize_1.DataTypes.FLOAT,
        allowNull: false
    },
    nombreRuta: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    }
});
