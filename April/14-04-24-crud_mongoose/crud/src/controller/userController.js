

function createUsers(){
    try{
      return "usercreated";
    }catch(err)
    {
        throw new Error(err);
    }
}

module.exports ={
    createUsers
}