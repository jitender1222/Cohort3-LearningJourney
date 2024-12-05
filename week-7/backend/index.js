require('dotenv').config()
const express=require("express");
const { mongoose } = require('mongoose');
const app=express();
const port=process.env.PORT;

const userRoute=require("./Routes/userRoutes");
const courseRoute=require("./Routes/courseRoutes");
const adminRoute=require("./Routes/adminRoutes");

app.use(express.json());
app.use("/api/v1/user",userRoute);
app.use("/api/v1/course",courseRoute);
app.use("/api/v1/admin",adminRoute);

async function connect(){
    await mongoose.connect(process.env.MONGO_URL);
    app.listen(port,()=>{
        console.log(`app is listen on port ${port}`);
    })
}

connect()

