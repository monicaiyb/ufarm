const express = require("express");
const mongoose = require("mongoose");
const passport = require('passport');
// import models
const foModel = require("../models/fo");
const userModel = require("../models/user");
const farmerModel=require("../models/farmer");
const router = express.Router();
// model
const Foreg = mongoose.model("Fo");
const UserReg = mongoose.model("User");
const FarmerReg=mongoose.model("farmer");
// get dashboard AO dashboard
router.get("/", async (req, res) => {
    req.session.user = req.user;
    if (req.session.user) {
        try {
            const userDetails = await UserReg.find()
            res.render("dash", { currentUser: req.session.user })
        }
        catch {
            console.log("Can't find session");
            res.redirect('/login');
        }

    }
});
// Farmer One registration form
// router.get("/",async(req,res)=>{
//     if (req.session.user) {

//         let userDetails = await UserReg.find()

//         res.render("dash",{currentUser:req.session.user});
//     }else {
//         console.log("Can't find session")
//         res.redirect('/login')
//     }
// });
// Post Farmer one registration Data
router.post("/", async (req, res) => {
    console.log(req.body);
    try {

        const items = new Foreg(req.body);
        await items.save();
        const userDetails = new UserReg(req.body);
        await UserReg.register(userDetails, req.body.password, (err) => {
            if (err) {
                throw err
            }
            console.log('save success')
            res.redirect('/ao')
        })
    }
    catch (err) {
        res.status(400).send('Sorry! Something went wrong.')
        console.log(err)
    }
});
// Route to display farmerone List.
router.get('/foList', async (req, res) => {
    req.session.user = req.user;
    if (req.session.user) {
        try {
            let items = await Foreg.find()
            let userDetails = UserReg.find();
            res.render('foList', { fos: items, users: userDetails })

        } catch (err) {
            res.status(400).send("Unable to find items in the database");
        }
    } else {
        console.log("Can't find session")
        res.redirect('/login')
    }

});

// Get an entry an entry to be updated
router.get('/foupdate/:id', async (req, res) => {
    req.session.user = req.user;
    if (req.session.user) {
    try {
        const updateFo = await Foreg.findOne({ _id: req.params.id });

        res.render('foUpdate', { fo: updateFo })
    } catch (err) {
        res.status(400).send("Unable to find item in the database");
    }
}else{
    console.log("Can't find session")
    res.redirect('/login') 
}
})
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

// Post the Update
router.post('/foupdate', async (req, res) => {
    try {
        const items = new Foreg(req.body);
        await Foreg.findOneAndUpdate({ _id: req.query._id }, req.body)
        console.log(req.body)

        res.redirect('/ao/foList');
    } catch (err) {
        res.status(404).send("Unable to update item in the database");
    }
});

module.exports = router;

// 