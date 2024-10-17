const mongoose=require("mongoose");
const ObjectId=mongoose.Schema.ObjectId

const userSchema=mongoose.Schema({
    username: String,
    email:{
        type: String,
        unique:true
    },
    password: String
})

const todoSchema=mongoose.Schema({
    description:String,
    userId:ObjectId,
})

const userModel=mongoose.model("User",userSchema);
const todoModel=mongoose.model("Todo",todoSchema);

module.exports={userModel,todoModel}