'use strict';

 var mongoose = require('mongoose');

 //to connect mongoose to mongodb
 mongoose.connect('mongodb://localhost/mean-todo', function (err) {

   // to let us know in bash mongoose is working properly

   if (err) {
     console.log("Failed to connect to mongodb.");
   }else {
     console.log("Successfully connected to mongodb!");
   }
 });
