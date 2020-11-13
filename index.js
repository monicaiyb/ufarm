//I am importing moduless into my project
const express=require("express");
const bodyParser= require('body-parser');
const path=require('path');
require('dotenv').config();
const passport = require('passport');

const expressSession = require('express-session')({
  secret: 'secret',
  resave: false,
  saveUninitialized: false
});

const mongoose=require("mongoose");
mongoose.connect(process.env.DATABASE,{
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex:true,
  useFindAndModify:false
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
const aoRoutes=require("./routes/aoRoutes");
const farmerOneRoutes=require("./routes/farmerOneRoutes");
const farmerRoutes=require("./routes/farmerRoutes");

// importing models
const registerModel=require("./models/registration");
// const regFarmerModel=require("./models/farmer");
// const foregModel=require("./models/fo");

// instatiateing express function in our file
const app =express();

app.set('views', path.join(__dirname, 'views'));
app.set("view engine","pug");
// app.set("views", "./views");
 
//  All my middleware for needed are written here
app.use(bodyParser.urlencoded({extended: true}))
// app.use(express.static('public'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(expressSession);

app.use(passport.initialize());
app.use(passport.session());

passport.use(registerModel.createStrategy());
passport.serializeUser(registerModel.serializeUser());
passport.deserializeUser(registerModel.deserializeUser());

// importing routes to server
app.use("/",customerRoutes);
app.use("/ao",aoRoutes);
app.use("/farmerOne",farmerOneRoutes);
app.use("/farmer",farmerRoutes);

// instatiting models
// app.use("/c_signup",registerModel);
// app.use("/farmerOne/",regFarmerModel);







//Sending my homepage to the browser
app.post('/logout', (req, res) => {
  if (req.session) {
      req.session.destroy((err)=> {
          if (err) {
              // failed to destroy session
          } else {
              return res.redirect('/login');
          }
      });
  }  
})

 

// created a server have it listen at port 3000
app.listen(3000,()=>console.log("Listening at port 3000"));
