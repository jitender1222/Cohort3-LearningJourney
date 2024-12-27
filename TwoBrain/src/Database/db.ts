import mongoose, { mongo } from "mongoose";

const userSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: { type: String, unique: true },
  password: String,
});

export const userModel = mongoose.model("User", userSchema);

const contentSchema = new mongoose.Schema({
  title: { type: String, required: true },
  link: String,
  tags: [{ type: mongoose.Types.ObjectId, ref: "Tag" }],
  userId: { type: mongoose.Types.ObjectId, ref: "User", required: true },
});

export const contentModel = mongoose.model("Content", contentSchema);

const LinkSchema = new mongoose.Schema({
  link: String,
  userId: { type: mongoose.Types.ObjectId, ref: "User", required: true },
});

export const LinkModel = mongoose.model("Link", LinkSchema);
