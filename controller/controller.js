const connection = require('../model/db');

exports.save = (req, res) =>{

    const user = req.body.user;
    const rol = req.body.rol;

    connection.query('INSERT INTO users SET ?',{user:user,rol:rol}, (error, results)=>{
        if(error){
            console.log(error);
        }else{
            res.redirect('/');
        }
    });
}