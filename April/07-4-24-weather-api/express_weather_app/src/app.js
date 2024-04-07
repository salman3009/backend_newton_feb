const express = require('express');
const app = express();
const weatherRoute = require('./routes/weatherRoutes');

app.use('/api/v1/products',weatherRoute);


module.exports=app;