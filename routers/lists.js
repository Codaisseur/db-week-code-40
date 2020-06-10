const express = require("express");
const TodoList = require("../models").todoList;
const { Router } = express;

const router = new Router();

router.get("/", async (req, res, next) => {
  try {
    const lists = await TodoList.findAll();
    res.send(lists);
  } catch (e) {
    next(e);
  }
});

module.exports = router;

/*
'/users'
'/users/:id/lists'
'/users/:id/lists/:listId'


'/lists' GET or POST
'/lists/:id' GET or UPDATE or DELETE


*/
