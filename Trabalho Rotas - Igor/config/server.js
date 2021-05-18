const express = require('express');
const consign = require('consign');
const path = require('path');

app = express();

app.set('views', path.join(__dirname, '../api/views'));
app.set('view engine', 'ejs');

app.use('/static', express.static(__dirname + '/public'));
app.use(express.static('public'));
app.use(express.static('estilos'));

app.set('port', 3333);

consign({ cwd: 'api' })
    .include('models')
    .then('controllers')
    .then('routes')
    .into(app)
;

app.listen(app.get('port'), () => {
    console.log('aplication running in port: ', app.get('port'))
})
module.exports = app;