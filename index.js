const express = require("express");
const User = require("./models").user;
const TodoList = require("./models").todoList;

const app = express();

const bodyParser = express.json();

app.use(bodyParser);

app.get("/users", async (req, res, next) => {
  try {
    const users = await User.findAll();
    res.send(users);
  } catch (e) {
    next(e);
  }
});

app.post("/users", async (req, res, next) => {
  try {
    console.log(req.body);
    const { email, name, password } = req.body;
    if (!email || !name || !password) {
      res.status(400).send("Missing parameters to create user");
    } else {
      const newUser = await User.create({ email, password, name });
      res.send(newUser);
    }
  } catch (e) {
    next(e);
  }
});

app.get("/users/:id", async (req, res, next) => {
  try {
    const id = req.params.id;
    const user = await User.findByPk(id);

    if (!user) {
      res.status(404).send("User not found");
    } else {
      res.send(user);
    }
  } catch (e) {
    console.log(e);
  }
});

app.patch("/users/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    // send some attribute to update.
    const user = await User.findByPk(id);

    if (!user) {
      res.status(404).send("user not found");
    } else {
      console.log(req.body);
      await user.update(req.body);
      console.log("user", user);
      res.send(user);
    }
  } catch (e) {
    next(e);
  }
});

app.get("/users/:id/lists", async (req, res, next) => {
  try {
    const { id } = req.params;
    const userWithList = await User.findByPk(id, { include: [TodoList] });
    if (!userWithList) {
      res.status(404).send("User not found");
    } else {
      res.send(userWithList);
    }
  } catch (e) {
    next(e);
  }
});

app.listen(4000, () => console.log("server started!"));
