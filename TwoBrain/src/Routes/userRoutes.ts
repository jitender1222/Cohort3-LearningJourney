import { Router } from "express";
import z from "zod";
import bcrypt from "bcrypt";
import { LinkModel, contentModel, userModel } from "../Database/db";
import jwt from "jsonwebtoken";
import authMiddleware from "../Middleware/authMiddleware";
import { random } from "../utils/utils";

const router = Router();

//signup
router.post("/signup", async (req, res) => {
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

router.post("/signin", async (req, res) => {
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
    if (findUser) {
      const isPasswordMatched = await bcrypt.compare(
        password,
        findUser.password as string
      );
      if (!isPasswordMatched) {
        res.status(401).json({
          message: "Not Authorized",
        });
        return;
      }
    }
    if (findUser) {
      const token = await jwt.sign(
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

router.post("/content", authMiddleware, async (req, res) => {
  try {
    const { title, link } = req.body;

    if (!title || !link) {
      res.status(401).send("All fields are required");
      return;
    }

    const content = await contentModel.create({
      link,
      title,
      userId: req.userId,
      tags: [],
    });

    res.status(200).json({
      message: "Content created Successfully",
      content,
    });
  } catch (error) {
    res.send(error);
  }
});

//get all Content

router.post("/allContent", authMiddleware, async (req, res) => {
  const userId = req.userId;
  const content = await contentModel
    .find({
      userId: userId,
    })
    .populate("userId", "firstName");
  res.status(200).json({
    content,
  });
});

// delete content

router.delete("/deleteContent", authMiddleware, async (req, res) => {
  try {
    const { contentId } = req.body;
    if (!contentId) {
      res.send("contend not found with this id");
      return;
    }
    await contentModel.deleteMany({
      _id: contentId,
      userId: req.userId,
    });
    res.json({
      message: "Successfully deleted content",
    });
  } catch (error) {
    res.json({
      message: "Something went wrong",
      error,
    });
  }
});

router.post("/brain/share", authMiddleware, async (req, res) => {
  const { shareLink } = req.body;
  if (shareLink) {
    await LinkModel.create({
      userId: req.userId,
      hash: random(10),
    });
  } else {
    await LinkModel.deleteOne({
      userId: req.userId,
    });
  }

  res.json({
    message: "Shareable link generated",
  });
});
export default router;
