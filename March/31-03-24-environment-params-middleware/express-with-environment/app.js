const express = require('express');
const app = express();


app.get('',(req,res)=>{
    console.log(process.env.TOKEN);
    res.send("welcome to expressjs");
})

module.exports = app;