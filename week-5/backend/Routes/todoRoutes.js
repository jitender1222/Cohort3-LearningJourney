const { Router, response } = require("express");
const auth=require("../middleware/auth");
const { userModel, todoModel } = require("../database/db");
const router=Router();

//create todo
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

//update the todo 
router.put("/updateTodo",auth,async (req,res)=>{
    const todoId=req.body.todoId;
    const description=req.body.description;
    const todoFound=await todoModel.findById(todoId);
    if(todoFound){
        const updateTodo=await todoModel.findByIdAndUpdate(todoId,{description:description});
        res.json({
            message:"todo updated successfully",
            updateTodo
        })
    }
    else{
        res.json({
            message:"todo not found"
        })
    }
})

// delete all the todo 
router.delete("/deleteAllTodo",auth,async (req,res)=>{
    const userId=req.userId;
    console.log(userId);
    const foundTodo=await todoModel.deleteMany({userId:userId});
    if(foundTodo){
        res.json({
            message:"Todos deleted successfully",
        })
    }
    else{
        res.json({
            message:"Todo not found"
        })
    }
})

// delete specific todo
router.delete("/deleteTodo",async (req,res)=>{
    const todoId=req.body.todoId;
    const deleteTodo=await todoModel.findByIdAndDelete(todoId);
    if(deleteTodo){
        res.json({
            message:"todo has been deleted"
        })
    }
    else{
        res.json({
            message:"Something went wrong"
        })
    }
})

// get all the todo 
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

// get specific todo
router.get("/:id",auth,async (req,res)=>{
    const id=req.params.id
    const todo=await todoModel.findById(id);
    if(todo){
        const desc=todo.description
        res.json({
            message:"this is the required todo",
            description:todo.description
        })
    }
    else{
        res.json({
            message:"todo not found"
        })
    }
    
})

module.exports=router;