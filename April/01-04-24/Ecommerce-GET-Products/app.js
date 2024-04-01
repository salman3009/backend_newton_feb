const express = require('express');
const app = express();
const fs = require('fs');

const products = JSON.parse(fs.readFileSync('./data/products.json'));
console.log(products);

app.get('/api/v1/products',(req,res)=>{
    res.status(200).json({
        status:"Success",
        message:"successfully fetched",
        data:{
            products 
        }
    })
})

module.exports = app;