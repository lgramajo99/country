const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
    // defino el modelo
    sequelize.define('activity', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        nombre: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        dificultad: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                min: 1,
                max: 5,
            },
        },
        duracion: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        temporada: {
            type: DataTypes.ENUM('verano', 'otoño', 'invierno', 'primavera'),
            allowNull: false,
        },
    }, { timestamps: false });
};