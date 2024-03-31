const express = require('express');
const app = express();

app.get('/user/:userId', (req, res) => {
  res.send({userId:req.params.userId});
  //Write a code here for endpoint /user/:userId and also print parameter in json form
});

module.exports = app;
