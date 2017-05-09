const express = require('express');
const path= require('path');

var app = express();
var port = process.env.PORT || 3000;

app.set('view engine', 'hbs');
app.use(express.static(path.join(__dirname, './public')));

app.get('/', (req, res)=>{
    res.render(path.join(__dirname, './index.1.hbs'));
})

app.listen(port, ()=>{
    console.log(`Server listening on port ${port}`);
})