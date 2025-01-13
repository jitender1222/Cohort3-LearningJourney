import jwt from "jsonwebtoken";
export const uservalidation = (req, res, next) => {
  const token = req.headers.token;
  const decodeToken = jwt.verify(token, process.env.JWT_SECRET);
  if (!decodeToken) {
    res.status(401).json({
      message: "token validation failed",
    });
    return;
  }
  req.userId = decodeToken.id;
  next();
};
