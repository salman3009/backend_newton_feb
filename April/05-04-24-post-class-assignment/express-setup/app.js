const express = require('express');
const app = express();

app.get("/api/v1/products",(req,res)=>{
    res.status(200).json({
        status:"success",
        message:"fetched successfully"
    })
})

module.exports = app;