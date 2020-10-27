//I am importing express into my project
const express=require("express");


// import the bodyparser middleware into my project
const bodyParser= require('body-parser');

// instatiateing express function in our file
const app =express();

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



 

// created a server have it listen at port 3000
app.listen(3000,()=>console.log("Listening at port 3000"));
