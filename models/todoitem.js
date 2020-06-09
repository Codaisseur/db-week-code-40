"use strict";
module.exports = (sequelize, DataTypes) => {
  const todoItem = sequelize.define(
    "todoItem",
    {
      title: DataTypes.STRING,
      deadline: DataTypes.STRING,
      important: DataTypes.BOOLEAN,
    },
    {}
  );
  todoItem.associate = function (models) {
    todoItem.belongsTo(models.todoList);
    todoItem.belongsToMany(models.tag, {
      through: "todoItemTags",
      foreignKey: "todoItemId",
    });
  };
  return todoItem;
};
