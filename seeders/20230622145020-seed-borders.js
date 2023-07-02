'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: (queryInterface) => queryInterface.bulkInsert('Borders', [
    {
      territory_id: 1,
      neighboring_territory_id: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      territory_id: 1,
      neighboring_territory_id: 3,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      territory_id: 1,
      neighboring_territory_id: 4,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      territory_id: 1,
      neighboring_territory_id: 5,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      territory_id: 2,
      neighboring_territory_id: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      territory_id: 2,
      neighboring_territory_id: 4,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      territory_id: 3,
      neighboring_territory_id: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      territory_id: 3,
      neighboring_territory_id: 4,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      territory_id: 3,
      neighboring_territory_id: 5,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      territory_id: 3,
      neighboring_territory_id: 6,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      territory_id: 4,
      neighboring_territory_id: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      territory_id: 4,
      neighboring_territory_id: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      territory_id: 4,
      neighboring_territory_id: 3,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      territory_id: 5,
      neighboring_territory_id: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      territory_id: 5,
      neighboring_territory_id: 3,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      territory_id: 5,
      neighboring_territory_id: 6,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      territory_id: 5,
      neighboring_territory_id: 7,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      territory_id: 6,
      neighboring_territory_id: 5,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      territory_id: 6,
      neighboring_territory_id: 3,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      territory_id: 7,
      neighboring_territory_id: 5,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      territory_id: 7,
      neighboring_territory_id: 8,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      territory_id: 7,
      neighboring_territory_id: 9,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      territory_id: 8,
      neighboring_territory_id: 7,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      territory_id: 8,
      neighboring_territory_id: 9,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      territory_id: 8,
      neighboring_territory_id: 10,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      territory_id: 9,
      neighboring_territory_id: 7,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      territory_id: 9,
      neighboring_territory_id: 8,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      territory_id: 9,
      neighboring_territory_id: 10,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      territory_id: 10,
      neighboring_territory_id: 8,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      territory_id: 10,
      neighboring_territory_id: 9,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      territory_id: 10,
      neighboring_territory_id: 11,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      territory_id: 11,
      neighboring_territory_id: 10,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ]),

  down: (queryInterface) => queryInterface.bulkInsert('Borders', null, {}),
};