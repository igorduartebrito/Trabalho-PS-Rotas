const controllerProjeto = require('../controllers/projetoController.js');

app.get('/projeto', controllerProjeto.projetoController);

