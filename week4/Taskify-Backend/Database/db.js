const mongoose=require("mongoose");
const ObjectId = Schema.ObjectId;


mongoose.connect("mongodb+srv://jeetusinghkanyal:sujeet2212@cluster0.16ien.mongodb.net/taskify-backend");

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