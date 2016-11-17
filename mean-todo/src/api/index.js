//API module

'use strict';

var express = require('express');
var todos = require('../../mock/todos.json');

//setting up route for API and mounting it on router
var router = express.Router();

router.get('/todos', function (req, res) {
  res.json({todos:todos});
});

// Adding POST route to create new entries
// Adding PUT route to update existing entries
// Adding DELETE route to delete entries
module.exports = router;
