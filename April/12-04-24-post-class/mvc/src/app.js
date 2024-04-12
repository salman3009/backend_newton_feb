const express = require('express');
const app = express();
const tourRoutes = require('./routes/tourRoutes');

app.use(express.json());
app.use('',express.static(`${__dirname}/views`));
app.use('/api/v1/tours',tourRoutes);


module.exports = app;