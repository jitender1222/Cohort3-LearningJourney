const mongoose=require("mongoose");
const ObjectId = mongoose.Types.ObjectId;

const userSchema= new mongoose.Schema({
    firstName:String,
    lastName:String,
    email: { type: String, unique: true },
    password:String,
    courses:[{type:ObjectId,ref:"courseModel"}]
})

const courseSchema = new mongoose.Schema({
    courseId:String,
    title:String,
    description:String,
    creatorId:ObjectId,
    price:String
})

const purchaseSchema = new mongoose.Schema({
    userId: ObjectId,
    courseId: ObjectId
});

const adminSchema=new mongoose.Schema({
    firstName:String,
    lastName:String,
    email: { type: String, unique: true },
    password:String,
})

const userModel=mongoose.model("User",userSchema);
const courseModel=mongoose.model("Course",courseSchema);
const adminModel=mongoose.model("Admin",adminSchema);
const purchaseModel=mongoose.model("Purchases",purchaseSchema);

module.exports={userModel,courseModel,adminModel,purchaseModel};