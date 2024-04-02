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

app.get("/api/v1/products/:id",(req,res)=>{

    let id = parseInt(req.params.id);
    console.log(id);
   
    const product = products.find((obj)=>{
      return obj.id == id;
    })

    if(!product){
      res.status(404).json({
        status:"failed",
        message:"Product not found!"
      })
    }
    else{
      res.status(200).json({
        status:"success",
        message:"Product fetched successfully",
        data:{
          product
        }
      })
    }

  
})

module.exports = app;