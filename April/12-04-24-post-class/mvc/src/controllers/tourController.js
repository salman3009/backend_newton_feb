const fs = require('fs');

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

module.exports ={
    getTourDetails
}