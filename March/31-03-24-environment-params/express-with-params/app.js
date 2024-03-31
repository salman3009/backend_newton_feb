const express = require('express');
const app = express();


app.get('/product/:cardId',(req,res)=>{
    console.log(req.params.cardId)
    res.send(`The given cardId is ${req.params.cardId}`);
})

module.exports = app;