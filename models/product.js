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
    farmerUserID:{
        type:String,
    },
    pFphone:{
        type:Number
    },
    pFdirections:{
        type:String
    },
    paymentMode:[{
        type: String,
    }],
    deliveryMode:[{
        type: String,
    }],
    prodImage:{ 
        type:String,
    },
    status:{
        type:Boolean,
        default:false
    }
});



module.exports=mongoose.model("product",productSchema);