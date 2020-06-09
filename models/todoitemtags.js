"use strict";
module.exports = (sequelize, DataTypes) => {
  const todoItemTags = sequelize.define(
    "todoItemTags",
    {
      tagId: DataTypes.INTEGER,
      todoItemId: DataTypes.INTEGER,
    },
    {}
  );
  todoItemTags.associate = function (models) {
    todoItemTags.belongsTo(models.tag);
    todoItemTags.belongsTo(models.todoItem);
  };
  return todoItemTags;
};
