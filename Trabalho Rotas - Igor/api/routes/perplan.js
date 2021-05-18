const controllerPerplan = require('../controllers/perplanController.js');

app.get('/perplan', controllerPerplan.perplanController);

