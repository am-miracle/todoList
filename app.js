// jshint esversion:6

const express = require("express");
const bodyParser = require('body-parser');

const port = 3000;

const app = express();

app.use(bodyParser.urlencoded({extended: true}))

app.get('/', (req, res) => {
    const today = new Date();
    const currentDay =  today.getDay();

    if(currentDay ===  6 || currentDay === 0){
        res.write("<h1>Here comes the weekend</h1>");
    }else{
        res.write("<p>Football today</p>")
        res.write("<h2>Lol You have work to do</h2>")
        res.send();
    }
})

app.listen(port, () => {
    console.log(`Server running at https://localhost${port}`)
})