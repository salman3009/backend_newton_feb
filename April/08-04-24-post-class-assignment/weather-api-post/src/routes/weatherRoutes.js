const express = require('express');
const router = express.Router();
const weatherController = require('../controllers/weatherController');

router.get('/cityName', async(req,res)=>{
    try{
     let result = await weatherController.getWeatherDetails();
     res.status(200).json({
        status:"success",
        data:{
            result
        }
     })

    }catch(err){
        res.status(404).json({
            status:"failed"
        })
    }
})

router.post('/cityName',async (req,res)=>{
    try{
      let {city,date,humidity} = req.body;
      let result = await weatherController.postWeatherDetails({city,date,humidity});
      res.status(200).json({
        status:"success",
        message:"weather alert saved successfully"
     })
    }catch(err){
        res.status(404).json({
            status:"failed"
        }) 
    }
})

module.exports = router;