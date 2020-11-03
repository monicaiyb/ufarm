//I am importing moduless into my project
const express=require("express");
const bodyParser= require('body-parser');
const path=require('path');
const mongoose=require("mongoose");

// requiring the database file
require("./db/db.js");
// const customersView=require("./routes/customerRoutes")


// instatiateing express function in our file
const app =express();




app.set("view engine","pug");
app.set("views", path.join(__dirname,"view"));
 
//  All my middleware for needed are written here
app.use(bodyParser.urlencoded({extended: true}))

// Application configurations.
app.use(express.static('public'));
app.use('/public', express.static(__dirname + '/public'));
// app.use(customersView);

//Sending my homepage to the browser
app.get("/",(req,res)=>{
    res.sendFile(__dirname +"/index_old.html");
    console.log("Hello welcome my Ufarm project");
})
// app.get("/customers_login",(req,res)=>{
//   res.sendFile(__dirname+"/customers_login.html")
// })
app.get("/c_signup",(req,res)=>{
    res.sendFile(__dirname+"customers_signup.html");
})


 

// created a server have it listen at port 3000
app.listen(3000,()=>console.log("Listening at port 3000"));
