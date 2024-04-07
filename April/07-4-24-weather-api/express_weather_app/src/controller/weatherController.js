
function getWeatherDataByName(cityName){
    try{
      return cityName;
    }
    catch(err){
        throw new Error('city not found');
    }
}

function getCountry(){
    try{
        return "country";
      }
      catch(err){
          throw new Error('city not found');
      }
}

module.exports = {
    getWeatherDataByName,
    getCountry
}