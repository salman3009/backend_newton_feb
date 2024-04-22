const blogsSchema = require('../models/blogsSchema');

async function authorization(req,res,next){
    try{
        //req.params.id --> blogs primary key
        let result = await blogsSchema.findById(req.params.id);
        //result.user--> blogs creator id 
        //req.id --> current login person id 
        if(result.user == req.id){
            next();
        }
        else{
            res.status(401).json({
                status:"failed",
                message:"authorization failed. current user dont' have access to delete/update the data"
              })
        }
        
    }catch(err){
       res.status(401).json({
         status:"failed",
         message:"authorization. current user dont' have access to delete the data"
       })
    }
    
   
}
module.exports= authorization;