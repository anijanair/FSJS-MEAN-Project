'use strict';
var angular = require('angular');

angular.module('todoListApp')

.service('dataService', function($http, $q) {
  this.getTodos = function(cb) {
    // redirecting to fetch API's mock data
    $http.get('/api/todos').then(cb);
  };

  this.deleteTodo = function(todo) {
    console.log("I deleted the " + todo.name + " todo!");
  };

  this.saveTodos = function(todos) {
    //to request to post data to server
    var queue = [];
    todos.forEach(function (todo) {
      var request;
      if (!todo._id) {
        request= $http.post('/api/todos', todo)
      };
      queue.push(request);
    });
    $q.all(queue).then(function (results) {
      console.log("Saved "+todos.length+ " todos!" );
    });
  };

});
