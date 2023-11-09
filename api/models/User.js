const mongoose = require('mongoose')


const UserSchema = new mongoose.Schema({

    name:{
        type:String,
        required:true,
    },
    roll:{
        type:String,
        required:true,
    },
    admission:{
        type:String,
        required:true,   
    },
    classname:{
        type:String,
        required:true,
    },
    section:{
        type:String,
        required:true,
    },
    gender:{
        type:String,
        required:true,
    },
    mobile:{
        type:String,
        required:true,
    },
    address:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    },
})
const UserModel = mongoose.model("user",UserSchema)

module.exports= UserModel