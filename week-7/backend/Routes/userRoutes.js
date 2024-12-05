const {Router} =require("express");
const z=require("zod")
const router=Router();
const bcrypt=require("bcrypt");
const jwt= require("jsonwebtoken");
const { userModel } = require("../Database/db");

router.post("/signup",async (req,res)=>{
    try {
        const requireBody=z.object({
            email:z.string().min(3).max(20).email(),
            password:z.string().min(3).max(20).regex(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/),
            firstName:z.string().min(3).max(20),
            lastName:z.string().min(3).max(20)
        })
        const parsedDataWithSuccess=requireBody.safeParse(req.body);
        if(!parsedDataWithSuccess.success){
            res.status(401).json({
                message:"Incorrect Format",
                error:parsedDataWithSuccess.error,
            })
        }
        const {firstName,lastName,email,password}=req.body;

        if(!firstName || !lastName || !email || !password){
            res.status(402).json({
                message:"All fields are required",
            })
        }

        const hashedPassword=await bcrypt.hash(password,5);
        await userModel.create({
            firstName,
            lastName,
            email,
            password:hashedPassword
        })
        res.status(200).json({
            message:"User SignUp Successfully"
        })
    } catch (error) {
        res.status(402).json({
            message:"Something went wrong for signing up the user"
        })
        console.log(error);
    }

})

router.post("/signin",async (req,res)=>{
    const {email,password}=req.body;

    if(!email || !password){
        res.status(402).json({
            message:"All fields are required"
        })
    }
    const findUser=await userModel.findOne({email});

    if(!findUser){
        res.status(402).json({
            message:"User not found"
        })
    }

    const passwordMatched=bcrypt.compare(password,findUser.password);

    if(!passwordMatched){
        res.status(402).json({
            message:"Not authorized"
        })
        return
    }

    const token=jwt.sign({
        id:findUser._id.toString(),
    },process.env.JWT_SECRET_USER);

    res.status(200).json({
        message:"User signUp Successfully",
        token
    })

})

module.exports=router;