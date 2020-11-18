const express=require("express");
const mongoose=require("mongoose");
const passportLocalMongoose = require('passport-local-mongoose');

// Defining the registration schema for customers
const registerSchema=new mongoose.Schema({
fname:{
    type:String,
    trim:true,
},
lname:{
    type:String
},
username:{
    type:String,
    trim:true,
    required:true
},
roles:{
    type:String
    
},
phone:{
    type:String,
    trim:true,
},
password:{
    type:String,
    trim:true,
}
});



registerSchema.plugin(passportLocalMongoose);
module.exports=mongoose.model("Registration",registerSchema);