const express = require('express');
const app = express();
const expressLayouts = require('express-ejs-layouts');

app.set('view engine','ejs');
app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use(expressLayouts);
app.use('/', require('./router'));

app.listen(3000, ()=>{
    console.log('SERVER corriendo en http://localhost:3000');
});