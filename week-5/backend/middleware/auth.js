const jwt=require("jsonwebtoken");


function userMiddleware(req,res,next){
    const token = req.headers.token;
    const decodedToken=jwt.verify(token,process.env.JWT_SECRET);

    if(decodedToken){
        req.userId=decodedToken.id;
        next()
    }
    else{
        res.json({
            message:"Invalid Token"
        })
    }
}

module.exports=userMiddleware