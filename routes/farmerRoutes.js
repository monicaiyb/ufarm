// This file for the Urban farmers routes.
const express= require("express");
const mongoose=require("mongoose");
const passport = require('passport');
const multer = require('multer');
path=require("path");
// import models
const Farmer=require("../models/fo");
const Product=require("../models/product");
const userModel = require("../models/user");


const router=express.Router();
// importing database models

const Foregister=mongoose.model("Fo");
const Pregister=mongoose.model("product");
const UserReg=mongoose.model("User");

// Define storage location for photos
const storage = multer.diskStorage({  
        destination: './public/uploads/',
        filename:(req, file, cb)=>{
          cb(null, file.fieldname + '-' + Date.now() + 
          path.extname(file.originalname));
        }
});
    // image upload  
const upload = multer({
    storage: storage,
  }).single('prodImage');

// Route to display farmer dashboard
router.get("/",async(req,res)=>{
    req.session.user = req.user;
    if (req.session.user) {
    try{
        const userDetails = await UserReg.find()
        res.render("farmer", {currentUser:req.session.user});
    
    }catch{
        res.status(400).send('Sorry! Something went wrong.')
        console.log(err)
    }
} 
else{
    console.log("Can't find session")
        res.redirect('/login')
}

});

// Route that Registers Productsfor farmer
router.get("/pAdd",(req,res)=>{
    req.session.user = req.user;
    if (req.session.user) {
    try{
        
            res.render("pAdd", {currentUser:req.session.user});
    
    }catch{
        res.status(400).send('Sorry! Something went wrong.')
        console.log(err)
    }
    }
    else{
        console.log("Can't find session")
        res.redirect('/login')
    }  
});

router.post("/pAdd",upload, async(req,res)=>{
    try {
        
            const items = new Pregister(req.body);
            items.prodImage=req.file.filename;
            await items.save() 
                console.log('save success')
                res.redirect('/farmer/pList')
            
        }
        catch (err) {
            res.status(400).send('Sorry! Something went wrong.')
            console.log(err)
        }
});
router.get('/pList', async(req, res)=>{
    if (req.session.user) {
        req.session.user = req.user;
    try{
        let items = await Pregister.find()
        if (req.query.product) {
            items = await Pregister.find({ product: req.query.pName });
        }
        res.render('pList', { products: items})

    }catch(err){
        res.status(400).send("Unable to find items in the database");
    }
}
else{
    console.log("Can't find session")
    res.redirect('/login') 
}
});
router.get('/pUpdate/:id',async(req,res)=>{
    if (req.session.user) {
        req.session.user = req.user;
    try {
        const pUpdate=await Pregister.findOne({ _id: req.params.id });
        res.render('pUpdate',{ product: pUpdate, currentUser: req.session.user});
    } catch (err) {
        res.status(404).send("Unable to find item in the database");
    }
}
else{
    console.log("Can't find session")
    res.redirect('/login') 
}
})

router.post('/pUpdate', async (req, res) => {
    try {
        // const items = new Foreg(req.body);
        await Pregister.findOneAndUpdate({ _id: req.query.id }, req.body)
        console.log(req.body)

        res.redirect('/farmer/pList');
    } catch (err) {
        res.status(404).send("Unable to update item in the database");
    }
});




module.exports=router;