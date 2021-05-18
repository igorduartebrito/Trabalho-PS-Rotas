const controllerIndex = require('../controllers/indexController.js');

app.get('/', controllerIndex.indexController);

