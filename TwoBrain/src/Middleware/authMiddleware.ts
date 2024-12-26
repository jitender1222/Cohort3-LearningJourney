import jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";

const authMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const token = req.header("Authorization");
  if (!token) {
    res.status(401).json({
      message: "Access Denied",
    });
  }

  interface JwtPayload {
    id: string;
  }

  try {
    const decodedToken = jwt.verify(
      token as string,
      process.env.JWT_SECRET_USER
    ) as JwtPayload;
    req.userId = decodedToken.id;
    next();
  } catch (error) {
    res.status(403).json({
      message: "You are not logged in",
    });
  }
};

export default authMiddleware;
