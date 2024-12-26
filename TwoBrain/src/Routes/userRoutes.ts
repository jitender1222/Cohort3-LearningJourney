import { Router } from "express";
import z from "zod";
import bcrypt from "bcrypt";
import { contentModel, userModel } from "../Database/db";
import jwt from "jsonwebtoken";
import authMiddleware from "../Middleware/authMiddleware";

const router = Router();

//signup
router.post("/api/v1/signup", async (req, res) => {
  try {
    const requireBody = z.object({
      email: z.string().min(3).max(20).email(),
      firstName: z.string().min(3).max(20),
      lastName: z.string().min(3).max(20),
      password: z
        .string()
        .min(4)
        .max(20)
        .regex(
          /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/
        ),
    });
    const parseData = requireBody.safeParse(req.body);
    if (!parseData.success) {
      res.status(401).json({
        message: "Incorrect Format",
        error: parseData.error,
      });
    }
    const { firstName, lastName, email, password } = req.body;
    if (!firstName || !lastName || !email || !password) {
      res.status(401).json({
        message: "All fields required",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 5);
    await userModel.create({
      firstName,
      lastName,
      email,
      password: hashedPassword,
    });
    res.status(200).json({
      message: "User SignUp SuccessFully",
    });
  } catch (error) {
    res.status(401).json({
      message: "Something went wrong",
    });
  }
});

// signin

router.post("api/v1/signin", async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      res.status(401).json({
        message: "All fields required",
      });
    }

    const findUser = await userModel.findOne({ email });
    if (!findUser) {
      res.status(401).json({
        message: "User not found with this email ",
      });
    }

    if (findUser && findUser.password) {
      const isPasswordMatched = bcrypt.compare(password, findUser.password);
      if (!isPasswordMatched) {
        res.status(401).json({
          message: "Not Authorized",
        });
        return;
      }
    }
    if (findUser) {
      const token = jwt.sign(
        {
          id: findUser._id.toString(),
        },
        process.env.JWT_SECRET_USER
      );

      res.status(200).json({
        message: "User SignUp SuccessFully",
        token,
      });
    } else {
      res.status(401).json({
        message: "Incorect Credentials",
      });
    }
  } catch (error) {
    res.status(401).json({
      message: "Somthing Went Wrong",
      error,
    });
  }
});

// content

router.post("api/v1/content", authMiddleware, async (req, res) => {
  const title = req.body.title;
  const link = req.body.link;

  contentModel.create({
    link,
    title,
    userId: req.userId,
    tags: [],
  });
});

//get all Content

router.post("/api/v1/allContent", authMiddleware, async (req, res) => {
  const userId = req.userId;
  const content = await contentModel
    .find({
      userId: userId,
    })
    .populate("userId", "userName");
  res.status(200).json({
    content,
  });
});

// delete content

router.delete("api/v1/deleteContent", authMiddleware, async (req, res) => {
  const contentId = req.body.contentId;
  await contentModel.deleteMany({
    contentId,
    userId: req.userId,
  });

  res.json({
    message: "Successfully deleted content",
  });
});
export default router;
