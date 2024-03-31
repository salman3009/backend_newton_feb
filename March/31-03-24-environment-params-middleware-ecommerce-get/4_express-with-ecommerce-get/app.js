const express = require('express');
const app = express();
const fs = require('fs');


const product = JSON.parse(fs.readFileSync('./data/products.json').toString());
console.log(product);


app.get('/api/v1/products',(req,res)=>{
    res.send({data:product});
})

module.exports = app;