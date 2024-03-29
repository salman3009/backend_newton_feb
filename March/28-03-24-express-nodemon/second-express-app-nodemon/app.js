const express = require('express');
const app = express();

app.get('',(req,res)=>{
    res.send("to backend app");
})

app.get('/about',(req,res)=>{
    res.send("welcome about page ");
})

module.exports = app;