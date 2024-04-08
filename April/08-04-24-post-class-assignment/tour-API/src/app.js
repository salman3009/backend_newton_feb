const express = require('express');
const app = express();
const tourRoutes = require('./routes/tourRoutes');

app.use(express.json());
app.use('/api/v1/tours',tourRoutes);


module.exports = app;