const express=require("express");
const mongoose=require("mongoose");
const passportLocalMongoose = require('passport-local-mongoose');

const foSchema=new mongoose.Schema({
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
    dob:{
        type:Date,
        trim:true,
    },
    phone:{
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
        default:Date.now
    },
    gender:{type:String},
    ward:{type:String},
    product:[{type:String}],
    address:{type:String},
    residence:{type:String},
    role: { 
        type: String, 
        required: 'Please Enter a role',
        enum:["admin","aOfficer","fo","ufarmer"],
        default:"ufarmer"
    },
    // password:{type:String}
    });
       
  

    foSchema.plugin(passportLocalMongoose);
    module.exports=mongoose.model("Fo",foSchema);