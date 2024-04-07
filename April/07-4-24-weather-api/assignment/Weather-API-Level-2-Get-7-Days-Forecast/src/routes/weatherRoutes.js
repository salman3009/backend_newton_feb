const express = require('express');
const router = express.Router();
const weatherController = require('../controllers/weatherController');



// Level 2: Get 7 Days Weather Forecast Data by Name
router.get('/forecast/city/:name', async (req, res) => {
  try {
    const cityName = req.params.name;
    const forecastData = await weatherController.getForecastDataByName(cityName);
    res.status(200).json({ status: 'success', message: 'Forecast data retrieved', data: forecastData });
  } catch (error) {
    res.status(404).json({ status: 'error', message: 'Failed to retrieve forecast data', error: error.message });
  }
});

module.exports = router;