const express=require("express");
const mongoose=require("mongoose");
const passportLocalMongoose = require('passport-local-mongoose');

const farmerSchema=new mongoose.Schema({
    fname:{
        type:String,
        trim:true,
    },
    lname:{
        type:String
    },
    username:{
        type:String,
        unique:true
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
    gender:{type:String},
    ward:{type:String},
    product:[{type:String}],
    address:{type:String},
    residence:{type:String},
    role: { 
        type: String, 
        required: 'Please Enter a role',
      },
    password:{type:String}
    });
       
  

    farmerSchema.plugin(passportLocalMongoose);
    module.exports=mongoose.model("farmer",farmerSchema);