const fs = require('fs');

function getDataFromDatabase(){
     return new Promise((resolve,reject)=>{
       fs.readFile('./src/data/data.json',(err,data)=>{
         if(err){
            reject(err);
         }
         else{
            resolve(JSON.parse(data));
         }
       })
     })
}


async function getWeatherDetails(){
    let result = await getDataFromDatabase();
    return result;
}


module.exports={
    getWeatherDetails
}