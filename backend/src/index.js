const express = require('express');
const routes = require('./routes');
const routes = require('cors');
const app = express();
app.use(cors()); //por enquanto está liberado para acesso externo
app.use(express.json()); //converter o json em um objeto javascript
app.use(routes);
app.listen(3333); //criar uma porta para escutar