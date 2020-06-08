"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("todoItems", [
      {
        title: "Cook dinner",
        deadline: "01/08/2020",
        createdAt: new Date(),
        updatedAt: new Date(),
        important: true,
      },
      {
        title: "Laundry",
        deadline: "01/08/2020",
        createdAt: new Date(),
        updatedAt: new Date(),
        important: false,
      },
      {
        title: "Teach backend week",
        deadline: "01/08/2020",
        createdAt: new Date(),
        updatedAt: new Date(),
        important: true,
      },
      {
        title: "Evaluate assessments",
        deadline: "01/08/2020",
        createdAt: new Date(),
        updatedAt: new Date(),
        important: false,
      },
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("todoItems", null, {});
  },
};
