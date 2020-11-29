const express=require("express");
const bodyParser= require('body-parser');
const path=require('path');
require('dotenv').config();
const passport = require('passport');


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
// Importing routes
const loginRoutes =require("./routes/loginRoutes");
const foRoutes=require("./routes/foRoutes");
const farmerRoutes=require("./routes/farmerRoutes");
const agricRoutes=require("./routes/agricRoutes");
const custRoutes=require("./routes/customerRoutes");
const adminRoutes=require("./routes/adminRoutes");
// Import models
const foregModel=require("./models/fo");
const userModel=require("./models/user")
// instatiateing express function in our file
const app =express();
const expressSession = require('express-session')({
  secret: 'secret',
  resave: false,
  saveUninitialized: false
});
// Set middleware for pug
app.set('views', path.join(__dirname, 'views'));
app.set("view engine","pug");
//  All middleware 
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public')));
app.use(expressSession); 
app.use(passport.initialize());
app.use(passport.session());
// passport model
passport.use(userModel.createStrategy());
passport.serializeUser(userModel.serializeUser());
passport.deserializeUser(userModel.deserializeUser());
// importing routes to server
app.use("/",loginRoutes);
app.use("/fo",foRoutes);
app.use("/farmer",farmerRoutes);
app.use("/ao",agricRoutes);
app.use("/customer",custRoutes)
app.use("/admin",adminRoutes);
// Route for home page
app.get("/",(req,res)=>{
    res.render("index");
    console.log("Hello welcome my Ufarm project");
})
// logout
app.post('/logout', (req, res) => {
  if (req.session.user) {
      req.session.destroy((err)=> {
          if (err) {
              console.log("failed to destroy session")
          } else {
              return res.redirect('/login');
          }
      })
  }
})
//when an endpoint that does exist is hit
app.get('*',(req,res)=>{
    res.send('error page')
})
  
// created a server have it listen at port 3000
app.listen(3000,()=>console.log("Listening at port 3000"));