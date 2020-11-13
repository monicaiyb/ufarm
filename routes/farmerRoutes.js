// This file for the Urban farmers routes.
const express= require("express");
const mongoose=require("mongoose");
const passport = require('passport');
// import models
const farmer=require("../models/farmer");


const router=express.Router();
// importing database models
const urbanfarmer=mongoose.model("registerFarmer");
const Foregister=mongoose.model("Fo");

router.get('/', (req, res) => {
    res.render('', { title: 'Login form' })
})

// Route to display farmer dashboard
router.get("/",(req,res)=>{
    res.render("farmer");
    console.log("Hello AO welcome");
});


module.exports=router;