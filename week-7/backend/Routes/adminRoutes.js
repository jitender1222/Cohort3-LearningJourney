
const {Router} =require("express");
const { adminModel, courseModel } = require("../Database/db");
const { adminMiddleware } = require("../middleware/auth");
const router=Router();
const z=require("zod");
const bcrypt=require("bcrypt");
const jwt=require("jsonwebtoken");

router.post("/signup",async(req,res)=>{
    try {
        // const requireBody=z.object({
        //     email:z.string().min(3).max(20).email(),
        //     password:z.string().min(3).max(20).regex(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/),
        //     firstName:z.string().min(3).max(20),
        //     lastName:z.string.min(3).max(20)
        // })
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
            res.status(401).json({
                message:"All fields are required"
            })
        }

        const hashedPassword=await bcrypt.hash(password,5);
        await adminModel.create({
            email,
            password:hashedPassword,
            firstName,
            lastName
        })
        res.status(200).send({
            message:"Admin signup successfully",
        })
    } catch (error) {
        res.status(401).json({
            message:"Something went wrong for signup the admin"
        })
    }
})

router.post("/signin",async(req,res)=>{
    const {email,password}=req.body;

    if(!email || !password){
        res.status(401).send({
            message:"All fields required",
        })
    }
    const isUserPresent=await adminModel.findOne({email});

    if(!isUserPresent){
        res.status(401).send("Admin is not present with this email")
    }

    const passwordMatched=bcrypt.compare(password,adminModel.password);

    if(!passwordMatched){
        res.status(401).send({
            message:"Password is not correct",
        })
    }

    console.log("admin id",isUserPresent._id);

    const token=jwt.sign({
        id:isUserPresent._id.toString(),
    },process.env.JWT_SECRET_ADMIN)

    res.status(200).send({
        message:"Admin Signin Successfully",
        token
    })
})
router.post("/createCourse",adminMiddleware,async (req,res)=>{

    const creatorId=req.adminId;
    const {title,description,price}=req.body;
    if(!title || !description || !price || !creatorId){
        res.status(402).json({
            message:"All fields are required",
        })  
    }

    const course=await courseModel.create({
        title,
        description,
        price,
        creatorId:creatorId,
    })

    res.status(200).json({
        message:"Course Created Successfully",
        courseId:course._id
    })

})

router.put("/updateCourse",adminMiddleware,async (req,res)=>{

    const adminId=req.adminId;
    const {title,description,price,courseId}=req.body;

    const findAdmin=await adminModel.findById(adminId);

    if(!findAdmin){
        res.status(402).json({
            message:"Admin not found",
        })
    }
    const findCourse=await courseModel.findById(courseId);

    if(!findCourse){
        res.status(402).json({
            message:"Course not found"
        })
        return
    }

    await courseModel.updateOne({
        _id:courseId,
        creatorId:adminId
    },{
        title:title,
        description:description,
        price:price,
    })

    res.status(402).json({
        message:"Course Updated Successfully"
    })

})

router.get("/getAllCourses",adminMiddleware,async (req,res)=>{

    const adminId=req.adminId;

    const findAdmin=await adminModel.findById(adminId);
    if(!findAdmin){
        res.status(402).json({
            message:"Admin not found",
        })
    }

    const courses=await courseModel.find({
        creatorId:adminId
    },)

    res.status(200).json({
        message:"These are the courses",
        courses
    })
})

module.exports=router