//API module

'use strict';

var express = require('express');
var Todo = require('../models/todo');

/* Commenting out the mock data as there is Todo model now*/
//var todos = require('../../mock/todos.json');

//setting up route for API and mounting it on router
var router = express.Router();

router.get('/todos', function (req, res) {

  //getting todos
  Todo.find({}, function (err, todos) {
    if (err) {
      return res.status(500).json({message: err.message});
    }
    res.json({todos:todos});
  });
});

// Adding POST route to create new entries
router.post('/todos', function (req, res) {
  var todos = req.body;
  Todo.create(todo, function (err, todo) {
    if (err) {
      return res.status(500).json({err: err.message});
    }
  });
  res.json({'todo': todo, message: 'Todo created.'});
});

// Adding PUT route to update existing entries
router.put('/todos/:id', function (req, res) {
  var todos = req.body;
  if (todo && todo._id !== id) {
    return res.status(500).json({err:"Ids don't match."})
  }
  Todo.findByIdAndUpdate(id, todo,{new: true}, function (err, todo) {
    if (err) {
      return res.status(500).json({err: err.message});
    }
    res.json({'todo': todo, message: 'Todo updated.'});
  });
});

// Adding DELETE route to delete entries
module.exports = router;
