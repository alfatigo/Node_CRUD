const mysql = require('mysql');

 const connection = mysql.createConnection({

    host: 'localhost',
    user: 'root',
    password: '',
    database: 'crud_nodejs'

 });

 connection.connect((error)=>{
     if(error){
         console.log('Db.Error!: '+error);
     }
     console.log('dbConnection suscessful')
 })

 module.exports = connection;