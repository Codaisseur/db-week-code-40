"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("users", [
      {
        name: "test1",
        email: "test1@test.com",
        password: "123",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "test2",
        email: "test2@test.com",
        password: "1234",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("users", null, {});
  },
};
