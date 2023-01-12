const maria = require('mysql');
const conn= maria.createConnection({
    host:'localhost',
    port:3306,
    user:'root',
    password:'0000',
    database:'user_test1'           //사용할 데이터베이스
});

//테이블에서 찾아라
conn.query('SELECT * from user', function(error,results,fields){
    if(error) throw error;
    console.log('users:',results);
});


module.exports=conn;