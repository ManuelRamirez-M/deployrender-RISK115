'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Borders', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      territory1_name: {
        allowNull: false,
        type: Sequelize.STRING,
        //onUpdate: 'CASCADE',
        //onDelete: 'CASCADE'
      },
      neighboring2_name: {
        allowNull: false,
        type: Sequelize.STRING,
  
        //onUpdate: 'CASCADE',
        //onDelete: 'CASCADE'
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Borders');
  }
};

