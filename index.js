//I am importing moduless into my project
const express=require("express");
const bodyParser= require('body-parser');
const path=require('path');
const mongoose=require("mongoose")


// instatiateing express function in our file
const app =express();

// mongoose.connect("mongodb://localhost:27017/node-demo",{
//   useNewUrlParser: true,
//   useUnifiedTopology: true
//   },
//   function(err) {
//     if (err) throw err;
//     console.log("Successfully connected");
//   }
// );


app.set("view engine","pug");
app.set("views", path.join(__dirname,"view"));

app.use(bodyParser.urlencoded({extended: true}))

// 
// app.use(express.static("public"));
app.use(express.static('public'));


app.use('/public', express.static(__dirname + '/public'));

//Sending my homepage to the browser
app.get("/",(req,res)=>{
    res.sendFile(__dirname +"/index.html");
    console.log("Hello welcome my Ufarm project");
})
app.get("/customers_login",(req,res)=>{
  res.sendFile(__dirname+"/customers_login.html")
})


 

// created a server have it listen at port 3000
app.listen(3000,()=>console.log("Listening at port 3000"));
