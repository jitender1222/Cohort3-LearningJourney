import { Router } from "express";
import { z } from "zod";
import { accountModel, userModel } from "../Db/db.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { uservalidation } from "../Middleware/authMiddleware.js";
import mongoose from "mongoose";

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
    const userId = user._id;
    await accountModel.create({
      userId,
      balance: 1 + Math.random() * 10000,
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

//update user

router.put("/updateUserInfo", uservalidation, async (req, res) => {
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

// all Users

// router.get("/allUsers", uservalidation, async (req, res) => {
//   const userId = req.userId;
//   const name = await userModel.findById(userId);
//   // const balance = await accountModel.find({ userId: userId });
//   // console.log(balance[0].balance);
//   const users = await userModel.find({});
//   res.status(200).json({
//     message: "All users in the database",
//     users,
//     name: name.username,
//   });
// });

// search user

router.get("/allUser", uservalidation, async (req, res) => {
  try {
    // Fetch current user's data
    const currentUser = await userModel.findById(req.userId);
    if (!currentUser) {
      return res.status(404).json({ message: "Current user not found" });
    }

    // Fetch current user's account balance
    const accountBalance = await accountModel.findOne({ userId: req.userId });
    const balance = accountBalance ? accountBalance.balance : 0;

    // Get filter query for username
    const filter = req.query.showData || "";

    // Fetch all users except the current user
    const users = await userModel.find({
      _id: { $ne: req.userId }, // Exclude the current user
      username: { $regex: filter, $options: "i" }, // Filter by username (case-insensitive)
    });

    // If no users are found
    if (!users) {
      return res.status(404).json({ message: "No users found" });
    }

    // Respond with users, current user name, and balance
    res.json({
      users,
      name: currentUser.username,
      balance,
    });
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).json({ message: "Server error" });
  }
});

// get user balance

router.get("/userBalance", uservalidation, async (req, res) => {
  const balAmount = await accountModel.findOne({ userId: req.userId });
  if (!balAmount) {
    res.status(401).json({
      message: "No balance",
    });
    return;
  }
  res.status(200).json({
    balance: balAmount.balance,
  });
});

// transfer money to another acount

router.post("/transferMoney", uservalidation, async (req, res) => {
  try {
    const session = await mongoose.startSession();
    session.startTransaction();

    const moneyTransferFromAccount = req.userId;
    const { amount, moneyTransferToAccount } = req.body;
    const findAccount = await accountModel
      .findOne({
        userId: moneyTransferToAccount,
      })
      .session(session);

    if (!findAccount) {
      res.status(401).json({
        message: "Account is not present",
      });
      return;
    }
    const bal = await accountModel
      .findOne({
        userId: moneyTransferFromAccount,
      })
      .session(session);

    if (amount > bal.balance.toString()) {
      res.status(401).json({
        message: "Not sufficient balance",
      });
      return;
    }

    await accountModel
      .updateOne(
        {
          userId: req.userId,
        },
        {
          $inc: {
            balance: -amount,
          },
        }
      )
      .session(session);

    await accountModel
      .updateOne(
        {
          userId: moneyTransferToAccount,
        },
        {
          $inc: {
            balance: amount,
          },
        }
      )
      .session(session);

    await session.commitTransaction();
    session.endSession();
    res.status(200).json({
      message: "transfer successfull",
    });
  } catch (error) {
    await session.abortTransaction();
    session.endSession();
    console.log(error);
  }
});

export default router;
