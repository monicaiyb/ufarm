//importing express and other methods by requiring them
const express= require("express");
const mongoose=require("mongoose");
const passport = require('passport');
// import models
const foModel=require("../models/fo");
const userModel=require("../models/user")
const router=express.Router();
// model
const Foreg=mongoose.model("Fo");
const UserReg=mongoose.model("User");

// Farmer registration form
router.get("/",(req,res)=>{
    if (req.session.user) { 
        try{
            res.render("farmerOne", {currentUser:req.session.user});
        }
        catch(err){
            res.status(400).send('Sorry! Something went wrong.')
            console.log(err)
        }
    }
    else{
    console.log("Can't find session")
    res.redirect('/login')
    }
});

//Saving the farmer data to db
router.post("/",passport.authenticate('local',{failureRedirect: '/login'}),async(req,res)=>{
 
    if (req.session.user) {
    try {
        const userDetails = new UserReg(req.body);
        await UserReg.register(userDetails, req.body.password , (err) => {
            if (err)
              { 
               throw err
              }
        })
            const items = new Foreg(req.body);
            await items.save(() => {
                console.log('save success')
                res.redirect('back')
            })
        }
        catch (err) {
            res.status(400).send('Sorry! Something went wrong.')
            console.log(err)
        }
    }
});

// Display List of registered farmers
router.get('/farmerList', async(req, res)=>{
    if (req.session.user) {
        try{
            let items = await Foreg.find()
            res.render('farmerList', { fos:items},{currentUser:req.session.user})
           
        }catch(err){
            res.status(400).send("Unable to find items in the database");
        }
        
    }
    console.log("Can't find session")
    res.redirect('/login')
})

// Update an entry
router.get('/fUpdate/:id', async (req, res) => {
    try {
        const updateF = await Foreg.findOne({ _id:req.params.id });
        
        res.render('farmerUpdate', { fo: updateF })
    } catch (err) {
        res.status(400).send("Unable to find item in the database");
    }
})


module.exports=router;