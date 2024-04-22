const express = require('express');
const router = express.Router();
const {registration,login,userInformation} = require('../controllers/userController');

router.post('/registration',registration);
router.post('/login',login);
router.get('/:id',userInformation);

module.exports = router;