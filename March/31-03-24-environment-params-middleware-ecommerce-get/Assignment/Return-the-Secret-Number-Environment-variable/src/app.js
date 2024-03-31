const express = require('express');
const app = express();
app.use(express.json());

// Write a GET route to return the value stored in the NUMBER variable stored in the .env file
/*
{
    "number" : "2"
}
*/
app.get('/api/get-env', (req, res) => {
   //Write your code here
   res.send({number:process.env.NUMBER});
});

module.exports = app;
