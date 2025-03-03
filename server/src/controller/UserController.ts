import { Request, Response } from "express";
import bcrypt from "bcrypt";
import jwt, { JwtPayload } from "jsonwebtoken";
import User from "../models/UserModel";
import { SendEmail, template } from "../mailer/Mailer";
import {
  JwtPayloadType,
  LoginRequestBody,
  RegisterRequestBody,
} from "../lib/types";
import { Types } from "mongoose";
import { log } from "../lib/helper";

export const UserLogin = async (req: Request, res: Response): Promise<void> => {
  try {
    const { email, password }: LoginRequestBody = req.body;

    // Find user by email
    const user = await User.findOne({ email });
    if (!user) {
      res.status(400).json({ message: "Invalid credentials!" });
      return;
    }

    // Compare password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      res.status(400).json({ message: "Invalid credentials!" });
      return;
    }

    // Create JWT payload
    const payload: JwtPayloadType = {
      id: user._id as Types.ObjectId,
      email: user.email as string,
      role: "user",
    };

    // Sign token
    const secret = process.env.JWT_SECRET as string;
    const token = jwt.sign(payload, secret, { expiresIn: "1d" });

    // Email template
    const Template = template.login(user.email, user.name);

    // Send login success email
    await SendEmail(email, "Login Successful", Template);

    res.status(200).json({ message: "Logged in successfully", token });
  } catch (error) {
    res.status(500).json({ message: "Server error, please try again later." });
  }
};
export const UserRegister = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { name, email, password, mobile, profileImage }: RegisterRequestBody =
      req.body;

    // Validate required fields
    if (!name || !email || !password || !mobile) {
      res.status(400).json({ message: "All fields are required!" });
      return;
    }

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      res.status(400).json({ message: "User already exists!" });
      return;
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new user
    const newUser = new User({
      name,
      email,
      password: hashedPassword,
      mobile,
      profileImage:
        profileImage || "https://default-profile-image-url.com/default.png",
    });
    await newUser.save();

    // Email template
    const Template = template.register(name, email);
    // Send registration success email
    await SendEmail(email, "Registration Successful", Template);

    res.status(201).json({
      message: "User registered successfully",
      user: { name, email, mobile, profileImage },
    });
  } catch (error) {
    console.error("Registration error:", error);
    res.status(500).json({ message: "Server error, please try again later." });
  }
};

export const UserDetails = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
  } catch (error) {
    log.error(`Registration error: ${error}`);
    res.status(500).json({ message: "Server error, please try again later." });
  }
};
