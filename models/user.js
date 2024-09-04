const mongoose = require('mongoose')

//const bcrypt = require ('bcrypt');
//Data Modeling

const userSchema= new mongoose.Schema(
{
 name : {
    type : String,
    required: true
 },
 age:{
    type :Number
 },
 mobile: {
   type: String
},
 email :{
    type:String,
    required:true,
    unique:true,
    lowercase: true
 },
 addharID:{
   type: Number,
    required:true,
    unique:true
 },
 role:{
   type : String,
   enum : ["voter", 'admin'],
  default: "voter"
 },
 
isVoted : {
type : Boolean,
default:false
},

 password:{
 required: true,
 type: String
},

 date: {
    type: Date,
     default: Date.now() },
});

const User = mongoose.model('User',userSchema );
module.exports=User;
