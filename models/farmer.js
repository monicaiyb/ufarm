const express=require("express");
const mongoose=require("mongoose");

// Defining the registration schema for customers
const regFarmerSchema=new mongoose.Schema({
reg_fname:{
    type:String,
    trim:true,
},
reg_lname:{
    type:String
},
reg_dob:{
    type:Date,
    trim:true,
},
reg_phone:{
    type:Number,
    trim:true,
},
reg_id:{
    type:String,
    trim:true,
},
reg_date:{
    type:Date,
    trim:true,
},
radiogroup1:{type:String},
ward:{type:String},
checkb:{type:String},
address:{type:String},
no_of_yr:{type:String},
password: {
    type: String,
    required: 'Please Enter password'
},

});


module.exports=mongoose.model("registerFarmer",regFarmerSchema);