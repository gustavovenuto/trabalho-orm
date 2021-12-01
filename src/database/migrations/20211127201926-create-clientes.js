'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.createTable('cliente', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      cli_nome: {
        allowNull: false,
        type: Sequelize.STRING(20),
      },
      cli_apelido: {
        allowNull: false,
        type: Sequelize.STRING(15),
      },
      cli_telefone: {
        allowNull: false,
        type: Sequelize.STRING(15),
      },
      cli_cadastro: {
        allowNull: false,
        type: Sequelize.DATE(),
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },

    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('cliente');
  }
};
