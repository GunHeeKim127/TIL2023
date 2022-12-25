var express = require('express');
var router = express.Router();

//require maria.js
const maria = require('../connect/mariadb');

router.get('/',(req,res)=>
{
    if(status===200){
    res.render('login', {content: '로그인'});
    }
    else{
        console.log('status:',500);
    }
})

module.exports=router