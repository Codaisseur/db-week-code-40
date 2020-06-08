'use strict';
module.exports = (sequelize, DataTypes) => {
  const todoList = sequelize.define('todoList', {
    title: DataTypes.STRING
  }, {});
  todoList.associate = function(models) {
    // associations can be defined here
  };
  return todoList;
};