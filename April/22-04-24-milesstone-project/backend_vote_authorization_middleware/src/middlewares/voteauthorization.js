
const blogsSchema = require('../models/blogsSchema');

async function voteauthorization(req,res,next){
    try{
        //req.params.id --> blogs primary key
        let result = await blogsSchema.findById(req.params.id);
        //result.user--> blogs creator id 
        //req.id --> current login person id 
        let resultFind = result.votes.findIndex((obj)=>{
            return obj == req.id
        })
        if(resultFind == -1){
            next();
        }
        else{
            res.status(401).json({
                status:"failed",
                message:"person can like/dislike one at a time"
              })
        }
        
    }catch(err){
       res.status(401).json({
         status:"failed",
         message:"person can like/dislike one at a time"
       })
    }
    
   
}
module.exports= voteauthorization;