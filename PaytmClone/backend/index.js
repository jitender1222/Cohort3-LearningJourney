import express from "express";
import "dotenv/config";
import mongoose from "mongoose";
import router from "./Routes/router.js";
import cors from "cors";
const app = express();

app.use(express.json());
app.use(cors());
app.use("/api/v1/user", router);
app.use("/api/v1/account", router);

async function connect() {
  await mongoose.connect(process.env.MONGO_URL);
}
app.listen(process.env.PORT, () => {
  connect();
  console.log("Mongo Db is running");
  console.log("app is listen at the port", process.env.PORT);
});
