const express = require('express');
const app = express();

app.use(express.json());

app.get("/api/v1/products",(req,res)=>{
    
    let result = Number(req.body.num);
    res.status(200).json({
        status:"success",
        message:result+1
    })
})

module.exports = app;