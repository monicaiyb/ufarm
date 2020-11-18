const express= require("express");
const mongoose=require("mongoose");
const passport = require('passport');



const router=express.Router();
// Route to display login form _Randomly code belongs to monica
router.get('/login', (req, res) => {
    res.render('login', { title: 'Login form' })
})

//process the username and password that are submitted in the login page
router.post('/', passport.authenticate('local'), (req,res) =>{
    req.session.user = req.user;
    res.redirect('/userlist');
})
module.exports=router;
