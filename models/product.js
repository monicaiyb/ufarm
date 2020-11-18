const express=require("express");
const mongoose=require("mongoose");
//const passportLocalMongoose = require('passport-local-mongoose');

// Defining the registration schema for customers
const productSchema=new mongoose.Schema({
    pName:{
        type:String
    },
    pCategory:{
        type: String
    },
    ward:{
        type: String
    },
    pdate:{
        type:Date
    },
   
    pUnitPrice:{
        type:Number
    },
    
    pQuantity:{
        type:Number,
    },
    paymentMode:[{
        type: String,
    }],
    deliveryMode:[{
        type: String,
    }],
});



module.exports=mongoose.model("products",productSchema);