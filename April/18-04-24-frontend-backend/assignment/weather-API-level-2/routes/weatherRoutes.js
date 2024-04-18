const express = require('express');
const router = express.Router();
const {
  getWeatherByCityName,
  getWeatherByZipCode,
  postWeatherAlert,
} = require('../controllers/weatherController');
const isLoggedIn = require('../middlewares/isLoggedIn');

router.get('/city/:cityName', isLoggedIn, getWeatherByCityName);

router.get('/zip/:zipCode', isLoggedIn, getWeatherByZipCode);

router.post('/alerts', isLoggedIn, postWeatherAlert);

module.exports = router;
