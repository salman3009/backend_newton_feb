const express = require('express');
const app = express();
app.use(express.json());

app.use((req,res,next)=>{
    console.log("first middleware");
    if(req.body.num1 && req.body.num2){
        next();
    }
    else{
        res.status(400).send({error:"Number is not found"});
    }
  
})


app.use((req,res,next)=>{
    console.log("second middleware");
    next();
})

app.post('/add',(req,res)=>{
    let num1 = req.body.num1;
    let num2 = req.body.num2;
    let result = num1 + num2;
    res.send({result:result});
})

module.exports = app;