const { json } = require('express');
const fs = require('fs');
const { resolve } = require('path');

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


async function getWeatherDetails() {
    let result = await getDataFromDatabase();
    return result;
}

async function postWeatherDetails(data) {
    try {
        let list = await getDataFromDatabase();
        list.push(data);
        console.log("list", list);
        let result = await saveDataToDatabase(list);
        return result;
    } catch (err) {
           return err;
    }


}


module.exports = {
    getWeatherDetails,
    postWeatherDetails
}