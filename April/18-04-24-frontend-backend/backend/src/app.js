const express = require('express');
const productRoutes = require('./routes/productRoutes');
const userRoutes = require('./routes/userRoutes');
const app = express();
const cors = require('cors');

app.use(express.json());
app.use(cors());
app.use('/api/v1/product',productRoutes);
app.use('/api/v1/user',userRoutes);

module.exports = app;