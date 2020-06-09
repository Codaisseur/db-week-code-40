const User = require("./models").user;
const TodoItem = require("./models").todoItem;
const TodoList = require("./models").todoList;
const Tag = require("./models").tag;

// findAll, findByPk, findOne.

const getUsers = async () => {
  try {
    const users = await User.findAll({ include: [TodoList] }); // findOne, findByPk, etc...
    const toDisplay = users.map(user => user.get({ plain: true }));
    console.log("users", toDisplay);
  } catch (error) {
    console.log("error!", error);
  }
};

const getUserByName = async () => {
  try {
    const users = await User.findAll({ where: { name: "test1" } });

    console.log(users.map(u => u.get({ plain: true })));
  } catch (e) {
    console.log("error", e);
  }
};

const getItemsWithTag = async () => {
  try {
    const items = await TodoItem.findAll({ include: { model: Tag } }); // => []
    const toDisplay = items.map(item => item.get({ plain: true }));
    console.log("items", toDisplay);
  } catch (error) {
    console.log(error);
  }
};

const getItemById = async id => {
  try {
    const item = await TodoItem.findByPk(id); // =>  {} || null.
    console.log("item", item.get({ plain: true }));
  } catch (error) {
    console.log(error);
  }
};

getItemsWithTag();
