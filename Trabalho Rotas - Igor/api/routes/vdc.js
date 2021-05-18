const controllerVDC = require('../controllers/vdcController.js');

app.get('/pacaembu/vdc', controllerVDC.vdcController);

