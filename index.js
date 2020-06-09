const express = require("express");
const User = require("./models").user;

const app = express();

app.get("/users", async (req, res, next) => {
  try {
    const users = await User.findAll();
    res.send(users);
  } catch (e) {
    next(e);
  }
});

app.listen(4000, () => console.log("server started!"));
