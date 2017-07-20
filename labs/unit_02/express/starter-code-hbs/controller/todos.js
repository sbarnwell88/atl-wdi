const express = require('express');
const router = express.Router();
const data = require('../data');

router.get('/', function(req,res) {

  res.render('todos/index', {
    todos: data.seededTodos
  });
});

router.get('/new', (req, res) => {
    res.render('todos/new');
});

router.get('/:id', (req, res) => {
    const id = req.params.id;
    const todo = data.seededTodos[id];
    res.render('todos/show', {
        todo: todo
    });
});

router.post('/', (req, res) => {
    console.log(req.body);
    const newTodo = {
        description: req.body.description,
        urgent: req.body.urgent
    };
    data.seededTodos.push(newTodo);
    res.redirect('/todos');
});



module.exports = router;