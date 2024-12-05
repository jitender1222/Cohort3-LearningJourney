const jwt=require("jsonwebtoken")

const adminMiddleware=(req,res,next)=>{
    const token=req.headers.token;
    const decodedToken=jwt.verify(token,process.env.JWT_SECRET_ADMIN);
    if(decodedToken){
        req.adminId=decodedToken.id;
        next();
    }
    else{
        res.status(401).json({
            message:"Invalid Token"
        })
    }
}

const userMiddleware=(req,res,next)=>{
    const token=req.headers.token;
    const decodedToken=jwt.verify(token,process.env.JWT_SECRET_USER);
    if(decodedToken){
        req.userId=decodedToken.id;
        next();
    }
    else{
        res.status(401).json({
            message:"Invalid Token"
        })
    }
}

module.exports={adminMiddleware,userMiddleware};