const express = require('express');
const app = express();

app.get('',(req,res)=>{
    res.send("<h1>Hello world app</h1>");
})


app.get('/profile',(req,res)=>{
    res.send({name:"akash",age:33});
})

module.exports = app;