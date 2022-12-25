
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./backend/routes/index');
// var usersRouter = require('./routes/users');

var app = express();

//mariaDB connect
const maria = require('./backend/connect/mariadb');
maria.connect();

//view engine setup
app.set('view',path.join(__dirname,'view'));
app.set('view engine','jade');

