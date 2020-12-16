const express= require("express");
const mongoose=require("mongoose");
const passport = require('passport');
const roles=require('../roles');
const userModel=require("../models/user")
const router=express.Router();
const UserReg=mongoose.model("User");

// Route to sign an agric officer
router.get("/signup", async (req, res) => {
  req.session.user = req.user;
  if (req.session.user) {
      try {
          const userDetails = await UserReg.find()
          res.render("signup", { currentUser: req.session.user })
      }
      catch {
          res.status(400).send('Sorry! Something went wrong.')
          console.log(err)
      }

  } else {
      console.log("Can't find session");
      res.redirect('/login');
  }
});
// router.get("/",(req,res)=>{
//   res.render("signup");
// });
router.post("/signup", async (req, res) => {
  if (req.session.user) {
    try {
      const userDetail = new UserReg(req.body);
      console.log(userDetail);
      await UserReg.register(userDetail, req.body.password, (err) => {
        // if (err) {
        //   throw err;
        // }
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