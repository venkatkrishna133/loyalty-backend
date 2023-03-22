const mysql =require('mysql');

//create connection
const db=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'nodemysql',

});

//connect
db.connect((err)=>{
    
if(err){
    throw err;
}
console.log('Mysql connected......');
})

module.exports = db;