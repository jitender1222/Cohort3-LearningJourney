const express=require("express");
const dotenv=require("dotenv");
const app=express();
dotenv.config();

const port=process.env.PORT

const userRoute=require("./Routes/userRoutes");

app.use(express.json());
app.use("/user",userRoute);

app.listen(port,()=>{
    console.log(`server is running on port ${port} `);
})