// This is the file i am using for writing all my customers.
//importing express and other methods by requiring them
const express= require("express");
const mongoose=require("mongoose");


//const { check, validationResult } = require('express-validator');

const customer=require("../models/registration");    

// Instatiating the Router method of express to use it for my routes
const router=express.Router();
const register=mongoose.model("registration")

// These are routes to display the various customer pages
// Homepage
router.get("/",(req,res)=>{
    res.render("trylayout");
    console.log("Hello welcome my Ufarm project");
})
// login
router.get("/c_signup",(req,res)=>{
    res.render("signup");
})

router.post("/c_signup",(req,res)=>{

    console.log(req.body);
    
    const registration = new register(req.body);
    registration.save()
     .then(() => { res.send('Thank you for your registration!'); })
     .catch((err) => {
         console.log(err);
         res.send('Sorry! Something went wrong.');
     });
  
    res.render("signup"); 
})
// signup
router.get("/c_login",(req,res)=>{
    register.find()
    .then((registrations) => {
      res.render('index', { title: 'Customer Registration', registrations });
    })
    .catch(() => { res.send('Sorry! Something went wrong.'); });
    res.render("login");
})
router.post("/c_login",(req,res)=>{
    // res.render("login");
    console.log(req.body);
})
// These are routes to display s

 

module.exports=router;


