const fs = require('fs');
const TourSchema = require('../models/tour');

function getDataFromDatabase(){
    return new Promise((resolve,reject)=>{
         fs.readFile('./src/models/data.json',(err,data)=>{
            if(err){
                reject(err);
            }
            else{
                resolve(JSON.parse(data));
            }
         })
    })
}


async function getTourDetails(){
    try{
      let result = await getDataFromDatabase();
      return result;
    }catch(err){
        return err;
    }
}


async function createTourDetails(data){
    try{
        const tour = new TourSchema({
          name:data.name,
          description:data.description,
          duration:data.duration,
          price:data.price
        })
        const result = await tour.save();
        return result;
      }
      catch(err){
         console.log(err);
      }
}

module.exports ={
    getTourDetails,
    createTourDetails
}