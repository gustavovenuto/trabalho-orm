const express = require('express');

const http = require('http');

require('./database/indexdb.js');

const routesCliente = require('./api/routes/clientesRouter');
const routesLocacao = require('./api/routes/locacaoRoutes');

const { O_NOATIME } = require('constants');

const app = express();

app.set('porta', 3333);
app.set('url', 'http://localhost:');

app.use(express.json());
app.use(routesCliente);
app.use(routesLocacao);

http.createServer(app).listen(app.get('porta'), function(){
    console.log('servidor Rodando em ' + app.get('url') + app.get('porta'));
})