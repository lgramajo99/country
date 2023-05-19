const axios = require('axios');
const { Activity, Country } = require('../db.js');
const { Op } = require('sequelize');

const countriesName = async (req, res) => {

    const nombre = req.query.name;

    try {

        // Buscamos los paises que coincidan con el nombre
        const search = {
            where: {
                nombre: { [Op.iLike]: `%${nombre}%` },
            }
        }
        // Obtenemos los paises de la base de datos y los guardamos en una variable
        const countrydb = await Country.findAll(search);

        const response = await axios.get(`https://restcountries.com/v3/name/${nombre}`);
        //Obtenemos los paises de la api que coincidan y los guardamos.  
        const countryapi = response.data.map((e) => ({
            id: e.cca3,
            nombre: e.translations?.spa?.common,
            imagenBandera: e.flags?.[0],
            continente: e.continents?.[0],
            capital: e.capital?.[0],
            subregion: e.subregion,
            area: e.area,
            poblacion: e.population,
        }));

        // Combinamos los resultados de DB y API
        const countries = [...countrydb, ...countryapi];
        res.status(200).json(countries)

    } catch (error) {
        res.status(500).send(`No se pudo obtener los paises solicitados con el nombre: ${nombre}, error: ${error}`);
    }
}

module.exports = countriesName;