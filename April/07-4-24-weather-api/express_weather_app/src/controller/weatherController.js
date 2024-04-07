const fs = require('fs');

function getDataFromDatabase(){
       return new Promise((resolve,reject)=>{
             fs.readFile('src/data/data.json',(err,data)=>{
                 if(err){
                    reject(err);
                 }
                 else{
                    resolve(JSON.parse(data));
                 }
             })
       })
}

async function getWeatherDataByName(cityName){
    try{
      let result = await getDataFromDatabase();
      console.log(result);
      return result;
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