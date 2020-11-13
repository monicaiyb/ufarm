// This is the file i am using for writing all my customers.
//importing express and other methods by requiring them
const express= require("express");
const mongoose=require("mongoose");
const passport = require('passport');
// import models
const farmer=require("../models/farmer");
const farmerOne=require("../models/fo");

const router=express.Router();
// import the database model
const Foregister=mongoose.model("Fo");

// Routes for AO dashboard
router.get("/",(req,res)=>{
    res.render("aoDash");
    console.log("Hello AO welcome");
});
// Route to register FO
router.get("/aoregister",(req,res)=>{
    res.render("signupFo");
});

// Route for farmer one registration adding farmer
router.post("/aoregister",async(req,res)=>{
    console.log(req.body);
    try {
        const foDetails = new Foregister(req.body);
        await Foregister.register(foDetails, req.body.password , (err) => {
            if (err)
              { 
               throw err
              }
            res.redirect('/farmerOneList')
        })
    }
    catch (err) {
        res.status(400).send('Sorry! Something went wrong.')
        console.log(err)
    }
});

// Route that displays users
router.get('/farmerOnelist', async(req, res)=>{
    try{
        let foDetails = await Foregister.find()
        res.render('farmerOneList', {foDetails: items})

    }catch(err){
        res.status(400).send("Unable to find items in the database");
    }  
 
});


module.exports=router;