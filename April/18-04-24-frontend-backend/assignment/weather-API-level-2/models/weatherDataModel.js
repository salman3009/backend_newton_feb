const mongoose = require('mongoose');

const weatherDataSchema = new mongoose.Schema({
  cityName: {
    type: String,
    required: true,
  },
  temperature: {
    type: Number,
    required: true,
  },
  zipCode: {
    type: String,
    required: true,
  },
  humidity: {
    type: Number,
    required: true,
  },
  weatherDescription: {
    type: String,
    required: true,
  },
});

const WeatherData = mongoose.model('WeatherData', weatherDataSchema);

module.exports = WeatherData;
