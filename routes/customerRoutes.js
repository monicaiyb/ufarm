const express= require("express");
const mongoose=require("mongoose");
const passport = require('passport');
const multer = require('multer');
path=require("path");
// import models
const farmer=require("../models/farmer");
const Product=require("../models/product");
const UserReg=mongoose.model("User");

const router=express.Router();
// importing database models

const Foregister=mongoose.model("Fo");
const Pregister=mongoose.model("product");

router.get('/product', async(req, res)=>{
    try{
        let items = await Pregister.find()
        if (req.query.product) {
            items = await Pregister.find({ product: req.query.pName });
        }
        res.render('pList', { products: items})

    }catch(err){
        res.status(400).send("Unable to find items in the database");
    }
});


module.exports=router;