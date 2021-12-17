const express = require("express");
const router = express.Router();

const connection = require("./model/db");

app

router.get("/", (req, res) => {
  connection.query("SELECT*FROM users", (error, results) => {
    if (error) {
      throw error;
    } else {
      res.render("index", { results: results });
    }
  });
});

router.get("/create", (req, res) => {
  res.render("create");
});

router.get('/edit/:id', (req,res)=>{    
    const id = req.params.id;
    connection.query('SELECT * FROM users WHERE Id=?',[id] , (error, results) => {
        if (error) {
            throw error;
        }else{            
            res.render('edit.ejs', {user:results[0]});            
        }        
    });
});

router.get('/delete/:id', (req, res) => {
    const id = req.params.id;
    connection.query('DELETE FROM users WHERE Id = ?',[id], (error, results)=>{
        if(error){
            console.log(error);
        }else{           
            res.redirect('/');         
        }
    })
});

console.log()
const crud = require("./controller/controller");
router.post("/save", crud.save);
router.post("/update", crud.update);

module.exports = router;
