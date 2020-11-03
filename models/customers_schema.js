const mongoose=require("mongoose");


const customerSchema=new mongoose.Schema({
firstName:{
    type:String
},
firstName:{
    type:String
},
email:{
    type:String
},
phone:{
    type:String
},
password:{
    type:String
},

});


const customer=mongoose.model("customer",customerSchema);
module.exports=customer;