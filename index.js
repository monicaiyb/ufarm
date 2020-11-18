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
const farmerRoutes=require("./routes/farmerRoutes")
// Import models
const foregModel=require("./models/fo");

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
passport.use(foregModel.createStrategy());
passport.serializeUser(foregModel.serializeUser());
passport.deserializeUser(foregModel.deserializeUser());
// importing routes to server
app.use("/login",loginRoutes);
app.use("/fo",foRoutes);
app.use("/farmer",farmerRoutes);


app.get("/",(req,res)=>{
    res.render("index");
    console.log("Hello welcome my Ufarm project");
})

app.get('*',(req,res)=>{
    res.send('error page')
})
  
// created a server have it listen at port 3000
app.listen(3000,()=>console.log("Listening at port 3000"));