const app = require('./app');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const WeatherData = require('../models/weatherDataModel');
const fs = require('fs');
const path = require('path');

dotenv.config();

const dataFilePath = path.join(__dirname, '../data', 'data.json');
const weatherData = JSON.parse(fs.readFileSync(dataFilePath, 'utf-8'));

dotenv.config();

mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const seedWeatherData = async () => {
  try {
    await WeatherData.deleteMany();
    await WeatherData.insertMany(weatherData);
    console.log('Weather data seeded successfully');
  } catch (error) {
    console.error('Error seeding weather data:', error.message);
  }
};

seedWeatherData();

app.listen(3000, () => console.log('Server running......'));
