const { Activity } = require('../db.js');

const activities = async (_req, res) => {
    try {
        const activities = await Activity.findAll();

        if (activities.length > 0) { return res.status(200).json(activities); }
        else { return res.status(404).json({ message: 'No se encontraron actividades en la base de datos.' }); }
    } catch (error) {
        res.status(500).send(`No se pudieron obtener las actividades: ${error}`);
    }
}

module.exports = activities;