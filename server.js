var express = require('express');
const path = require('path');

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, "static")));

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/projects', (req, res) => {
    res.render('projects');
});

app.get('/contact', (req, res) => {
    res.render('contact');
});

app.listen(3000, () =>{
    console.log("Server running (port 3000)...");
});