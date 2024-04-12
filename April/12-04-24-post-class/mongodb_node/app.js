const mongoClient = require('mongodb').MongoClient;
const connect = new mongoClient("mongodb://127.0.0.1:27017");
const db = connect.db("employeeManagement");

async function find(){
    try{
      let result = await db.collection('employeeDetails').find().toArray();
      console.log(result);
    }catch(err){
        console.log(err);
    }
}

// find();


async function create(){
    try{
     let obj ={
        firstName:"rakesh",
        salary:4000
     }
     let result = await db.collection('salaryDetails').insertOne(obj);
     console.log(result);
    }catch(err){
        console.log(err);
    }
}
create();