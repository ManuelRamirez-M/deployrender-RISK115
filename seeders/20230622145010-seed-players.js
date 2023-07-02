'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: (queryInterface) => queryInterface.bulkInsert('Players', [
    {
      color: 'red',
      status: 'active',
      number_of_territories: 4,
      iron: 0,
      wheat: 0,
      oil: 0,
      gameId: 1,
      userId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      color: 'blue',
      status: 'active',
      number_of_territories: 4,
      iron: 0,
      wheat: 0,
      oil: 0,
      gameId: 1,
      userId: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      color: 'green',
      status: 'active',
      number_of_territories: 3,
      iron: 0,
      wheat: 0,
      oil: 0,
      gameId: 1,
      userId: 3,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ]),

  down: (queryInterface) => queryInterface.bulkInsert('Players', null, {}),
};
