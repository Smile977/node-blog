const express = require('express');
const router = express.Router();
const { getTodo, getTodos, addTodo, getAddTodo } = require('../controllers/todo-controller');

router.get('/todos/:id', getTodo);
router.get('/todos', getTodos);
router.post('/add-todo', addTodo);
router.get('/add-todo', getAddTodo);

module.exports = router;
