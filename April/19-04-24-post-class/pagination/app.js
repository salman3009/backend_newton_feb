const mongoose = require('mongoose');
const Employee =require('./models/employee');

mongoose.connect("mongodb://127.0.0.1:27017/pagination").then(()=>{
    console.log("database is connected");
}).catch((err)=>{
    console.log(err);
})

async function createOperation(){
     try{
       const employeePost = new Employee({
         firstName:"suresh_10",
         age:44,
         salary:4000,
         role:"admin"
       })
       const result = await employeePost.save();
       console.log(result);
     }
     catch(err){
        console.log(err);
     }
}
//  createOperation();

async function findOperation(){
      try{
        //req.params.current = 1
        //req.params.total  = 20
        let current_page = 1;
        let total_per_page = 5;
        let skip_scenario = (current_page * total_per_page);
        let result = await Employee.find().skip(skip_scenario).limit(total_per_page);
        console.log(result);
      }catch(err){
        console.log(err);
      }
}

findOperation();