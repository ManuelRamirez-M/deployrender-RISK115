'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: (queryInterface) => queryInterface.bulkInsert('Users', [
    {
      username: 'Camila',
      password: '12345',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      username: 'Vicente',
      password: '12345',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      username: 'Manuel',
      password: '12345',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      username: 'Juan',
      password: '12345',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      username: 'Francisca',
      password: '12345',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ]),

  down: (queryInterface) => queryInterface.bulkInsert('Users', null, {}),
};
