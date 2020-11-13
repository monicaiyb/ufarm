const express=require("express");
const mongoose=require("mongoose");

// Defining the registration schema for customers
const productSchema=new mongoose.Schema({
    pname:{
        type:String
    },
    pcategory:{
        type:String
    },
    ward:{
        type:String
    },
    pdate:{
        type:Date
    },
    ModeOfPayment:{
        type:Number
    },
    pUnitPrice:{
        type:Number
    },
    deliveryMode:{
        type:String
    }


});




module.exports=mongoose.model("products",registerSchema);