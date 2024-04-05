const fs = require("fs");
const express = require("express");
const app = express();

// Importing products from products.json file
const products = JSON.parse(fs.readFileSync(`${__dirname}/data/products.json`));

// Middlewares
app.use(express.json());

// Write GET endpoint for sending product to the client here
// Endpoint - /api/v1/products/:name/:price

app.get("/api/v1/products/:name/:price",(req,res)=>{
    
    const name = req.params.name;
    const price = Number(req.params.price);

    const product = products.find((obj)=>{
      return obj.name == name && obj.price == price;
    });

    if(!product){
       return res.status(404).json({
           status:"failed",
           message:"Product not found!"
       })
    }
    else{
       return res.status(200).json({
           status:"success",
           message:"Product fetched successfully",
           data:{
               product
           }
       })
    }


})

module.exports = app;
