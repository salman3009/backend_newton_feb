const express = require('express');
const app = express();

//Middlewares
app.use(express.json());

// Write a GET Request to get the next number from the input 'num'.
// Endpoint : /api/get-next-num
// Return the response as {message : , status: }

app.get("/api/get-next-num",(req,res)=>{
    
    let result = Number(req.body.num);
    res.status(200).json({
        status:"success",
        message:result+1
    })
})

module.exports = app;
