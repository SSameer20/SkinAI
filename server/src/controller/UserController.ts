import { Request, Response } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/UserModel";
import { SendEmail } from "../mailer/Mailer";

interface RegisterRequestBody {
  name: string;
  email: string;
  password: string;
  mobile: string;
  profileImage?: string;
}

interface LoginRequestBody {
  email: string;
  password: string;
}

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
    const payload = {
      userId: user._id,
      userEmail: user.email,
    };

    // Sign token
    const secret = process.env.JWT_SECRET as string;
    const token = jwt.sign(payload, secret, { expiresIn: "1d" });

    // Email template
    const Template = `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Login | Skin AI</title>
      </head>
      <body>
        <img src="cid:uniqueImageCID" alt="Embedded Image" />
        <h1>Hello! ${user.name}</h1>
        <p>Thank you for logging into your account! We wanted you to acknowledge your recent login attempt was successful.</p>
        <div>
          <h3>Login Details:</h3>
          <p>Email Address: ${user.email}</p>
          <p>Login Time: ${new Date()}</p>
        </div>
        <p>Thank you for reading!</p>
      </body>
    </html>`;

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
    const Template = `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Register | Skin AI</title>
      </head>
      <body>
        <img src="cid:uniqueImageCID" alt="Embedded Image" />
        <h1>Welcome! ${name}</h1>
        <p>Thank you for Registering! We welcome you to our family.</p>
        <div>
          <h3>User Details:</h3>
          <p>Email Address: ${email}</p>
          <p>Registration Time: ${new Date()}</p>
          <p>IP Address: ${req.ip}</p>
        </div>
      </body>
    </html>`;

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
