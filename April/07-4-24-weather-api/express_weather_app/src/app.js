const express = require('express');
const app = express();
const weatherRoute = require('./routes/weatherRoutes');
const userRoute = require('./routes/userRoutes');

app.use('/api/v1/products',weatherRoute);
app.use('/api/v1/users',userRoute);


module.exports=app;