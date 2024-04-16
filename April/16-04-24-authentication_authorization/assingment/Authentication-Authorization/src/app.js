const express = require('express');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');

const app = express();
const port = 3000;
const secretKey = 'newtonSchool';

app.use(bodyParser.json());

// Mock user data
const users = [
  { id: 1, username: 'user1', password: 'password1' },
  { id: 2, username: 'user2', password: 'password2' },
];

// Authentication endpoint
app.post('/login', (req, res) => {
  const { username, password } = req.body;

  // Replace this with database queries in a real application
  const user = users.find(
    (u) => u.username === username && u.password === password
  );

  if (!user) {
    return res.status(401).json({ message: 'Authentication failed' });
  }

  // Generate a JWT token
  const token = jwt.sign(
    { userId: user.id, username: user.username },
    secretKey
  );

  res.status(201).json({ token });
});

app.get('/profile', (req, res) => {
  // Middleware to check for a valid JWT token
  const token = req.headers.authorization.split(' ')[1];

  if (!token) {
    return res.status(401).json({ message: 'Authorization required' });
  }

  jwt.verify(token, secretKey, (err, decoded) => {
    if (err) {
      console.error(err);
      return res
        .status(401)
        .json({ message: 'Invalid token', error: err.message });
    }

    // Token is valid, you can access the user's data from 'decoded'
    res.status(201).json({ message: 'Profile data', user: decoded });
  });
});

module.exports = app;
