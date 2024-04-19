const express = require('express');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');

const app = express();
const secretKey = 'newtonSchool';

app.use(bodyParser.json());

// Mock user data
const users = [
  { id: 1, username: 'user1', password: 'password1' },
  { id: 2, username: 'user2', password: 'password2' },
];

// Mock product data
const products = [
  { id: 1, name: 'Product A', price: 10 },
  { id: 2, name: 'Product B', price: 20 },
];

// Authentication endpoint
app.post('/login', (req, res) => {
  const { username, password } = req.body;

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

app.get('/product', (req, res) => {
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

    // Mock product data retrieval (replace with actual logic)
    const productData = products;

    res.status(200).json({ message: 'Product data', products: productData });
  });
});

module.exports = app;
