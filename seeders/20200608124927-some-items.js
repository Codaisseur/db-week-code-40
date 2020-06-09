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
        todoListId: 1,
      },
      {
        title: "Laundry",
        deadline: "01/08/2020",
        createdAt: new Date(),
        updatedAt: new Date(),
        important: false,
        todoListId: 1,
      },
      {
        title: "Teach backend week",
        deadline: "01/08/2020",
        createdAt: new Date(),
        updatedAt: new Date(),
        important: true,
        todoListId: 2,
      },
      {
        title: "Evaluate assessments",
        deadline: "01/08/2020",
        createdAt: new Date(),
        updatedAt: new Date(),
        important: false,
        todoListId: 2,
      },
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("todoItems", null, {});
  },
};
