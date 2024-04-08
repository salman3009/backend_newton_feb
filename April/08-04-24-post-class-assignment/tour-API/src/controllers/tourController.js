const fs = require('fs');

function getDataFromDatabase() {
    return new Promise((resolve, reject) => {
        fs.readFile('./src/data/data.json', (err, data) => {
            if (err) {
                reject(err);
            }
            else {
                resolve(JSON.parse(data));
            }
        })
    })
}


function saveDataToDatabase(data) {
    return new Promise((resolve, reject) => {
        const jsonData = JSON.stringify(data);
        console.log("saveDataToDatabase", jsonData);
        fs.writeFile('./src/data/data.json', jsonData, (err, data) => {
            console.log(err);
            if (err) {
                reject(err);
            }
            else {
                resolve(data)
            }
        })
    })
}


async function getTourDetails() {
    try{
        let result = await getDataFromDatabase();
        return result;
    }catch(err){
        return err;
    }
}

async function postTourDetails(data) {
    try {
        let list = await getDataFromDatabase();
        let id = list[list.length-1].id+1;
        let newTour = {id,...data};
        list.push(newTour);
        let result = await saveDataToDatabase(list);
        return result;
    } catch (err) {
           return err;
    }

}


async function deleteTourDetails(id) {
    try {
        let list = await getDataFromDatabase();
        let index = list.findIndex((obj)=>{
          return obj.id == id;
        });
        list.splice(index,1);
        let result = await saveDataToDatabase(list);
        return result;
    } catch (err) {
           return err;
    }

}



module.exports = {
    getTourDetails,
    postTourDetails,
    deleteTourDetails
}