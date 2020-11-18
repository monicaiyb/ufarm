//importing express and other methods by requiring them
const express= require("express");
const mongoose=require("mongoose");
const passport = require('passport');
// import models
const foModel=require("../models/fo");
const router=express.Router();
// model
const Foreg=mongoose.model("Fo")


// Farmer registration form
router.get("/",(req,res)=>{
    res.render("regFarmer");
});

//Saving the farmer data to db
router.post("/",async(req,res)=>{
    console.log(req.body);
    try {
        
            const items = new Foreg(req.body);
            await items.save(() => {
                console.log('save success')
                res.redirect('/fo/dash')
            })
        }
        catch (err) {
            res.status(400).send('Sorry! Something went wrong.')
            console.log(err)
        }
});

// Display List of registered farmers
router.get('/foList', async(req, res)=>{
    try{
        let items = await Foreg.find()
        res.render('farmerList', { fos: items})

    }catch(err){
        res.status(400).send("Unable to find items in the database");
    }
})


// Deleting a farmer from database


router.post('/delete', async (req, res) => {
    try {
        await Foreg.deleteOne({_id: req.body.delete_id })
        res.redirect('back')
    } catch (err) {
        res.status(400).send("Unable to delete item in the database");
        }
});
// Update an entry
router.get('/update/:id', async (req, res) => {
    try {
        const updateFo = await Foreg.findOne({ _id:req.params.id })
        res.render('updatepage', { fo: updateFo })
    } catch (err) {
        res.status(400).send("Unable to find item in the database");
    }
})


module.exports=router;