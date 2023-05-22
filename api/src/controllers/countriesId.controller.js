const axios = require('axios');
const { Activity, Country } = require('../db.js');

const countriesId = async (idPais) => {
    const id = idPais;

    const country = await Country.findByPk(id, {
        include: {
            model: Activity,
            attributes: ['nombre'],
            through: { attributes: [] }
        }
    });

    if (country) {
        return {
            id: country.id,
            nombre: country.nombre,
            imagenBandera: country.imagenBandera,
            continente: country.continente,
            capital: country.capital,
            subregion: country.subregion,
            area: country.area,
            poblacion: country.poblacion,
        };

    } else {
        try {
            const response = await axios.get('https://rest-countries.up.railway.app/v2/all');
            const countries = response.data;

            const foundCountry = countries.find(c => c.alpha3Code === id);
            if (foundCountry) {
                return {
                    id: foundCountry.alpha3Code,
                    nombre: foundCountry.name,
                    imagenBandera: foundCountry.flags?.["svg"],
                    continente: foundCountry.region,
                    capital: foundCountry.capital,
                    subregion: foundCountry.subregion,
                    area: foundCountry.area,
                    poblacion: foundCountry.population,
                };
            } else {
                return { error: 'País no encontrado' };
            }
        } catch (error) {
            return { error: 'Error al realizar la solicitud al API' };
        }
    }
};

module.exports = countriesId;


        // const response = await axios.get(`https://restcountries.com/v3/alpha/${id}`);
        // const country = response.data?.[0];
        // if (country) {
        //     return {
        //         id: country.cca3,
        //         nombre: country.translations?.spa?.common,
        //         imagenBandera: country.flags?.[0],
        //         continente: country.continents?.[0],
        //         capital: country.capital?.[0],
        //         subregion: country.subregion,
        //         area: country.area,
        //         poblacion: country.population,
        //     }
        // }