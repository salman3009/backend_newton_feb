const express = require('express');
const app = express();

app.get('/product/:productId', (req, res) => {
  res.status(200).json({
    productId:req.params.productId
  })
  //Write a code here for endpoint /product/:productId and also print parameter in json form
});

module.exports = app;
