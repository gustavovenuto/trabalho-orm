const { Model, DataTypes } = require('sequelize');
const database = require('../../config/database');

class Locacao extends Model {
    static init(sequelize) {
        super.init({
            loc_marca: DataTypes.STRING, 
            loc_modelo: DataTypes.STRING, 
            loc_cor: DataTypes.STRING, 
            loc_diaslocacao: DataTypes.STRING, 
            loc_valortotal: DataTypes.STRING, 
        }, {
            sequelize,
            tableName: 'locacao'
        }
        );
        return this;
    }
}

module.exports = Locacao;