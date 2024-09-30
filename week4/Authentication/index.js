const express=require("express");
const jwt=require("jsonwebtoken");
const app=express();
const JWT_SECRET="heyimjitender"

app.use(express.json());

const users=[];


const signup=app.post("/signup",(req,res)=>{
    const username=req.body.username;
    const password=req.body.password;

    users.push({
        username,
        password
    })

    res.send({
        message:"You have signed up"
    })
    console.log(users);
});

const signin=app.post("/signin",(req,res)=>{
    const username=req.body.username;
    const password=req.body.password;
    const user=users.find(user => user.username === username  && user.password === password );
    if(user){
        const token=jwt.sign({  // convert username into jsonwebtoken
            username:username  // what we want to encrypt 
        },JWT_SECRET);   
        res.send({
            token
        })
    }
    else{
        res.status(403).send({
            message:"Invalid username or password"
        })
    }
})

app.get("/me",(req,res)=>{
    const token=req.headers.token;  //jwt
    const decodedToken=jwt.verify(token,JWT_SECRET); // decode the token 
    const decodedUserName=decodedToken.username   // get the username
    const user=users.find(user => user.username == decodedUserName );
    if(user){
        res.send({
            username:user.username 
        })
    }
    else{
        res.status(400).send({
            message:"token invalid"
        })
    }
})

app.listen(3000,()=>{
    console.log("app is listen on port 3000");
})