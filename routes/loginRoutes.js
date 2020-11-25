const express= require("express");
const mongoose=require("mongoose");
const passport = require('passport');
const roles=require('../roles');

const router=express.Router();
// Route to display login form _Randomly code belongs to monica
router.get('/login', (req, res) => {
    res.render('login', {  title: 'Login form' })
})

//process the username and password that are submitted in the login page
router.post('/login', passport.authenticate('local',{failureRedirect: '/login'}), (req,res) =>{

    req.session.user = req.user;
    
    const userRole = roles[req.user.role]
    if (userRole== 'admin')
        {
          res.redirect('/admin');
        }
    else if(userRole == 'aOfficer')
        {
         res.redirect('/ao');
        }
    else if(userRole =='fo')
        {
        res.redirect('/fo');
        }
    else(userRole == 'ufarmer')
        {
        res.redirect('/farmer');
    }
    // res.redirect('login');
 })
   
router.get("/admin",(res,req)=>{
    res.render("adminReg")
})
router.post("/admin", passport.authenticate('local'), async (req, res) => {
  if (req.session.user) {
    try {
      const items = new User(req.body);
      console.log(items);
      await User.register(items, req.body.password, (err) => {
        if (err) {
          throw err;
        }
        res.redirect("/login");
      });
    } 
    catch (err) {
      res.status(400).send("Sorry! Something went wrong.");
      console.log(err);
    }
  }else {
    console.log("Can't find session")
    res.redirect('/login')
  }
});


module.exports=router;