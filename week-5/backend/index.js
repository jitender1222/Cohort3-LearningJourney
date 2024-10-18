const express=require("express");
const dotenv=require("dotenv");
const app=express();
dotenv.config();

const port=process.env.PORT

const userRoute=require("./Routes/userRoutes");
const todoRoute=require("./Routes/todoRoutes")

app.use(express.json());
app.use("/user",userRoute);
app.use("/todo",todoRoute)

app.listen(port,()=>{
    console.log(`server is running on port ${port} `);
})