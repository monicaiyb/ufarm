//importing express and other methods by requiring them
const express= require("express");
const mongoose=require("mongoose");
const passport = require('passport');
// import models
const farmerModel=require("../models/farmer");
const userModel=require("../models/user");
const login=require('./loginRoutes');
const router=express.Router();
// model
const FarmerReg=mongoose.model("farmer");
const UserReg=mongoose.model("User");

// Farmer registration form
router.get("/",async(req,res)=>{
    req.session.user = req.user;
    if (req.session.user) { 
        try{
            const userDetails=await UserReg.find()
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
router.post("/",async(req,res)=>{
    req.session.user = req.user;     
    try {
        const userDetails = new UserReg(req.body);
        const items = new FarmerReg(req.body);
        await items.save();
        await UserReg.register(userDetails, req.body.password , (err) => {
            // if (err)
            //   { 
            //     console.log(err);
            //     res.redirect("/login");
            //   }else{
            console.log('save success')
            res.redirect('/fo/farmerList',{ farmers:items,currentUser:req.session.user});
            //   }
        })  
        }
        catch (err) {
            res.status(400).send('Sorry! Something went wrong.')
            console.log(err)
        }
});

// Display List of registered farmers
router.get('/farmerList', async(req, res)=>{
    req.session.user = req.user;
     if (req.session.user) {
        try{
            let items = await FarmerReg.find()
            res.render('farmerList', { farmers:items,currentUser:req.session.user})
           
        }catch(err){
            res.status(400).send("Unable to find items in the database");
        }
        
    } else{
    console.log("Can't find session")
    res.redirect('/login')
    }
})

// Update an entry
router.get('/fUpdate/:id', async (req, res) => {
    try {
        const updateF = await FarmerReg.findOne({ _id:req.params.id });
        
        res.render('farmerUpdate', { FarmerReg: updateF,currentUser:req.session.user});
    } catch (err) {
        res.status(400).send("Unable to find item in the database");
    }
});
router.post('/fUpdate/:id', async(res,req)=>{
    try {
        const items = new FarmerReg(req.body);
        await FarmerReg.findOneAndUpdate({_id:req.query._id}, req.body)
        // { title: 'User list', users: items, currentUser:req.session.user})
        console.log(req.body);
        res.redirect('/fo/farmerList',{farmers:items, currentUser:req.session.user});
    } catch (err) { 
        res.status(404).send("Unable to update item in the database");
    } 
});
// router.get('/verify',async(req,res)=>{
//     try{
//         let items=await Product.find();
//         if(req.query.type){
//         item=await Product.find({
//             type:req.query.type
//         })
//         }
//     }
// })

module.exports=router;