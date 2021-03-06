// node will start the server here
//
'use strict';

var express = require('express');
var parser = require('body-parser');
var router = require('./api');

// creating instance to set up any middleware needed
var app = express();

require('./database');
require('./seed');

//Telling express' static server to serve static files from 'public' folder
app.use('/', express.static('public'));
app.use(parser.json());


app.use('/api',router);

app.listen(3000, function () {
  console.log("The server is running on port 3000!");
});
