const controllerMRV = require('../controllers/mrvController.js');

app.get('/mrv', controllerMRV.mrvController);

