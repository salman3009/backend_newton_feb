

function isLogged(req,res,next){
    console.log("middleware");
    next();
}
module.exports= isLogged;