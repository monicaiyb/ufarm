//I am importing moduless into my project
const express=require("express");
const bodyParser= require('body-parser');
const path=require('path');

require('dotenv').config();
const passport = require('passport');

const mongoose=require("mongoose");
mongoose.connect(process.env.DATABASE,{
  useNewUrlParser: true,
  useUnifiedTopology: true
  });
  mongoose.connection
  .on('open', () => {
    console.log('Mongoose connection open');
  })
  .on('error', (err) => {
    console.log(`Connection error: ${err.message}`);
  });

// importing routes
const customerRoutes=require("./routes/customerRoutes");
const adminRoutes=require("./routes/adminRoutes");

// importing models
const registerModel=require("./models/registration");
const regFarmerModel=require("./models/farmer")


// instatiateing express function in our file
const app =express();

app.set("view engine","pug");
app.set("views", "./views");
 
//  All my middleware for needed are written here
app.use(bodyParser.urlencoded({extended: true}))

// Application configurations.
app.use(express.static('public'));

// importing routes to server
app.use("/",customerRoutes);
app.use("/admin",adminRoutes);

// instatiting models
app.use("/c_sign",registerModel);
app.use("/register",regFarmerModel)


app.use(passport.initialize());
app.use(passport.session());



//Sending my homepage to the browser



 

// created a server have it listen at port 3000
app.listen(3000,()=>console.log("Listening at port 3000"));
