const WeatherData = require('../models/weatherDataModel');

const getWeatherByCityName = async (req, res) => {
  const cityName = req.params.cityName;

  try {
    const weatherData = await WeatherData.findOne({ cityName });
    if (!weatherData) {
      return res
        .status(404)
        .json({ message: 'Weather data not found for the given city' });
    }
    res.status(200).json({ weatherData });
  } catch (error) {
    res
      .status(500)
      .json({ message: 'Internal server error', error: error.message });
  }
};

const getWeatherByZipCode = async (req, res) => {
  const zipCode = req.params.zipCode;

  try {
    const weatherData = await WeatherData.findOne({ zipCode });
    if (!weatherData) {
      return res
        .status(404)
        .json({ message: 'Weather data not found for the given zip code' });
    }

    res.status(200).json({ weatherData });
  } catch (error) {
    res
      .status(500)
      .json({ message: 'Internal server error', error: error.message });
  }
};

const postWeatherAlert = async (req, res) => {
  const { cityName, humidity, weatherDescription, temperature, zipCode } =
    req.body;

  try {
    const newAlert = await WeatherData.create({
      cityName,
      temperature,
      humidity,
      weatherDescription,
      zipCode,
    });

    res
      .status(201)
      .json({ message: 'Weather alert posted successfully', alert: newAlert });
  } catch (error) {
    res
      .status(500)
      .json({ message: 'Internal server error', error: error.message });
  }
};

module.exports = {
  getWeatherByCityName,
  getWeatherByZipCode,
  postWeatherAlert,
};
