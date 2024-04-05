const express = require('express');
const app = express();
const fs = require('fs');

const products = JSON.parse(fs.readFileSync('./data/products.json'));

app.use(express.json());

app.get("/api/v1/products/:id",(req,res)=>{
    
     const id = req.params.id;

     const product = products.find((obj)=>{
       return obj.id == id;
     });

     if(!product){
        return res.status(404).json({
            status:"failed",
            message:"Not found!"
        })
     }
     else{
        return res.status(200).json({
            status:"success",
            message:"Product name fetched successfully",
            data:{
                product
            }
        })
     }


})

module.exports = app;