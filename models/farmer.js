// const express=require("express");
// const mongoose=require("mongoose");
// const passportLocalMongoose = require('passport-local-mongoose');
// // Defining the registration schema for customers
// const regFarmerSchema=new mongoose.Schema({
// reg_fname:{
//     type:String,
//     trim:true,
// },
// reg_lname:{
//     type:String
// },
// username:{
//     type:String,
//     unique:true
// },
// reg_dob:{
//     type:Date,
//     trim:true,
// },
// reg_phone:{
//     type:Number,
//     trim:true,
// },
// reg_id:{
//     type:String,
//     trim:true,
// },
// reg_date:{
//     type:Date,
//     trim:true,
// },
// gender:{type:String},
// ward:{type:String},
// product:[{
//     type: String
// }],
// address:{type:String},
// no_of_yr:{type:String},
// password:{
//     type:String,
//     unique:true
// },
// });

// regFarmerSchema.plugin(passportLocalMongoose);
// module.exports=mongoose.model("registerFarmer",regFarmerSchema);