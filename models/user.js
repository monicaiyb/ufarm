const express=require("express");
const mongoose=require("mongoose");
const passportLocalMongoose = require('passport-local-mongoose');
// Defining the registration schema for customers
const UserSchema=new mongoose.Schema({
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
role:{
    type: String, 
    required: 'Please Enter a role',
    enum:["admin","aOfficer","fo","ufarmer"],
        default:"ufarmer"
},
phone:{
    type:String,
    trim:true,
},

});



UserSchema.plugin(passportLocalMongoose);
module.exports=mongoose.model("User",UserSchema);