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


// one admin =>
   // This logic is implemented in the pre('save') middleware, so it’s handled every time a new user is created. Additionally, this approach maintains system integrity by preventing race conditions, even if multiple requests are made simultaneously.  


// Pre-save hook to hash password and check for existing admin
// userSchema.pre('save', async function (next) {
//    const person = this;

//    // If the user is being created with the 'admin' role, check if an admin already exists
//    if (person.role === 'admin') {
//        const existingAdmin = await mongoose.models.User.findOne({ role: 'admin' });
//        if (existingAdmin) {
//            const error = new Error('An admin already exists. Only one admin is allowed.');
//            return next(error);
//        }
//    }
// }

userSchema.methods.comparePassword = async function(candidatePassword){
   try{
       // Use bcrypt to compare the provided password with the hashed password
       const isMatch = await bcrypt.compare(candidatePassword, this.password);
       return isMatch;
   }catch(err){
       throw err;
   }
}


const User = mongoose.model('User',userSchema );
module.exports=User;
