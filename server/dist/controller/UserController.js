"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRegister = exports.UserLogin = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const UserModel_1 = __importDefault(require("../models/UserModel"));
const Mailer_1 = require("../mailer/Mailer");
const UserLogin = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, password } = req.body;
        // Find user by email
        const user = yield UserModel_1.default.findOne({ email });
        if (!user) {
            res.status(400).json({ message: "Invalid credentials!" });
            return;
        }
        // Compare password
        const isMatch = yield bcrypt_1.default.compare(password, user.password);
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
        const secret = process.env.JWT_SECRET;
        const token = jsonwebtoken_1.default.sign(payload, secret, { expiresIn: "1d" });
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
        yield (0, Mailer_1.SendEmail)(email, "Login Successful", Template);
        res.status(200).json({ message: "Logged in successfully", token });
    }
    catch (error) {
        res.status(500).json({ message: "Server error, please try again later." });
    }
});
exports.UserLogin = UserLogin;
const UserRegister = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, email, password, mobile, profileImage } = req.body;
        // Validate required fields
        if (!name || !email || !password || !mobile) {
            res.status(400).json({ message: "All fields are required!" });
            return;
        }
        // Check if user already exists
        const existingUser = yield UserModel_1.default.findOne({ email });
        if (existingUser) {
            res.status(400).json({ message: "User already exists!" });
            return;
        }
        // Hash password
        const hashedPassword = yield bcrypt_1.default.hash(password, 10);
        // Create new user
        const newUser = new UserModel_1.default({
            name,
            email,
            password: hashedPassword,
            mobile,
            profileImage: profileImage || "https://default-profile-image-url.com/default.png",
        });
        yield newUser.save();
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
        yield (0, Mailer_1.SendEmail)(email, "Registration Successful", Template);
        res.status(201).json({
            message: "User registered successfully",
            user: { name, email, mobile, profileImage },
        });
    }
    catch (error) {
        console.error("Registration error:", error);
        res.status(500).json({ message: "Server error, please try again later." });
    }
});
exports.UserRegister = UserRegister;
