const { Model, DataTypes } = require('sequelize');
const database = require('../../config/database');

class Clientes extends Model {
    static init(sequelize) {
        super.init({
            cli_nome: DataTypes.STRING, 
            cli_apelido: DataTypes.STRING, 
            cli_telefone: DataTypes.STRING, 
            cli_cadastro: DataTypes.DATE
        }, {
            sequelize,
            tableName: 'cliente'
        }
        );
        return this;
    }
}

module.exports = Clientes;