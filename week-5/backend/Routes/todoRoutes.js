const { Router } = require("express");
const auth=require("../middleware/auth");
const { userModel, todoModel } = require("../database/db");
const router=Router();

router.post("/createTodo",auth, async (req,res)=>{
    const userId=req.userId
    const description=req.body.description;
    if(!description){
        res.json({
            message:"Field required"
        })
    }
    const findUser= await userModel.findById(userId);
    if (!findUser) {
        return res.status(404).json({ message: "User not found" });
    }
    const newTodo=await todoModel.create({
        description,
        userId
    })
    await newTodo.save();
    findUser.todos.push(newTodo._id);
    await findUser.save();
    return res.status(201).json({
        message: "Todo created successfully",
        findUser
    });
})

router.put("/updateTodo",(req,res)=>{
})

router.delete("/deleteTodo",(req,res)=>{
})

router.delete("/:id",(req,res)=>{
})

router.get("/allTodos",auth,async (req,res)=>{
    const userId=req.userId;
    const foundUser=await userModel.findById(userId);
    if(!foundUser){
        res.json({
            message:"User not found"
        })
    }
    else{
        const newTodo=await todoModel.find({userId})
        res.json({
            message:"All todos",
            newTodo
        })
    }
})

module.exports=router;