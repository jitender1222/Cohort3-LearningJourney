import express from "express";
import "dotenv/config";
import mongoose from "mongoose";

const app = express();

function connect() {
  mongoose.connect(process.env.MONGO_URL);
}
app.listen(process.env.PORT, () => {
  connect();
  console.log("Mongo Db is running");
  console.log("app is listen at the port", process.env.PORT);
});
