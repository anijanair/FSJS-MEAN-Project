// creating seed data

'use strict';

var Todo = require('./models/todo');

var todos = [
  'return the call',
  'read the book',
  'clean the house'
];

//Look for a todo and create that if it does not exist in the array
 todos.forEach(function (todo, index) {
   Todo.find({'name': todo}, function (err, todos) {
     if (!err && !todos.length) {
       Todo.create({completed: false, name: todo});
     };
   });
 })
