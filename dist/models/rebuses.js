"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Rebus = void 0;
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
exports.Rebus = connection_1.default.define('Rebus', {
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    marca: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    nro_placa: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    modelo: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    color: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    nroserie: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    nroCarro: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    }
});
