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
// get dashboard
router.get("/",(req,res)=>{
    res.render("dash")
});
// Farmer One registration form
router.get("/",async(req,res)=>{
    if (req.session.user) {
        
        let userDetails = await UserReg.find()

        res.render("dash",{currentUser:req.session.user});
    }else {
        console.log("Can't find session")
        res.redirect('/login')
    }
});
// Post Farmer one registration Data
router.post("/",async(req,res)=>{
    console.log(req.body);
    try {
        
        const items = new Foreg(req.body);
        await items.save();
        const userDetails = new UserReg(req.body);
        await UserReg.register(userDetails, req.body.password, (err) => {
            if (err)
              { 
               throw err
              }
        })
        
                console.log('save success')
                res.redirect('/ao')
        
        }
        catch (err) {
            res.status(400).send('Sorry! Something went wrong.')
            console.log(err)
        }
});
router.get('/foList', async(req, res)=>{
    try{
        let items = await Foreg.find()
        let userDetails=UserReg.find();
        res.render('foList', { fos: items,users:userDetails})

    }catch(err){
        res.status(400).send("Unable to find items in the database");
    }
});


// Get an entry an entry to be updated
router.get('/foupdate/:id', async (req, res) => {
    try {
        const updateFo = await Foreg.findOne({ _id:req.params.id });
        
        res.render('foUpdate', { fo: updateFo })
    } catch (err) {   
        res.status(400).send("Unable to find item in the database");
    }
})
// Post the Update
router.post('/foupdate/:id', async (req, res) => {
try {
    await Foreg.findOneAndUpdate({_id:req.query.id}, req.body)
    console.log(req.body)
    
    res.redirect('/foList');
} catch (err) {
    res.status(404).send("Unable to update item in the database");
} 
});
module.exports=router;