// This is the file i am using for writing all my customers.
//importing express and other methods by requiring them
const express= require("express");
const mongoose=require("mongoose");

// import models
const farmerOne=require("../models/farmer");


const router=express.Router();
// 
const FO=mongoose.model("registerFarmer");


// Routes for registering 
router.get("/",(req,res)=>{
    res.render("admin");
    console.log("Hello welcome to admin");
});
router.get("/register",(req,res)=>{
    res.render("regFarmer");
});

// Route for farmer one registration
router.post("/register",(req,res)=>{
    console.log(req.body);
    const farmerOne = new FO(req.body);
    farmerOne.save()
     .then(() => { res.send('Thank you for your registration!'); })
     .catch((err) => {
         console.log(err);
         res.send('Sorry! Something went wrong.');
     });
});



module.exports=router;