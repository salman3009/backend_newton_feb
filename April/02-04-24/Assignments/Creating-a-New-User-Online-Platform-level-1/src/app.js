const fs = require("fs");
const express = require("express");
const app = express();

// Importing products from products.json file
const userDetails = JSON.parse(
  fs.readFileSync(`${__dirname}/data/userDetails.json`)
);

//Middlewares
app.use(express.json());

// Write POST endpoint for registering new user

// GET endpoint for sending the details of users
app.get("/api/v1/details", (req, res) => {
  res.status(200).json({
    status: "Success",
    message: "Detail of users fetched successfully",
    data: {
      userDetails,
    },
  });
});

// GET endpoint for sending the products to client by id
app.get("/api/v1/userdetails/:id", (req, res) => {
  let { id } = req.params;
  id *= 1;
  const details = userDetails.find((details) => details.id === id);
  if (!details) {
    return res.status(404).send({
      status: "failed",
      message: "Product not found!",
    });
  } else {
    res.status(200).send({
      status: "success",
      message: "Details of users fetched successfully",
      data: {
        details,
      },
    });
  }
});

app.post('/api/v1/details/',(req,res)=>{

     const id = userDetails[userDetails.length-1].id+1;
     const {name,mail,number} = req.body;

     const newUserDetails={id,name,mail,number};
     userDetails.push(newUserDetails);

     fs.writeFile(`${__dirname}/data/userDetails.json`,JSON.stringify(userDetails),()=>{
      res.status(201).json({
        status:"Success",
        message:"User registered successfully",
        data:{
          newProduct:newUserDetails
        }
      })
     })


})

module.exports = app;
