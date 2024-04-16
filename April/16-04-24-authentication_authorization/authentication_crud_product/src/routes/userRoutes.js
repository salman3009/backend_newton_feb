const express = require('express');
const router = express.Router();
const {createUser,login} = require('../controllers/userController');

router.post('/registration',createUser);
router.post('/login',login);

module.exports = router;