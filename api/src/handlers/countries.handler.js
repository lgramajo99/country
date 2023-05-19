const countriesId = require('../controllers/countriesId.controller.js');
// const countriesName = require('../controllers/countriesName.controller.js');

const getCountriesId = async (req, res) => {
    const id = req.params.idPais;

    try {
        const country = await countriesId(id);
        res.status(200).json(country);

    } catch (error) {
        res.status(500).json({ message: `No se pudo obtener el país solicitado con el id: ${id}, error: ${error}` });
    }
}


// const getCountriesName = async (req, res) => {
//     const nombre = req.query.name;

//     try {
//         const country = await countriesName(nombre);
//         res.status(200).json(country);
//     } catch (error) {
//         res.status(500).json({ message: `No se pudo obtener los paises solicitados con el nombre: ${nombre}, error: ${error}` });
//     }
// }

module.exports = { getCountriesId };