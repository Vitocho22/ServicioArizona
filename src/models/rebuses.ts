import { DataTypes } from "sequelize";
import  sequelize  from '../db/connection';

export const Rebus = sequelize.define('Rebus', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    marca: {
        type: DataTypes.STRING,
        allowNull: false
    },
    nro_placa: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    modelo: {
        type: DataTypes.STRING,
        allowNull: false
    },
    color: {
        type: DataTypes.STRING,
        allowNull: false
    },
    nroserie: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    nroCarro: {
        type: DataTypes.INTEGER,
        allowNull: false,
    }
});
