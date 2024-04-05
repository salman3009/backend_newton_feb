const express = require('express');
const app = express();
const fs = require('fs');

const products = JSON.parse(fs.readFileSync('./data/products.json'));

app.use(express.json());

app.patch("/api/v1/products/:id",(req,res)=>{
    
       const id = Number(req.params.id);

       const product = products.find((obj)=>{
           return obj.id == id;
       })

       if(!product){
        return res.status(404).json({
            status:"failed",
            message:"Product not found!"
        })
       }
       else{
        product.quantity-=1;
        if(product.quantity>0){
            return res.status(200).json({
                 status:"success",
                 message:`Thank you for purchasing Product ${product.name}`,
                 data:{
                    product
                 }
            })
        }
        else{
            return res.status(404).json({
                status:"success",
                message:`${product.name}, Out of stock!`
            }) 
        }

       }
      


})

module.exports = app;