const express = require('express');
const router = express.Router();
const weatherController = require('../controller/weatherController');


router.get("/city/:name",(req,res)=>{

    try{
       const cityName = req.params.name;
       const weatherData = weatherController.getWeatherDataByName(cityName);
       res.status(200).json({
         status:"success",
         message:"weather data retrived",
         data:weatherData
       })
    }
    catch(err){
       res.status(404).json({
          status:"error",
          message:"failed to retrieve weather data"
       })
    }
})


router.post('/country',(req,res)=>{
        res.status(201).json({message:"post method"});
})
module.exports = router;