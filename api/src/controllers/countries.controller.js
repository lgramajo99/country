const axios = require('axios');
const { Country } = require('../db.js')

const countries = async () => {

    const response = await axios.get('https://rest-countries.up.railway.app/v2/all');
    const country = response.data.map((e) => {
        return {
            id: e.alpha3Code,
            nombre: e.name,
            imagenBandera: e.flags?.["svg"],
            continente: e.region,
            capital: e.capital || '',
            subregion: e.subregion,
            area: e.area,
            poblacion: e.population,
        }
    })
    const existingCountries = await Country.findAll({ attributes: ['id'] });
    const existingCountryIds = existingCountries.map((country) => country.id);

    const newCountries = country.filter((country) => !existingCountryIds.includes(country.id));

    if (newCountries.length > 0) {
        await Country.bulkCreate(newCountries);
    }

    return country;
}

module.exports = countries;


        // const response = await axios.get('https://restcountries.com/v3/all')
        // const country = response.data.map(e => {
        //     return {
        //         id: e.cca3,
        //         nombre: e.translations?.spa?.common,
        //         imagenBandera: e.flags?.[0],
        //         continente: e.continents?.[0],
        //         capital: e.capital?.[0],
        //         subregion: e.subregion,
        //         area: e.area,
        //         poblacion: e.population,
        //     }}
        // )
