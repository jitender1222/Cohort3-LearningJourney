const { Router } = require("express");
const {user, todo}= require("../Database/db")
const router = Router();
const userMiddleware = require("../middleware/auth");
const jwt=require("jsonwebtoken");
const mongoose=require("mongoose");
mongoose.connect(process.env.connection_string);

// User Routes
router.post('/signup', async (req, res) => {
    // Implement user signup logic
    const username=req.body.username;
    const email =req.body.email;
    const password=req.body.password;


    await user.create({
        username:username,
        email,
        password
    })
    res.status(200).json({
        message:"You Successfuly Signed Up"
    })
});

router.post('/login', async (req, res) => {
     // Implement user login logic
     const email=req.body.email;
     const password=req.body.password;

     if(!email || !password){
        res.status(401).json({
            message:"Invalid email or password"
        })
     }
     const findUser=await user.findOne({
        email,
        password
     });
     console.log("findUser",findUser);
     if(findUser){
        const token= jwt.sign({
            id: findUser._id.toString()
        },process.env.JWT_SECRET);
        res.send({
            token:token
        });
     }
     else{
        res.status(401).send("User not found")
     }
});

router.get('/todos', userMiddleware, (req, res) => {
    // Implement logic for getting todos for a user
    const userId=req.userId;
    const allTodosForUser=todo.findOne({userId});
    console.log(allTodosForUser);
    res.json({
        allTodosForUser
    })
});

router.post('/logout', userMiddleware, (req, res) => {
    // Implement logout logic
    
});

module.exports = router