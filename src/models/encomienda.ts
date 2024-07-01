import { DataTypes } from "sequelize";
import  sequelize  from '../db/connection';


export const Encomienda = sequelize.define('Encomienda', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    remitente: {
        type: DataTypes.STRING,
        allowNull: false
    },
    dni_remi: {
        type: DataTypes.STRING,
        allowNull: false
    },
    destinatario: {
        type: DataTypes.STRING,
        allowNull: false
    },
    dni_dest: {
        type: DataTypes.STRING,
        allowNull: false
    },
    descripcion: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    fechaEnvio: {
        type: DataTypes.DATE,
        allowNull: false
    },
    fechaEntrega: {
        type: DataTypes.DATE,
        allowNull: true
    },
    estado: {
        type: DataTypes.STRING,
        allowNull: false
    },
    precio: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    nombreRuta: {
        type: DataTypes.STRING,
        allowNull: false
    }
});
