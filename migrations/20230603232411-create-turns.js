'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Turns', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      gameId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Games',
          key: 'id'
        },
        //onUpdate: 'CASCADE',
        //onDelete: 'CASCADE'
      },
      playerId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Players',
          key: 'id'
        },
        //onUpdate: 'CASCADE',
        //onDelete: 'CASCADE'
      },
      recruitedTroops: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      reinforced_territory: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Territories',
          key: 'id'
        },
        //onUpdate: 'CASCADE',
        //onDelete: 'CASCADE'
      },
      attacking_territory: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Territories',
          key: 'id'
        },
        //onUpdate: 'CASCADE',
        //onDelete: 'CASCADE'
      },
      attacked_territory: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Territories',
          key: 'id'
        },
        //onUpdate: 'CASCADE',
        //onDelete: 'CASCADE'
      },
      result_of_attack: {
        allowNull: false,
        type: Sequelize.STRING,
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
    await queryInterface.dropTable('Turns');
  }
};
