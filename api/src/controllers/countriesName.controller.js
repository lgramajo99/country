const axios = require('axios');
const { Activity, Country } = require('../db.js');
const { Op } = require('sequelize');

const countriesName = async (req, res) => {
    const nombre = req.query.name;

    try {
        // Buscamos los países que coincidan con el nombre en la base de datos
        const search = {
            where: {
                nombre: { [Op.iLike]: `%${nombre}%` },
            },
        };
        // Obtenemos los países de la base de datos y los guardamos en una variable
        const countrydb = await Country.findAll(search);

        const response = await axios.get('https://rest-countries.up.railway.app/v2/all');
        // Obtenemos los países de la API que coincidan y los guardamos
        const countryapi = response.data
            .filter((e) => e.translations?.es.toLowerCase().startsWith(nombre.toLowerCase()))
            .map((e) => ({
                id: e.alpha3Code,
                nombre: e.name,
                imagenBandera: e.flags?.["svg"],
                continente: e.region,
                capital: e.capital,
                subregion: e.subregion,
                area: e.area,
                poblacion: e.population,
            }));

        // Combinamos los resultados de la base de datos y la API
        const countries = [...countrydb, ...countryapi];
        res.status(200).json(countries);
    } catch (error) {
        if (error.response) {
            // Error de respuesta de la API
            res.status(error.response.status).send(`Error al obtener los países de la API: ${error.response.data}`);
        } else if (error.request) {
            // No se recibió respuesta de la API
            res.status(500).send('No se recibió respuesta de la API de países');
        } else {
            // Error de otro tipo
            res.status(500).send(`Error al obtener los países solicitados con el nombre: ${nombre}, error: ${error.message}`);
        }
    }
};

module.exports = countriesName;




// const response = await axios.get(`https://restcountries.com/v3/name/${nombre}`);
//         //Obtenemos los paises de la api que coincidan y los guardamos.
//         const countryapi = response.data.map((e) => ({
//             id: e.cca3,
//             nombre: e.translations?.spa?.common,
//             imagenBandera: e.flags?.[0],
//             continente: e.continents?.[0],
//             capital: e.capital?.[0],
//             subregion: e.subregion,
//             area: e.area,
//             poblacion: e.population,
//         }));