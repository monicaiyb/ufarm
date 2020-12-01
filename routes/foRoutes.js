//importing express and other methods by requiring them
const express = require("express");
const mongoose = require("mongoose");
const passport = require('passport');
// import models
const farmerModel = require("../models/farmer");
const userModel = require("../models/user");
const Product = require("../models/product");
const login = require('./loginRoutes');
const router = express.Router();
// model
const FarmerReg = mongoose.model("farmer");
const UserReg = mongoose.model("User");
const Pregister = mongoose.model("product");

// Farmer registration form
router.get("/", async (req, res) => {
    req.session.user = req.user;
    if (req.session.user) {
        try {
            const userDetails = await UserReg.find()
            res.render("farmerOne", { currentUser: req.session.user });
        }
        catch (err) {
            res.status(400).send('Sorry! Something went wrong.')
            console.log(err)
        }
    }
    else {
        console.log("Can't find session")
        res.redirect('/login')
    }
});

//Saving the farmer data to db
router.post("/", async (req, res) => {

    try {
        const userDetails = new UserReg(req.body);
        const items = new FarmerReg(req.body);
        await items.save();
        await UserReg.register(userDetails, req.body.password, (err) => {         
            console.log('save success')
            res.redirect('/fo/farmerList', { farmers: items, currentUser: req.session.user });
        })
    }
    catch (err) {
        res.status(404).send('Sorry! Something went wrong.')
        console.log(err)
    }
});

// Display List of registered farmers
router.get('/farmerList', async (req, res) => {
    req.session.user = req.user;
    if (req.session.user) {
        try {
            let items = await FarmerReg.find()
            if (req.query.ward) {
                items = await FarmerReg.find({ ward: req.query.ward })
            }
            res.render('farmerList', { farmers: items, currentUser: req.session.user })

        } catch (err) {
            res.status(404).send("Unable to find items in the database");
        }

    } else {
        console.log("Can't find session")
        res.redirect('/login')
    }
})

// Update an entry
router.get('/fUpdate/:id', async(req, res) => {

    if (req.session.user) {
        try {
            const updateF = await FarmerReg.findOne({_id:req.params.id });
            res.render('farmerUpdate', { farmer: updateF });
        } catch (err) {
            res.status(404).send("Unable to find item in the database");
        }
    } else {
        console.log("Can't find session")
        res.redirect('/login')
    }
});
router.post('/fUpdate', async(res, req) => {
    try {
        await FarmerReg.findOneAndUpdate({_id: req.query.id}, req.body)
        console.log(req.body);
        res.redirect('/fo/farmerList');
    } catch (err) {
        res.status(404).send("Unable to update item in the database");
    }
});
router.get('/pApprove', async (req, res) => {
    if (req.session.user) {
        try {
            let items = await Pregister.find()
            if (req.query.status) {
                items = await Pregister.find({ status: req.query.status });
            }
            res.render('pApprove', { products: items, currentUser: req.session.user })

        } catch (err) {
            res.status(404).send("Unable to find items in the database");
        }
    } else {
        console.log("Can't find session")
        res.redirect('/login')
    }
});
router.post('/pApprove', async (res, req) => {
    try {

        const items = new Pregister(req.body);
        await Pregister.findOneAndUpdate({ status: req.query.status }, req.body)
        res.redirect('/fo/pList');
    } catch (err) {
        res.status(400).send("Unable to find items in the database");
        console.log(err)
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

router.post('/decline/:id', async (req, res) => {
    if (req.session.user) {
        try {
            await Pregister.deleteOne({ _id: req.body._id })
            res.redirect('/fo/pApprove')
        } catch (err) {
            res.status(400).send("Unable to find item in the database");
        }
    } else {
        console.log("Can't find session")
        res.redirect('/login')
    }
})


module.exports = router;