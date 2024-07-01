import { DataTypes } from "sequelize";
import  sequelize  from '../db/connection';

export const Pasajero = sequelize.define('Pasajero', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    pasajero: {
        type: DataTypes.STRING,
        allowNull: false
    },
    Apellido: {
        type: DataTypes.STRING,
        allowNull: false
    },
    dni: {
        type: DataTypes.STRING,
        allowNull: false
    },
    
    asiento: {
        type: DataTypes.STRING,
        allowNull: false
    },
    edad: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    fechaEmision: {
        type: DataTypes.DATE,
        allowNull: false
    },
    fechaViaje: {
        type: DataTypes.DATE,
        allowNull: false
    },
    horaViaje: {
        type: DataTypes.TIME,
        allowNull: false
    },
    nrocar: {
        type: DataTypes.STRING,
        allowNull:true
    },
    origen: {
        type: DataTypes.STRING,
        allowNull: false
    },
    destino: {
        type: DataTypes.STRING,
        allowNull: false
    },
    precio: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    estado: {
        type: DataTypes.STRING,
        allowNull: false
    }
});
