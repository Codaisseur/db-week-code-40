const express = require("express");
const cors = require("cors");
const userRouter = require("./routers/user");
const listRouter = require("./routers/lists");

const PORT = process.env.PORT || 4000;
const app = express();

const bodyParser = express.json();

const validationMiddleware = (request, response, next) => {
  const hasBody = !!Object.keys(request.body).length;
  if (!hasBody) {
    response.status(400).send("missing body");
  } else {
    next();
  }
};

// middlewares at application level!
app.use(cors()); // Always the 1st one if we want our apps to work in heroku.
app.use(bodyParser);
// app.use(validationMiddleware);

const logginMiddleware = (request, response, next) => {
  // do something with the request
  console.log("request came in the middleware", new Date());
  response.setHeader("at-my-server-time", new Date());
  next();
};

// routers
app.use("/users", logginMiddleware, userRouter);
app.use("/lists", listRouter);

app.listen(PORT, () => console.log("server started!"));
