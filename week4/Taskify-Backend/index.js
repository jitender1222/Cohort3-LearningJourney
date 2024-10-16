const express=require("express");
const dotenv=require("dotenv");

dotenv.config();

const app=express();
const port=process.env.PORT;

app.use(express.json());

const userRoute=require("./Router/user");
const todoRoute=require("./Router/todo");

app.use("/user",userRoute);
app.use("/todo",todoRoute)

app.listen(port,()=> console.log(`Server is running on PORT ${port}`))