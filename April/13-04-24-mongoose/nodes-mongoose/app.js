const mongoose = require('mongoose');

mongoose.connect("mongodb://127.0.0.1:27017/NewtonManagement").then(()=>{
    console.log("database is connected");
}).catch((err)=>{
    console.log(err);
})