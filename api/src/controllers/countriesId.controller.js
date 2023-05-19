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
    })

    if (country) {
        return {
            id: country.id,
            nombre: country.nomrbe,
            imagenBandera: country.imagenBandera,
            continente: country.continente,
            capital: country.capital,
            subregion: country.subregion,
            area: country.area,
            poblacion: country.poblacion,
        }

    } else {

        const response = await axios.get(`https://restcountries.com/v3/alpha/${id}`);
        const country = response.data?.[0];
        if (country) {
            return {
                id: country.cca3,
                nombre: country.translations?.spa?.common,
                imagenBandera: country.flags?.[0],
                continente: country.continents?.[0],
                capital: country.capital?.[0],
                subregion: country.subregion,
                area: country.area,
                poblacion: country.population,
            }
        } else {
            return { error: 'Pais no encontrado' }
        }

    }
};

module.exports = countriesId;

