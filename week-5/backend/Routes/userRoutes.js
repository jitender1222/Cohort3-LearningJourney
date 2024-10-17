const { Router } = require("express");
const mongoose = require("mongoose");
const jwt=require("jsonwebtoken")
const bcrypt=require("bcrypt");
const {userModel} = require("../database/db");
const router=Router();
mongoose.connect(process.env.connection_string);

router.post("/signup",async (req,res)=>{
    const username=req.body.username;
    const email=req.body.email;
    const password=req.body.password;

    if(!username || !email || !password){
        res.json({
            message:"All fields required"
        })
    }

    const hashedPassword=await bcrypt.hash(password,5);
    console.log(hashedPassword);

    await userModel.create({
        username,
        email,
        password:hashedPassword
    });

    res.json({
        message:"User Signed up successfully"
    })

})

router.post("/login",async (req,res)=>{
    const email=req.body.email;
    const password=req.body.password;
    
    if(!email || !password){
        res.json({
            message:"All fields are required",
        })
    }
    const findUser= await userModel.findOne({email});

    if(!findUser){
        res.status({
            message:"User not found"
        })
        return
    }
    const passwordMatched=await bcrypt.compare(password,findUser.password);

    if(passwordMatched){
        const token= jwt.sign({
            id: findUser._id.toString(),
        },process.env.JWT_SECRET);

        res.json({
            token
        })
    }
    else{
        res.json({
            message:"Incorrect credentials"
        })
    }
})

module.exports=router