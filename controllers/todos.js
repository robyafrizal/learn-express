let { todos } = require("../models/todos");

module.exports = {
  getTodos: (req, res) => {
    res.status(200).send(todos);
  },

  getTodosById: (req, res) => {
    const idParams = req.params.id;
    const todo = todos.find(item => item.id == idParams);

    res.send(todo);
  },

  postTodos: (req, res) => {
    const lastIndex = todos.length - 1;
    const id = todos[lastIndex].id + 1;
    const todoList = req.body.todo;

    const todo = {
      id,
      todoList
    };

    todos.push(todo);
    res.send({ message: "Success Todo added", todos });
  },

  putTodos: (req, res) => {
    try {
      let getUpdate = todos.findIndex(data => data.id == req.params.id);

      todos.map(data => {
        if (data.id == req.params.id) {
          todos[getUpdate].todo = req.body.todo;
        }
      });
      res.send({
        message: "Data successfully update",
        todos
      });
    } catch (error) {
      console.log(error);
      res.send(error);
    }
  },

  deleteTodos: (req, res) => {
    try {
      const idDelete = req.params.id;
      let data = todos.filter(item => item.id !== parseInt(idDelete));

      todos = data;
      res.status(200).send(todos);
    } catch (error) {
      console.log(error);
      res.send(error);
    }
  }
};
