const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080
const path = require('path');

app.set('view engine', 'ejs');
app.set('views', 'view');

app.use(express.static("static"));

app.get('/index', homePage);
function homePage(req, res) {
    res.render('index.ejs');
}

app.get('/about-mobile', aboutMobile);
function aboutMobile(req, res) {
    res.render('about-mobile.ejs');
}

app.listen(PORT, console.log('Running on port: ${PORT}'));

app.use((req, res, next) => {
    res.status(404).send(
        "<h1>Page not found on the server</h1>")
})