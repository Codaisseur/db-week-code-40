"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("tags", [
      {
        name: "Urgent",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "house stuff",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "work stuff",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("tags", null, {});
  },
};
