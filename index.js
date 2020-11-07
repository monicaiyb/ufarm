//I am importing moduless into my project
const express=require("express");
const bodyParser= require('body-parser');
const path=require('path');
const mongoose=require("mongoose");

// requiring the database file
require("./db/db.js");
const customersView=require("./routes/customerRoutes")


// instatiateing express function in our file
const app =express();




app.set("view engine","pug");
app.set("views", "./views");
 
//  All my middleware for needed are written here
app.use(bodyParser.urlencoded({extended: true}))

// Application configurations.
app.use(express.static('public'));

app.use("/",customersView);

//Sending my homepage to the browser



 

// created a server have it listen at port 3000
app.listen(3000,()=>console.log("Listening at port 3000"));
