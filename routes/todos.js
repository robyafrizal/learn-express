const express = require("express");
const route = express.Router();

const {
  getTodos,
  getTodosById,
  postTodos,
  deleteTodos,
  putTodos
} = require("../controllers/todos");

route.get("/", getTodos);
route.get("/:id", getTodosById);
route.post("/", postTodos);
route.delete("/:id", deleteTodos);
route.put("/:id", putTodos);

module.exports = route;
