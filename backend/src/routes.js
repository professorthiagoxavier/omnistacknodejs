const express = require('express');
const routes = express.Router();
const ClienteController = require('./controllers/ClienteController');
const SessionController = require('./controllers/SessionController');
routes.post('/clients', ClienteController.create);
routes.get('/clients', ClienteController.index);
routes.delete('/clients/:id', ClienteController.delete);

//session
routes.post('/session/', SessionController.create);

module.exports = routes; //para exportar as rotas
