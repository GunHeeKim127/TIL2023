const express = require('express');                                     
const { engine } = require("express-handlebars");                       //{engine}는 express-handlebars를 쓰기위해 선언 {}는 모듈이다.
const myconnection = require("express-myconnection");                   //mysql 네트워크 연결을 위한 모듈
const bodyparser = require("body-parser");                              //찾아보기
const path = require('path');                                           //파일 위치 조정을 위한 모듈
var logger = require('morgan');                                         //서버의 로그 관리를 위한 모듈
const mysql = require('mysql');                                         //mariaDB 혹은 mysql 사용을 위한 모듈
const app = express();

app.set('port',4000);                                                   //port는 4000번
app.set('views', path.join(__dirname, '/frontend/view/index.html'));    //사이트 보여주는 폴더 위치 지정
app.set('view engine', 'html');                                         //사이트 보여주는 파일의 확장자에 따라 html, ejs, hbs, pug등 사용 가능

app.use(logger('dev'));                                                 //morgan에서 dev를 사용
app.use(express.json());                                                //json을 보내고 받기 위해 사용
app.use(express.urlencoded({ extended: false }));                       //찾아보기
app.use(express.static(path.join(__dirname, '/frontend/public')));      //public폴더 내의 css, 이미지, javascript를 사용하기 위한 정규 폴더 지정
app.use(myconnection(mysql,{
    host:'localhost',
    user:'root',
    password:'0000',
    port:3600,
    database:'user_test1'
}))                                                                     //mysql 연결

app.listen(app.get('port'),()=>
{
    console.log('listening on port',app.get('port'))
})

// app.get('/', function(req, res, next) {
//     res.sendFile(__dirname+'/frontend/view/index.html');
//   });

var indexRouter = require('./backend/router/index.js');                 //router의 index.js를 불러옴
app.use('/', indexRouter);                                              //index.js에서 랜더시켜주는 index.html을 홈페이지(처음 열리는 페이지)로 지정

module.exports = app;                                                   //app을 모듈화