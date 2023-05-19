const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const countries = require('../controllers/countries.controller.js');
const { getCountriesId } = require('../handlers/countries.handler.js');
const countriesName = require('../controllers/countriesName.controller.js');
const activities = require('../controllers/activities.controller.js');
const createActivities = require('../controllers/activitiesPost.controller.js');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.get('/countries', countries);
router.get('/countries/name', countriesName);
router.get('/countries/:idPais', getCountriesId);
router.get('/activities', activities);
router.post('/activities', createActivities);

module.exports = router;
