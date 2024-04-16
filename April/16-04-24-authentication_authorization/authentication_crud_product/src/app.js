const express = require('express');
const productRoutes = require('./routes/productRoutes');
const userRoutes = require('./routes/userRoutes');
const app = express();

app.use(express.json());
app.use('/api/v1/product',productRoutes);
app.use('/api/v1/user',userRoutes);

module.exports = app;