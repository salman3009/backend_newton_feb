const blogsSchema = require('../models/blogsSchema');

async function authorization(req,res,next){
    try{
        let result = await blogsSchema.findById(req.params.id);
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