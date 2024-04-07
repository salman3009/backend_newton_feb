const fs = require('fs');

async function getDataFromDatabase() {
  return new Promise((resolve, reject) => {
    fs.readFile('src/data/data.json', (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(JSON.parse(data));
      }
    });
  });
}

async function saveDataToDatabase(data) {
  return new Promise((resolve, reject) => {
    const jsonData = JSON.stringify(data);
    fs.writeFile('src/data/data.json', jsonData, (err) => {
      if (err) {
        reject(err);
      } else {
        resolve();
      }
    });
  });
}

/*
  Instructions for students:
  Implement the function getForecastDataByName(cityName) that retrieves the 7-day weather forecast data for a city by its name.

  Tips:
    - Use the getDataFromDatabase() function to retrieve the data from the database.
    - Access the array of cities and their forecast data from the returned result.
    - Find the city object with the matching name and extract its forecast data.
    - Return the appropriate JSON response based on the result.

*/


// Level 2: Get 7 Days Weather Forecast Data by Name
async function getForecastDataByName(cityName) {
  const data = await getDataFromDatabase();
  const cityData = data.find((obj)=>{
   return obj.city.toLowerCase() === cityName.toLowerCase();
  })
  if(cityData){
    return cityData.forecast;
  }
  else{
    throw new Error('City not found');
  }

  // TODO: Implement this function
  
}


module.exports = {
  getForecastDataByName
};