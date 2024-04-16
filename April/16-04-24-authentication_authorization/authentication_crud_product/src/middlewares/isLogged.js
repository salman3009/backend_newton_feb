

function isLogged(req,res,next){
    console.log("middleware");
    console.log(req.headers.authorization);
    if(req.headers.authorization == "xyz"){
        next();
    }
    else{
        res.status(401).json({
          status:"failed",
          message:"authentication failed,please provide valid token"
        })
    }
   
}
module.exports= isLogged;