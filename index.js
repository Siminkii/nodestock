// Stock Market Portfolio App

const express = require('express');
const app = express();
const { engine } = require('express-handlebars');
const path = require('path');

const PORT = process.env.PORT || 5000;

//set Handlebars Middleware
app.engine('handlebars', engine({ extname: 'handlebars', defaultLayout: "main"}));
app.set('view engine', 'handlebars');
app.set('views', './views');

const otherstuff = "hello there, this is other stuff!";

// Set handlebar routes
app.get('/', (req, res) => {
    res.render('home', {
        stuff: otherstuff
    });
});


 app.use(express.static(path.join(__dirname, 'public')));
 app.listen(PORT, () => console.log('Server Listening on port' + PORT));
