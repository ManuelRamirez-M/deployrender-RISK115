'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Regions', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING
      },
      resource: {
        allowNull: false,
        type: Sequelize.STRING
      },
      resourceamount: {
        allowNull: false,
        type: Sequelize.INTEGER
      }
    });

  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Regions');
  }
};
