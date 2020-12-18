//use path module
const path = require('path');
//use express module
const express = require('express');
//use hbs view engine
const hbs = require('hbs');
const app = express();

//set dynamic views file
app.set('views', path.join(__dirname, 'views'));
//set view engine
app.set('view engine', 'hbs');
//set public folder as static folder for static file
app.use(express.static('public'));
//route untuk halaman home
app.get('/home', (req, res) => {
    //render file index.hbs
    res.render('home');
});

//route untuk halaman about
app.get('/profilmqwh', (req, res) => {
    res.render('profilmqwh');
});

app.listen(8000, () => {
    console.log('server is running at port 8000');
});