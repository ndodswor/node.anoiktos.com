/*------------
config.js
shared variables
------------*/

//load dependencies
var express = require('express');
var path = require('path');
var session = require('express-session');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');

//set the server variable
var server = express();

//set express to use body-parser for POST requests
server.use(bodyParser.urlencoded({extended:false}));

//set up session system to work normally
server.use(cookieParser());
server.use(session({secret: 'example_secret_code'}));

//static: handles static files
server.use(express.static('public'));
server.use(express.static('public/css'));

//exports
exports.server = server;