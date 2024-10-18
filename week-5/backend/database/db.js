const mongoose=require("mongoose");
const ObjectId=mongoose.Schema.ObjectId

const userSchema=new mongoose.Schema({
    username: String,
    email:{
        type: String,
        unique:true
    },
    password: String
})

const todoSchema=new mongoose.Schema({
    description:String,
    userId:ObjectId,
},{timestamps:true})

const userModel=mongoose.model("User",userSchema);
const todoModel=mongoose.model("Todo",todoSchema);

module.exports={userModel,todoModel}