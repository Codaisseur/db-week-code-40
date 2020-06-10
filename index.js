const express = require("express");
const cors = require("cors");
const User = require("./models").user;
const TodoList = require("./models").todoList;
const PORT = process.env.PORT || 4000;
const app = express();

const bodyParser = express.json();

// middlewares
app.use(cors());
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

app.delete("/users/:id", async (req, res, next) => {
  try {
    // 1. find the user
    const { id } = req.params;
    const user = await User.findByPk(id);
    // 2. check if it exists/ if not answer with appropiate status code
    if (!user) {
      res.status(404).send("user not found");
    } else {
      // 3. Delete user if exists
      await user.destroy();
      console.log("user deleted", deletedUser);
      // 4. Respond.
      res.send(deletedUser);
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

app.listen(PORT, () => console.log("server started!"));
