const express = require('express');
const router = express.Router();
const weatherController = require('../controllers/weatherController');

/*
  Instructions for students:
  Implement the route handler for retrieving the weather data for a city by its zipcode.

  Route:
    GET /city/zipcode/:code

  Input:
    - :code (string): The zipcode of the city for which weather data needs to be retrieved.

  Output:
    - If the city zipcode is found in the database, send a JSON response with the following structure and a status code of 200:
      {
        "status": "success",
        "message": "Weather data retrieved",
        "data": { ... } // Weather data object for the specified city
      }

    - If the city zipcode is not found in the database, send a JSON response with the following structure and a status code of 404:
      {
        "status": "error",
        "message": "Failed to retrieve weather data"
        "error": "City not found"
      }

  Tips:
    - Use the weatherController.getWeatherDataByZipCode() function to retrieve the weather data for the specified city.
    - Pass the zipcode from the request parameters to the getWeatherDataByZipCode() function.
    - Handle the returned result and send the appropriate JSON response based on the result.

*/

// Level 3: Get City Weather Data by ZipCode
router.get('/city/zipcode/:code', async (req, res) => {
   // TODO: Implement this function
});

module.exports = router;
