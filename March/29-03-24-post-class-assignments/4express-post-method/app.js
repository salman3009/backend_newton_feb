const express = require('express');
const app = express();

//middleware
app.use(express.json());
//express.json()  will parse the json data


app.post('',(req,res)=>{
    //req.body will help you to access data from frontend
    console.log(req.body);
    res.send("welcome to post method");
})



module.exports = app;