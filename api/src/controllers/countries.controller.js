const axios = require('axios');

const countries = async (req, res) => {
    try {
        const response = await axios.get('https://restcountries.com/v3/all')
        const country = response.data.map(e => {
            return {
                id: e.cca3,
                nombre: e.translations?.spa?.common,
                imagenBandera: e.flags?.[0],
                continente: e.continents?.[0],
                capital: e.capital?.[0],
                subregion: e.subregion,
                area: e.area,
                poblacion: e.population,
            }
        })

        res.status(200).json(country);

    } catch (error) {
        res.status(500).json({ message: `No se pudo obtener los paises solicitados, error: ${error}` })

    }
}

module.exports = countries;