import jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";
import { Types } from "mongoose";
import { JwtPayloadType } from "../lib/types";

declare global {
  namespace Express {
    interface Request {
      user: {
        id: Types.ObjectId;
        email: string;
      };
    }
  }
}
// Define the middleware function
const UserMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const token = req.headers.authorization?.split(" ")[1]; // Extract token from Authorization header

  if (!token) {
    res.status(401).json({ message: "Access Denied: No Token Provided" });
    return;
  }

  try {
    const secretKey = process.env.JWT_SECRET || "yourSecretKey"; // Use a secure secret key
    const decoded: JwtPayloadType = jwt.verify(
      token,
      secretKey
    ) as JwtPayloadType;

    if (decoded.role !== "user") {
      res
        .status(401)
        .json({ message: "Access Denied: You have no permissions" });
      return;
    }
    req.user = decoded;
    next();
  } catch (error: any) {
    if (error.name === "TokenExpiredError") {
      res.status(401).json({ message: "Token expired" });
      return;
    }
    res.status(403).json({ message: "Invalid token" });
    return;
  }
};

export { UserMiddleware };
