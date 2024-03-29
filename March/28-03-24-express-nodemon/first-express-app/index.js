const express = require('express');
const app = express();

app.get('',(req,res)=>{
    res.send("<h1>Hello world newton</h1>");
})

app.get('/person',(req,res)=>{
    res.send("Welcome to person routing");
})

app.get('/about',(req,res)=>{
     res.send("welcome to about");
})

app.listen(8080,()=>{
    console.log("server is listening on port 8080");
})