const express = require('express');
const app = express();
const fs = require('fs');


const products = JSON.parse(fs.readFileSync('./data/products.json'));
console.log(products);

app.use(express.json());

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

    let id = Number(req.params.id);
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

app.post("/api/v1/products",(req,res)=>{
      
      const newId = products[products.length-1].id+1;
      console.log(newId);
      const {name,price,stocks} = req.body;

     res.status(201).json({
      status:"success",
      message:"Product registered successfully"
     })
})
module.exports = app;