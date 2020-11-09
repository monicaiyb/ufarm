const express=require("express");
const mongoose=require("mongoose");

// Defining the registration schema for customers
const registerSchema=new mongoose.Schema({
fname:{
    type:String,
    trim:true,
},
lname:{
    type:String
},
email:{
    type:String,
    trim:true,
},
phone:{
    type:String,
    trim:true,
},
password:{
    type:String,
    trim:true,
},

});




module.exports=mongoose.model("registration",registerSchema);