const express = require('express');
const { engine } = require("express-handlebars");
const myconnection = require("express-myconnection");
const bodyparser = require("body-parser");
const path = require('path');
var logger = require('morgan');
const mysql = require('mysql');
const app = express();

app.set ('port',4000);
app.set('views', path.join(__dirname, '/frontend/view/index.html'));
app.set('view engine', 'html');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, '/frontend/public')));
app.use(myconnection(mysql,{
    host:'localhost',
    user:'root',
    password:'0000',
    port:3600,
    database:'user_test1'
}))

app.listen(app.get('port'),()=>
{
    console.log('listening on port',app.get('port'))
})

// app.get('/', function(req, res, next) {
//     res.sendFile(__dirname+'/frontend/view/index.html');
//   });
var indexRouter = require('./backend/router/index.js');
app.use('/', indexRouter);

module.exports = app;