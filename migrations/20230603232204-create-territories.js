'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Territories', {
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
      troops: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      resource: {
        allowNull: false,
        type: Sequelize.STRING
      },
      gameId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Games',
          key: 'id'
        },
        // onUpdate: 'CASCADE',
        // onDelete: 'CASCADE'
      },
      currentOwner: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Players',
          key: 'id'
        },
        //onUpdate: 'CASCADE',
        //onDelete: 'CASCADE'
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });

  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('TerritoryNeighbors');
    await queryInterface.dropTable('Territories');
  }
};
