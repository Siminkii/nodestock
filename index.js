// Stock Market Portfolio App

const express = require('express');
const app = express();
const { engine } = require('express-handlebars');
const path = require('path');
const request = require('request');
const cool = require('cool-ascii-faces');

const PORT = process.env.PORT || 5006;

//API KEY fgW2Im6HchoZPBAT_pRq5NPooloAPY8b
request('https://api.polygon.io/v2/last/trade/AAPL?apiKey=fgW2Im6HchoZPBAT_pRq5NPooloAPY8b', { json: true }, (err,res, body) => {
    if (err) {return console.log(err);}
    console.log(body);
    if (res.statusCode === 200){
        console.log(body);
    };
});







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

app.get('/cool', (req, res) => {
    res.send(cool())
});

});
 // Create about page route
app.get('/about.html', (req, res) => {
    res.render('about');
});

 app.use(express.static(path.join(__dirname, 'public')));
 app.listen(PORT, () => console.log('Server Listening on port' + PORT));
