const express = require('express');
const app = express();

app.get('',(req,res)=>{
    res.send("<h1>Hello world newton</h1>");
})

app.listen(8080,()=>{
    console.log("server is listening on port 8080");
})