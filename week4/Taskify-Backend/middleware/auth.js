const jwt=require("jsonwebtoken");
const JWT_SECRET=process.env.JWT_SECRET

function userMiddleware(req, res, next) {
    // Implement user auth logic
    const token=req.header.token;
    const decodedToken=jwt.verify(token,JWT_SECRET);

    if(decodedToken.username){
        req.username=decodedToken.username
        next();
    }
    else{
        res.status(404).json({
            message:"Token is not valid"
        })
    }
}

module.exports = userMiddleware;