// This file for the Urban farmers routes.
const express= require("express");
const mongoose=require("mongoose");
const passport = require('passport');
// import models
const farmer=require("../models/farmer");
const Product=require("../models/product");


const router=express.Router();
// importing database models
const Urbanfarmer=mongoose.model("registerFarmer");
const Foregister=mongoose.model("Fo");
const Pregister=mongoose.model("products");


// Route to display farmer dashboard
router.get("/",(req,res)=>{
    res.render("farmer");
    console.log("Hello AO welcome");
});

// Route that Registers Productsfor farmer
router.get("/pAdd",(req,res)=>{
    res.render("pAdd");
    
});

router.post("/pAdd",async(req,res)=>{
    console.log(req.body);
    try {
        
            const items = new Pregister(req.body);
            await items.register(() => {
                console.log('save success')
                res.redirect('/farmer/pList')
            })
        }
        catch (err) {
            res.status(400).send('Sorry! Something went wrong.')
            console.log(err)
        }
});
router.get('/pList', async(req, res)=>{
    try{
        let items = await Pregister.find()
        if (req.query.ward) {
            items = await Pregister.find({ product: req.query.pName })
        }
        res.render('pList', { products: items})

    }catch(err){
        res.status(400).send("Unable to find items in the database");
    }
});
router.get('/pUpdate',async(req,res)=>{
    try {
        const updateFo = await FarmerOne.findOne({ _id:req.params.id })
        res.render('updatepage', { fo: updateFo })
    } catch (err) {
        res.status(400).send("Unable to find item in the database");
    }
})



// Deleting a farmer from database
router.get("/delete",(req,res)=>{
    res.render("pList");
});


module.exports=router;