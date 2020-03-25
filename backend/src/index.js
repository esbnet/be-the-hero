const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors);
app.use(express.json());
app.use(routes);

/**
 * 
 * Rota / Recurso
 * 
 */

/**
 *  
 *   Metodos HTTP:
 *
 *    GET: Buscar uma informação no back-end 
 *    POST: Criar uma informação no back-end 
 *   PUT: Alterar uma informação no back-end 
 *   DELETE: Apagar uma informação no back-end 
 * 
 */

/**
 * Tipos de parâmetros:
 * 
 * Query params: Parâmetros nomeados passados na rota após "?" (filtros, paginaçãco)
 * Route params: Parâmetros utilizados para identificar recursos na aplicação
 * Request Body: Corpo da requisição, utilizado para criar ou alterar recursoss
 */

/**
 * 
 * SQL: MySQL, SQLite, PostgreSQL, Orecle, etc...
 * NoSQL: MongoDB, CouchDB, etc
 * 
 */

/**
 * Driver: Select * from users
 * Query Builder: table('users').select('*').
 */

app.listen(3333);