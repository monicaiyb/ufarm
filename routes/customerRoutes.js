// This is the file i am using for writing all my customers.
//importing express and other methods by requiring them
const express= require("express");
const mongoose=require("mongoose");
const passport = require('passport');

//const { check, validationResult } = require('express-validator');

const customer=require("../models/registration");    

// Instatiating the Router method of express to use it for my routes
const router=express.Router();
const Register=mongoose.model("Registration")

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


router.post("/c_signup",async(req,res)=>{

    console.log(req.body);
    try {
        const cDetails = new Register(req.body);
        await Register.register(cDetails, req.body.password , (err) => {
            if (err)
              { 
               throw err
              }
            res.redirect('/c_login')
        })
    }
    catch (err) {
        res.status(400).send('Sorry! Something went wrong.')
        console.log(err)
    }

// Route to display login
router.get('/c_login', (req, res) => {
    res.render('login');
});

//process the username and password that are submitted in the login page
router.post('/c_login', passport.authenticate('local'), (req,res) =>{
    req.session.user = req.user;
    res.redirect('/products');
})

})
module.exports=router;