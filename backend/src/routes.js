const express = require('express');

const OngController = require('./controllers/OngController');
const IncidentsController = require('./controllers/InsidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();

routes.post('/sessions', SessionController.create);

/** 
 * Ongs 
 * */


 // Cadastra Ong passada via Json
routes.post('/ongs', OngController.create);
// Listagem de ongs
routes.get('/ongs', OngController.index); 

routes.get('/profile', ProfileController.index); 

/** 
 * Casos 
 * */
 
// Cadastra Caso passado via Json
routes.post('/incidents', IncidentsController.create);
// Listagem de Casos
routes.get('/incidents', IncidentsController.index); 
// Deletar um Caso
routes.delete('/incidents/:id', IncidentsController.delete); 

module.exports = routes;