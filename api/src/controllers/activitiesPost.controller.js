const { Activity, Country } = require('../db.js');
const { Op } = require('sequelize');

const createActivity = async (req, res) => {
    try {
        const { nombre, dificultad, duracion, temporada, countries } = req.body;

        // Crear la actividad turística en la base de datos
        const newActivity = await Activity.create({
            nombre,
            dificultad,
            duracion,
            temporada,
        });

        // Relacionar la actividad con los países indicados
        if (countries && countries.length > 0) {
            const countryNames = countries.map(countryName => countryName.toLowerCase());
            const relatedCountries = await Country.findAll({
                where: {
                    nombre: {
                        [Op.iLike]: { [Op.any]: countryNames }
                    }
                }
            });
            await newActivity.addCountries(relatedCountries);
        }

        res.status(201).json(newActivity);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'No se pudo crear la actividad turística.', error: error.message });
    }
};

module.exports = createActivity;
