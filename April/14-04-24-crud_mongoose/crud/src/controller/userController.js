const UserSchema = require('../models/userModal');

async function createUsers(data){
    try{
      
        const user = new UserSchema({
            name:data.name,
            email:data.email
        })

         let result = await user.save();
         return result;

    }catch(err)
    {
        throw new Error(err);
    }
}


async function findUsers(){
    try{
    
         let result = await UserSchema.find();
         return result;

    }catch(err)
    {
        throw new Error(err);
    }
}


module.exports ={
    createUsers,
    findUsers
}