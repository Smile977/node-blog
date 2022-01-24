const createPath = require('../helpers/create-path');
const Todo = require('../models/todo');

const handleError = (res, error) => {
  console.log(error);
  res.render(createPath('error'), { title: 'Error' });
};

const getTodo = (req, res) => {
  const title = 'Todo';  
  Todo
    .findById(req.params.id)
    .then(todo => res.render(createPath('todo'), { todo, title}))
    .catch(error => handleError(res, error));
};

const getTodos = (req, res) => {
  const title = 'Totos';
  Todo
    .find()
    .sort({ createdAt: -1 })
    .then((todos) => res.render(createPath('todos'), { todos, title }))
    .catch(error => handleError(res, error));
};

const addTodo = (req, res) => {
  const { title, text } = req.body;
  console.log(title, text);
  const todo = new Todo({ title, text });
  todo
    .save()
    .then((result) => res.redirect('/todos'))
    .catch(error => handleError(res, error));
};

const getAddTodo = (req, res) => {
  const title = 'Add todo';
  res.render(createPath('add-todo'), { title });
};

module.exports = {
  getTodo,
  getTodos,
  addTodo,
  getAddTodo,
};
