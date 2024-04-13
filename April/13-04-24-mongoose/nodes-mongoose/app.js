const mongoose = require('mongoose');
const Employee =require('./models/employee');

mongoose.connect("mongodb://127.0.0.1:27017/mongooseManagement").then(()=>{
    console.log("database is connected");
}).catch((err)=>{
    console.log(err);
})

async function createOperation(){
     try{
       const employeePost = new Employee({
         firstName:"suresh",
         age:44,
         salary:4000
       })
       const result = await employeePost.save();
       console.log(result);
     }
     catch(err){
        console.log(err);
     }
}
// createOperation();

async function findOperation(){
      try{
        let result = await Employee.find();
        console.log(result);
      }catch(err){
        console.log(err);
      }
}

findOperation();