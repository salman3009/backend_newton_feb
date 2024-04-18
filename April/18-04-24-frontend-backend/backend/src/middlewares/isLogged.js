const jwt = require('jsonwebtoken');

function isLogged(req,res,next){
    try{
      let token = req.headers.authorization;
      const decodeToken = jwt.verify(token,'newton_school_secret');
      console.log(decodeToken);
      next();
    }catch(err){
       res.status(401).json({
         status:"failed",
         message:"please login again. token failed"
       })
    }
    
   
}
module.exports= isLogged;