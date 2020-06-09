"use strict";
module.exports = (sequelize, DataTypes) => {
  const todoList = sequelize.define(
    "todoList",
    {
      title: DataTypes.STRING,
    },
    {}
  );
  todoList.associate = function (models) {
    todoList.belongsTo(models.user);
    todoList.hasMany(models.todoItem);
  };
  return todoList;
};
