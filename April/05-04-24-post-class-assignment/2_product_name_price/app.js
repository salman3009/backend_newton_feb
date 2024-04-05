const express = require('express');
const app = express();
const fs = require('fs');

const products = JSON.parse(fs.readFileSync('./data/products.json'));

app.use(express.json());

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