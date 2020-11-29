const express= require("express");
const mongoose=require("mongoose");
const passport = require('passport');
const roles=require('../roles');
const userModel=require("../models/user")
const router=express.Router();
const UserReg=mongoose.model("User");
// Route to display login form _Randomly code belongs to monica


router.get('/login', (req, res) => {
    res.render('login', {  title: 'Login form' })
})

//process the username and password that are submitted in the login page
router.post('/login', passport.authenticate('local',{failureRedirect: '/login'}), (req,res) =>{

    req.session.user = req.user;
    
    const userRole = roles[req.user.role]
    if(userRole== 'admin'){
          res.redirect('/admin');
        }
    else if(userRole == 'aOfficer'){
         res.redirect('/ao');
        }
    else if(userRole == 'fo')
        {
        res.redirect('/fo');
        }
    else{
        res.redirect('/farmer');
    }
    // res.redirect('login');
 })
   


module.exports=router;