const mongoose=require("mongoose");
const ObjectId = mongoose.Schema.ObjectId;

const userSchema=new mongoose.Schema({
    username:String,
    email:String,
    password:String
});

const todoSchema=new mongoose.Schema({
    userId:ObjectId,
    title:String,
    description:String,
})

const user=mongoose.model("User",userSchema);
const todo=mongoose.model("Todo",todoSchema);

module.exports={user,todo}