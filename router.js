const express = require('express');
const router = express.Router();

const connection = require('./model/db');

router.get('/', (req, res) => {
    connection.query('SELECT*FROM users', (error, results) => {
        if (error) {
            throw error;
        } else {
            res.render('index', { results: results });
        }
    });
});

router.get('/create', (req, res) => {
    res.render('create');
});


const crud = require('./controller/controller');
router.post('/save', crud.save);

module.exports = router;