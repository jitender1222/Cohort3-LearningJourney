const jwt=require("jsonwebtoken")

const adminMiddleware=()=>{
    const token=req.body.token;
    const decodedToken=jwt.verify(token,process.env.JWT_SECRET_ADMIN);
    if(decodedToken){
        req.body=decodedToken.id;
        next();
    }
    else{
        res.status(402).json({
            message:"Invalid Token"
        })
    }
}

const userMiddleware=()=>{
    const token=req.body.token;
    const decodedToken=jwt.verify(token,process.env.JWT_SECRET_USER);
    if(decodedToken){
        req.body=decodedToken.id;
        next();
    }
    else{
        res.status(402).json({
            message:"Invalid Token"
        })
    }
}

module.exports={adminMiddleware,userMiddleware};