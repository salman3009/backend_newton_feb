const express = require('express');
const router = express.Router();

router.get("/city/:name",(req,res)=>{
    try{
       res.status(200).json({
         status:"success",
         message:"weather data retrived",
         data:[]
       })
    }
    catch(err){
       res.status(404).json({
          status:"error",
          message:"failed to retrieve weather data"
       })
    }
})

module.exports = router;