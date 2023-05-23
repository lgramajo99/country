const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('country', {
    id: {
      type: DataTypes.STRING(3),
      primaryKey: true,
      allowNull: false,
      validate: {
        len: {
          args: [3, 3], // Validar que el ID tenga exactamente 3 caracteres
          msg: 'El ID debe tener 3 letras',
        },
      },
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    imagenBandera: {
      type: DataTypes.STRING,
      allowNull: false
    },
    continente: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    capital: {
      type: DataTypes.STRING,
      allowNull: false
    },
    subregion: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    area: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    poblacion: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, { timestamps: false });
};
