"use strict";
module.exports = (sequelize, DataTypes) => {
  const tag = sequelize.define(
    "tag",
    {
      name: DataTypes.STRING,
    },
    {}
  );
  tag.associate = function (models) {
    tag.belongsToMany(models.todoItem, {
      through: "todoItemTags",
      foreignKey: "tagId",
    });
  };
  return tag;
};
