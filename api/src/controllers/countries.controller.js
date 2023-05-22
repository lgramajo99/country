const axios = require('axios');

const countries = async () => {
    // try {

    const response = await axios.get('https://rest-countries.up.railway.app/v2/all');
    const country = response.data.map((e) => {
        return {
            id: e.alpha3Code,
            nombre: e.name,
            imagenBandera: e.flags?.["svg"],
            continente: e.region,
            capital: e.capital,
            subregion: e.subregion,
            area: e.area,
            pablacion: e.population,
        }
    })

    return country;
    // res.status(200).json(country);

    // } catch (error) {
    // res.status(500).json({ message: `No se pudo obtener los paises solicitados, error: ${error}` })

    // }
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
