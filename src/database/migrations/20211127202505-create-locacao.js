'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.createTable('locacao', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      loc_marca: {
        allowNull: false,
        type: Sequelize.STRING(20),
      },
      loc_modelo: {
        allowNull: false,
        type: Sequelize.STRING(10),
      },
      loc_cor: {
        allowNull: false,
        type: Sequelize.STRING(10),
      },
      loc_diaslocacao: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      loc_valortotal: {
        allowNull: false,
        type: Sequelize.STRING(12,2),
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
    await queryInterface.dropTable('locacao');
  }
};
