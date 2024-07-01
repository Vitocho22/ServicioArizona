import { DataTypes } from "sequelize";
import  sequelize  from '../db/connection';

export const Ruta = sequelize.define('Ruta', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    ruta: {
        type: DataTypes.STRING,
        allowNull: false
    },
    estado: {
        type: DataTypes.STRING,
        allowNull: false
    }
});
