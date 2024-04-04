const express = require('express');
const app = express();
const fs = require('fs');


const products = JSON.parse(fs.readFileSync('./data/products.json'));
console.log(products);

app.use(express.json());

app.get('/api/v1/products', (req, res) => {
  res.status(200).json({
    status: "Success",
    message: "successfully fetched",
    data: {
      products
    }
  })
})

app.get("/api/v1/products/:id", (req, res) => {

  let id = Number(req.params.id);
  console.log(id);

  const product = products.find((obj) => {
    return obj.id == id;
  })

  if (!product) {
    res.status(404).json({
      status: "failed",
      message: "Product not found!"
    })
  }
  else {
    res.status(200).json({
      status: "success",
      message: "Product fetched successfully",
      data: {
        product
      }
    })
  }
})

app.post("/api/v1/products", (req, res) => {

  console.log(products);
  let id;
  if (products.length > 0) {
     id = products[products.length - 1].id + 1;
  }
  else {
     id = 1;
  }

  console.log(id);
  const { name, price, stocks } = req.body;

  const newProduct = { id, name, price, stocks };
  products.push(newProduct);

  fs.writeFile('./data/products.json', JSON.stringify(products), () => {
    res.status(201).json({
      status: "success",
      message: "Product registered successfully",
      data: {
        productDetails: newProduct
      }
    })
  })
})

app.patch('/api/v1/products/:id',(req,res)=>{

   const id = Number(req.params.id);

   const product = products.find((obj) => {
    return obj.id == id;
   });

   if(!product){
      return res.status(404).json({
        status:"failed",
        message:"product not found"
      })
   }
   else{
      Object.assign(product,req.body);
      fs.writeFile('./data/products.json', JSON.stringify(products), () => {
        res.status(200).json({
          status: "success",
          message: "Product updated successfully",
          data: {
            updatedProduct: product
          }
        })
      })
   }
 
    


})

app.delete("/api/v1/products/:id",(req,res)=>{

  const id = Number(req.params.id);

  const refProduct = products.find((obj) => {
   return obj.id == id;
  });

  const index = products.indexOf(refProduct);

  products.splice(index,1);


  fs.writeFile('./data/products.json', JSON.stringify(products), () => {
    res.status(200).json({
      status: "success",
      message: "Product deleted successfully",
      data: {
        productDetails: refProduct
      }
    })
  })


})

module.exports = app;