"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("todoItems", [
      {
        title: "Cook dinner",
        deadline: "01/08/2020",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Laundry",
        deadline: "01/08/2020",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Teach backend week",
        deadline: "01/08/2020",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Evaluate assessments",
        deadline: "01/08/2020",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("todoItems", null, {});
  },
};
