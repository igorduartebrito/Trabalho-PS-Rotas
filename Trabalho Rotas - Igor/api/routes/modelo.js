const controllerModelo = require('../controllers/modeloController.js');

app.get('/pacaembu/vdc/modelo', controllerModelo.modeloController);

