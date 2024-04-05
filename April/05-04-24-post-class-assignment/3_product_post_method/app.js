const express = require('express');
const app = express();
const fs = require('fs');

const products = JSON.parse(fs.readFileSync('./data/products.json'));

app.use(express.json());

app.post("/api/v1/products",(req,res)=>{
    
       const id = products[products.length-1].id+1;
       const{name,price,quantity}=req.body;

       const newProduct={id,name,price,quantity};

       products.push(newProduct);

       fs.writeFile('./data/products.json',JSON.stringify(products),()=>{
        return res.status(201).json({
            status:"Success",
            message:"Product added successfully",
            data:{
                newProduct
            }
        })
       })

})

module.exports = app;