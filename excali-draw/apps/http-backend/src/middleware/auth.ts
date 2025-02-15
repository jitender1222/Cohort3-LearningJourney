import { JWT_SECRET } from "@repo/backend-common2/client";
import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";

export function auth(req: Request, res: Response, next: NextFunction) {
  const token = req.header("token") ?? "";
  const decoded = jwt.verify(token, JWT_SECRET);

  if (typeof decoded === "string") {
    return;
  }

  if (decoded) {
    req.userId = decoded.userId;
    next();
  } else {
    res.json({
      message: "Unauthorized",
    });
  }
}
