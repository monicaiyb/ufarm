// This is the file i am using for writing all my customers.

const express= require("express");

const customer=require("../models/customers_schema.js");    

// Instatiating the Router method of express to use it for my routes
const router=express.Router();

// These are routes to display the various customer pages
// Homepage
router.get("/",(req,res)=>{
    res.render("trylayout");
    console.log("Hello welcome my Ufarm project");
})
// login
router.get("/c_signup",(req,res)=>{
    res.render("signup");
})
router.post("/c_signup",(req,res)=>{
    // res.render("signup");
    console.log(req.body);
})
// signup
router.get("/c_login",(req,res)=>{
    res.render("login");
})
router.post("/c_login",(req,res)=>{
    // res.render("login");
    console.log(req.body);
})
// These are routes to display s

 

module.exports=router;


