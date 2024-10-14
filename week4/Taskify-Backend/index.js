const express=require("express");
const dotenv=require("dotenv");

dotenv.config();

const app=express();
const port=process.env.PORT;

app.use(express.json());

const userRoute=require("./Router/user");

app.use("/api",userRoute);

app.listen(port,()=> console.log(`Server is running on PORT ${port}`))