// creating 'Schema' which will define and control data stored in database

'use strict';

var mongoose = require('mongoose');
/*properties to be considered*/
// todo.name
// todo.completed

// Schema constructor
var todoSchema = new mongoose.Schema({
  name: String,
  completed: Boolean
});
//creating a model
var model = mongoose.model('Todo',todoSchema);

module.exports = model;
