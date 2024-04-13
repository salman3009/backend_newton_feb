const express = require('express');
const app = express();
const tourRoutes = require('./routes/tourRoutes');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

mongoose.connect(process.env.URI).then(()=>{
    console.log("database is connected");
}).catch((err)=>{
    console.log(err);
})


app.use(express.json());
app.use('',express.static(`${__dirname}/views`));
app.use('/api/v1/tours',tourRoutes);


module.exports = app;