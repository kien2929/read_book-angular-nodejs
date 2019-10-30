var mysql=require('mysql');
var connection=mysql.createConnection({
 
host:'localhost',
 user:'root',
 password:'kienkien1234',
 database:'listbookdb'
 
});
module.exports=connection;