const express = require('express');
const fs = require("fs");
const app = express();
var users   =require("../models/user.js");
const users_data = JSON.parse(fs.readFileSync(`${__dirname}/../data/users.json`));

//Router Middlewares
app.use(express.json());

app.get("/:id",function(req,res){

    var id = req.params.id;
    var name, email, pswd, role;

    for(var i=0;i<users_data.length;i++){

        if(users_data[i]["id"] == id){

            name = users_data[i]["name"];
            email = users_data[i]["email"];
            pswd = users_data[i]["pswd"];
            role = users_data[i]["role"];
        }
    }

    var newUser = {
        "name":name,
        "email":email,
        "pswd": pswd,
        "role": role
    };

    res.send(newUser);

});
module.exports = app;
