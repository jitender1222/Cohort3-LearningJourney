import { Router } from "express";
import { z } from "zod";
import { userModel } from "../Db/db.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { uservalidation } from "../Middleware/authMiddleware.js";

const router = Router();

// signup
router.post("/signup", async (req, res) => {
  try {
    const userSignup = z.object({
      username: z.string().min(3).max(20),
      email: z.string().min(3).max(20).email(),
      password: z
        .string()
        .min(3)
        .max(20)
        .regex(
          /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{6,}$/
        ),
    });
    const userSignupSuccess = userSignup.safeParse(req.body);
    console.log(userSignupSuccess);
    if (!userSignupSuccess.success) {
      res.status(401).json({
        message: "Incorrect Format",
        error: userSignupSuccess.error,
      });
    }
    const { username, email, password } = req.body;
    if (!username || !email || !password) {
      res.status(401).json({
        message: "All fields required",
      });
    }
    const hashedPassword = await bcrypt.hash(password, 8);
    const user = await userModel.create({
      username,
      email,
      password: hashedPassword,
    });
    res.status(201).json({
      message: "User created successfully",
      user,
    });
  } catch (error) {
    res.json({
      message: "Somehting went wrong",
    });
  }
});

//signin

router.post("/signin", async (req, res) => {
  try {
    const userSignIn = z.object({
      email: z.string().email(),
      password: z
        .string()
        .min(3)
        .max(20)
        .regex(
          /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{6,}$/
        ),
    });
    const signInValidation = userSignIn.safeParse(req.body);
    if (!signInValidation.success) {
      res.status(401).json({
        message: "Invalid Format",
      });
    }
    const { email, password } = req.body;
    if (!email || !password) {
      res.status(401).json({
        message: "All fields required",
      });
    }
    const findUser = await userModel.findOne({ email });
    if (!findUser) {
      res.status(401).json({
        message: "User is not present",
      });
      return;
    }
    const passwordCheck = await bcrypt.compare(password, findUser.password);
    if (!passwordCheck) {
      res.status(401).json({
        message: "validation failed check user credentials",
      });
      return;
    }
    const token = jwt.sign({ id: findUser.id }, process.env.JWT_SECRET);
    res.status(200).json({
      message: "User SignIn Successfully",
      token,
    });
  } catch (error) {
    console.log(error);
  }
});

router.post("/updateUserInfo", uservalidation, async (req, res) => {
  const userId = req.userId;
  const { username, email, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 8);
  const updateUserInfo = await userModel.findByIdAndUpdate(
    userId,
    {
      username: username,
      email: email,
      password: hashedPassword,
    },
    { new: true }
  );
  res.status(200).json({
    message: "User updated successfully",
    updateUserInfo,
  });
});

export default router;
