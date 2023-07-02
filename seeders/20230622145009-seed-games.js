'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: (queryInterface) => queryInterface.bulkInsert('Games', [
    {
      name: 'partida_de_prueba',
      status: 'in-progress',
      current_turn: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ]),

  down: (queryInterface) => queryInterface.bulkInsert('Games', null, {}),
};