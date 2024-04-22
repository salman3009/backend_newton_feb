const express = require('express');
const blogsRoutes = require('./routes/blogsRoutes');
const userRoutes = require('./routes/userRoutes');
const app = express();
const cors = require('cors');

app.use(express.json());
app.use(cors());
app.use('/api/v1/blogs',blogsRoutes);
app.use('/api/v1/user',userRoutes);

module.exports = app;