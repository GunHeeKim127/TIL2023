
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var engins = require('consolidate');
var mysql =require('mysql')
var bodyparser =require('body-parser')

var app = express();

var dotenv=require("dotenv");
dotenv.config();

//mariaDB connect
var maria = require('./backend/connect/mariadb')


//view engine setup
app.set('views',path.join(__dirname,'frontend/view'));
app.engine('html',engins.mustache);
app.set('view engine','html');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'frontend/public')));
app.use(bodyparser.json());

//router connect
const indexRouter = require('./backend/routes/index.js');

app.use('/',indexRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;