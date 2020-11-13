//importing express and other methods by requiring them
const express= require("express");
const mongoose=require("mongoose");
const passport = require('passport');
// import models
const farmerOneModel=require("../models/farmer");


const router=express.Router();
// 
const FarmerOne=mongoose.model("registerFarmer");
// const Foregister=mongoose.model("Fo")

// Routes for registering 
router.get("/",(req,res)=>{
    res.render("farmerOne");
    console.log("Hello AO welcome");
});

//Farmer registration form
router.get("/registerFarmer",(req,res)=>{
    res.render("regFarmer");
});

//Saving the farmer data to db
router.post("/registerFarmer",async(req,res)=>{
    console.log(req.body);
    try {
        
            const items = new FarmerOne(req.body);
            await items.save(() => {
                console.log('save success')
                res.redirect('/farmerOne/foList')
            })
        }
        catch (err) {
            res.status(400).send('Sorry! Something went wrong.')
            console.log(err)
        }
});

// Retreive data from database
router.get('/foList', async(req, res)=>{
    try{
        let items = await FarmerOne.find()
        res.render('foList', { registerFarmers: items})

    }catch(err){
        res.status(400).send("Unable to find items in the database");
    }

// Deleting a farmer from database
router.get("/delete",(req,res)=>{
    res.render("farmerlist");
});

router.post('/delete', async (req, res) => {
    try {
        await FarmerOne.deleteOne({ _id: req.body.delete_id })
        res.redirect('back')
    } catch (err) {
        res.status(400).send("Unable to delete item in the database");
        }
    });
       
});

// Update an entry
router.get('/update/:id', async (req, res) => {
    try {
        const updateFo = await FarmerOne.findOne({ _id:req.params.id })
        res.render('updatepage', { fo: updateFo })
    } catch (err) {
        res.status(400).send("Unable to find item in the database");
    }
})


module.exports=router;