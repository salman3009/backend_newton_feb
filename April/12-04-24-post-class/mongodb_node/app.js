const mongoClient = require('mongodb').MongoClient;
const connect = new mongoClient("mongodb://localhost:27017");
const db = connect.db("employeeManagement");

async function find(){
    try{
      let result = await db.collection('employeeDetails').find().toArray();
      console.log(result);
    }catch(err){
        console.log(err);
    }
}

find();