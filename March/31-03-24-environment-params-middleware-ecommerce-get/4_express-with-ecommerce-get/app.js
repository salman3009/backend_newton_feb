const express = require('express');
const app = express();
const fs = require('fs');


const product = JSON.parse(fs.readFileSync('./data/products.json').toString());
console.log(product);


app.get('',(req,res)=>{
    res.send({data:product});
})

module.exports = app;