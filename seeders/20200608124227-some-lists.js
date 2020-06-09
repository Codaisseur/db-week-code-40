"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("todoLists", [
      {
        title: "Personal List",
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 1,
      },
      {
        title: "My work list",
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 1,
      },
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("todoLists", null, {});
  },
};
