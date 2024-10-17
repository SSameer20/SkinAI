const bcrypt = require("bcrypt");
const User = require("../models/UserModel");
const { SendEmail } = require("../mailer/Mailer");
const jwt = require("jsonwebtoken");

const UserLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "Invalid credentials!" });
    }
    const isMatch = bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials!" });
    }
    const payload = {
      userId: user._id,
      userEmail: user.email,
    };

    const secret = process.env.JWT_SECRET_KEY;
    const token = jwt.sign(payload, secret, {
      expiresIn: "1d",
    });
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
   <p>Email Address:  ${user.email}</p>
    <p>Login Time: ${new Date()}</p>
    <p>Ip Address : ${req.rawHeaders[11]}</p>
    </div>
    <p>Thank you for reading!</p>
  </body>
</html>`;

    SendEmail(email, "Login Successful", Template);

    return res.json({ message: "Logged in successfully", token });
  } catch (error) {
    console.error("Login error:", error);
    return res
      .status(500)
      .json({ message: "Server error, please try again later." });
  }
};

const UserRegister = async (req, res) => {
  try {
    const { name, email, password, mobile, profileImage } = req.body;

    if (!name || !email || !password || !mobile) {
      return res.status(400).json({ message: "All fields are required!" });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists!" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({
      name,
      email,
      password: hashedPassword,
      mobile,
      profileImage:
        profileImage ||
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQoYalG0iZwdwwSFMhNL4aDADjcSJFcuo31Y9OY6saF8ZG5dq3lLc8uXw0eJfUwvdwjTw&usqp=CAU",
    });
    await newUser.save();

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
   <p>Email Address:  ${email}</p>
    <p>Login Time: ${new Date()}</p>
    <p>Ip Address : ${req.rawHeaders[11]}</p>
    </div>
  </body>
</html>`;

    SendEmail(email, "Register Successfull", Template);

    return res.status(201).json({
      message: "User registered successfully",
      user: { name, email, mobile, profileImage },
    });
  } catch (error) {
    console.error("Registration error:", error);
    return res
      .status(500)
      .json({ message: "Server error, please try again later." });
  }
};

module.exports = { UserRegister, UserLogin };
