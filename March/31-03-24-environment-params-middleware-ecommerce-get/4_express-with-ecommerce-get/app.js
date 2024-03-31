const express = require('express');
const app = express();
const fs = require('fs');


const product = JSON.parse(fs.readFileSync('./data/products.json').toString());
console.log(product);


app.get('',(req,res)=>{
    console.log(process.env.TOKEN);
    res.send("welcome to expressjs");
})

module.exports = app;