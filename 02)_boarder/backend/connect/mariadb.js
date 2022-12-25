const maria = require('mysql');
const conn= maria.createConnection({
    host:'localhost',
    port:3306,
    user:'root',
    password:'0000',
    database:'user_test1'
});


conn.query('SELECT * from user_test1', function(error,results,fields){
    if(error) throw error;
    console.log('users:',results);
});


module.exports=conn;