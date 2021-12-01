const Sequelize = require('sequelize');
const dbConfig = require('../config/database.js');

const conexao = new Sequelize(dbConfig);

const clientes = require('../api/models/clientesModels.js');
const locacao = require('../api/models/locacaoModels.js');

try {
    conexao.authenticate();
    console.log('Conexção estabelecida !!');
} catch(error) {
    console.log('Conexão não estabelecida !!', error);
}

clientes.init(conexao);
locacao.init(conexao);

module.exports = conexao;