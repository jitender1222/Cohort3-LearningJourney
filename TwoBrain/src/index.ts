import express from "express";
import dotenv from "dotenv";
import userRoute from "./Routes/userRoutes";
import mongoose from "mongoose";
const app = express();
dotenv.config();

app.use(express.json());
app.use("/api/v1/user", userRoute);

const connect = async () => {
  await mongoose.connect(process.env.MONGO_URL);
  app.listen(process.env.PORT, () => {
    console.log(`app is listen at PORT ${process.env.PORT}`);
  });
};

connect();
