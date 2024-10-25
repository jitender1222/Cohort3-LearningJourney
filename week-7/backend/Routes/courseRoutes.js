const {Router} =require("express");
const { courseModel, adminModel } = require("../Database/db");
const { adminMiddleware } = require("../middleware/auth");

const router=Router();

router.post("/createCourses", adminMiddleware ,async (req,res)=>{

    try {
        const {title,description,price,creatorId}=req.body;

        const findCreator=await adminModel.findById(creatorId);

        if(!findCreator){
            res.status(402).json({
                message:"User not found"
            })
        }

        if(!title || !description || !price || !creatorId){
            res.status(402).json({
                message:"All fields required",
            })
        }
        await courseModel.create({
            title,
            description,
            price,
            creatorId
        })

        res.status(200).json({
            message:"Course Created Successfully"
        })
    } catch (error) {
        console.log(error);
    }
})

router.get("/allCourses",adminMiddleware,async (req,res)=>{

    const creatorId=req.body;

    const findCreator= await courseModel.findById(creatorId);
    
    if(!findCreator){
        res.status(402).json({
            message:"Creator not found",
        })
    }
})
module.exports=router;