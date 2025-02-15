import express from "express";
import jwt from "jsonwebtoken";
import { JWT_SECRET } from "@repo/backend-common2/client";
import { prismaClient } from "@repo/db/client";
import { CreateRoomSchema, SignInSchema, UserSchema } from "@repo/common/types";
import { auth } from "./middleware/auth";

const app = express();
app.use(express.json());

app.post("/signup", async (req, res) => {
  const paresdData = UserSchema.safeParse(req.body);
  console.log(req.body);
  console.log(paresdData.error);
  if (!paresdData.success) {
    res.status(401).json({
      message: "Incorrect Inputs",
    });
  }
  try {
    const user = await prismaClient.user.create({
      data: {
        email: paresdData.data?.email || "",
        password: paresdData.data?.password || "",
        name: paresdData.data?.username || "",
      },
    });
    res.json({
      message: "User Created Successfully",
      userId: user.id,
    });
  } catch (error) {
    res.json({
      message: "Email Exist with this user name",
    });
  }
});

app.post("/signin", async (req, res) => {
  const paresdData = SignInSchema.safeParse(req.body);
  if (!paresdData.success) {
    res.status(401).json({
      message: "Incorrect Inputs",
    });
    return;
  }
  try {
    const userExist = await prismaClient.user.findFirst({
      where: {
        email: paresdData.data?.email,
        password: paresdData.data?.password,
      },
    });
    if (!userExist) {
      res.status(401).json({
        message: "User Not exist",
      });
      return;
    }
    const token = jwt.sign(
      {
        userId: userExist?.id,
      },
      JWT_SECRET
    );
    res.status(200).json({
      message: "User signed successfully",
      token,
    });
  } catch (error) {
    res.status(401).json({
      message: "Something went wrong",
    });
  }
});

app.post("/create-room", auth, async (req, res) => {
  const paresdData = CreateRoomSchema.safeParse(req.body);

  if (!paresdData.success) {
    res.status(401).json({
      message: "Incorrect Input",
    });
    return;
  }
  const userId = req.userId;
  const userIdToString = userId.toString();
  console.log(typeof userIdToString);

  try {
    console.log("inside try");

    const room = await prismaClient.room.create({
      data: {
        slug: paresdData.data.name,
        adminId: userIdToString,
      },
    });
    res.status(200).json({
      message: "Room created successfully",
      room: room.id,
    });
    console.log("rrom", room);
  } catch (error) {
    console.log(error);
    res.status(401).json({
      message: "room already exist or something went wrong",
    });
  }
});

app.listen(3001);
