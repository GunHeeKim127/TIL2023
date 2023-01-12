var express = require('express');
var path = require("path")
var router = express.Router();

//require maria.js
const maria = require('../connect/mariadb.js');


router.get('/', function(req, res){

    maria.query('SELECT * FROM user', function(err, rows) {
    if(err) throw err;
    
    console.log('The solution is: ', rows);
    console.log(path.join(__dirname+'../../frontend/view/index.html'))
    res.sendFile(path.join(__dirname+'../../../frontend/view/index.html'),{rows:rows,indexSuccess:true,message:err});
    });
   
    });
  
module.exports=router