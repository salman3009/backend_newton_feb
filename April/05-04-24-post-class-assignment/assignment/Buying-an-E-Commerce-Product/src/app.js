const fs = require('fs');
const express = require('express');
const app = express();


// Importing products from products.json file
const products = JSON.parse(
    fs.readFileSync(`${__dirname}/data/product.json`)
);


// Middlewares
app.use(express.json());

// Write PATCH endpoint to buy a product for the client here
// Endpoint /api/v1/products/:id

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
              message:`Thank you for purchasing ${product.name}`,
              data:{
                 product
              }
         })
     }
     else{
         return res.status(404).json({
             status:"success",
             message:`${product.name} , Out of stock!`
         }) 
     }

    }
})



module.exports = app;
