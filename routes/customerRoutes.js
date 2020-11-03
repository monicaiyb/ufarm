// This is the file i am using for writing all my customers.

const express= require("express");

const customer=require("../models/customers_schema.js");

// Instatiating the Router method of express to use it for my routes
const router=express.Router();

// These are routes to display the various customer pages
router.get("/c_signup",(req,res)=>{
    res.sendFile(__dirname+"customers_signup.html");
})

router.get("/c_login",(req,res)=>{
    res.sendFile(__dirname+"customers_signup.html");
})
// These are routes to display s
router.post("/customers",(req,res)=>{
    console.log("sending to db");
})

 

module.exports= router;


