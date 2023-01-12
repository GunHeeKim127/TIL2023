var express = require('express');
var router = express.Router();

//require maria.js
const maria = require('../connect/mariadb');

router.get('/api/user', function(req, res){
    connection.query('SELECT * FROM user', function(err, rows) {
    if(err) throw err;
    
    console.log('The solution is: ', rows);
    res.send(rows);
    });
    });

module.exports=router