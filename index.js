require("dotenv").config();

const express = require("express");
const bodyParser = require("body-parser");
const app = express();

const moviesRouter = require("./routes/movies");
const todosRouter = require("./routes/todos");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/movies", moviesRouter);
app.use("/todos", todosRouter);

app.get("/", (req, res, next) => res.send("<h1>Welcome to my Homepage</h1>"));

//setup server to listen on port: 3000
app.listen(process.env.PORT, () =>
  console.log("Server running on port : " + process.env.PORT)
);
