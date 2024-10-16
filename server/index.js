const express = require('express');
const cors = require('cors');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const sendEmail = require('./emailsend');
require('dotenv').config(); 

const app = express();
const PORT = process.env.PORT || 8080;

// Middleware setup
app.use(cors());
app.use(express.json());

// MongoDB connection string from environment variables
const mongoURI = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_CLUSTER}/${process.env.MONGO_DATABASE}?retryWrites=true&w=majority`;

// MongoDB connection
mongoose.connect(mongoURI)
    .then(() => console.log('MongoDB connected!'))
    .catch(err => console.error('MongoDB connection error:', err));

// Email template for login notification
const loginEmailTemplate = `
<div style="max-width: 600px; margin: 50px auto; background-color: #ffffff; padding: 20px; border-radius: 8px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);">
    <div style="text-align: center; background-color: #4CAF50; padding: 10px; border-radius: 8px 8px 0 0;">
        <h1 style="color: white; margin: 0;">Welcome to Skin.AI</h1>
    </div>
    <div style="padding: 20px; color: #333333;">
        <h2 style="color: #4CAF50;">Login Successful</h2>
        <p>Hello,</p>
        <p>Thank you for logging in to your Skin.AI account! We're happy to have you back.</p>
        <p>If you have any questions, feel free to reply to this email. We're here to help!</p>
    </div>
    <div style="text-align: center; padding: 10px; background-color: #f4f4f4; border-radius: 0 0 8px 8px;">
        <p style="font-size: 12px; color: #777777;">&copy; 2024 Skin.AI. All rights reserved.</p>
    </div>
</div>
`;

const User = require('./models/User');
const JWT_SECRET = process.env.JWT_SECRET || 'your_jwt_secret';

// Register Route
app.post('/auth/register', async (req, res) => {
    try {
        const { name, email, password, mobile, profileImage } = req.body;

        if (!name || !email || !password || !mobile || !profileImage) {
            return res.status(400).json({ message: 'All fields are required!' });
        }

        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'User already exists!' });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({ name, email, password: hashedPassword, mobile, profileImage });
        await newUser.save();

        // Send thank-you email on registration
        sendEmail(email, 'Thank You for Registering', '<h1>Thank you for registering at Skin.AI!</h1>');

        return res.status(201).json({ message: 'User registered successfully', user: { name, email, mobile, profileImage } });
    } catch (error) {
        console.error('Registration error:', error);
        return res.status(500).json({ message: 'Server error, please try again later.' });
    }
});

// Login Route
app.post('/auth/login', async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: 'Invalid credentials!' });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid credentials!' });
        }

        const token = jwt.sign({ email: user.email, name: user.name }, JWT_SECRET, { expiresIn: '1h' });

        // Send thank-you email on login
        sendEmail(email, 'Thank You for Logging In', <div style="max-width: 600px; margin: 50px auto; background-color: #ffffff; padding: 20px; border-radius: 8px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);">
            <div style="text-align: center; background-color: #4CAF50; padding: 10px; border-radius: 8px 8px 0 0;">
                <h1 style="color: white; margin: 0;">Welcome to Skin.AI</h1>
            </div>
            <div style="padding: 20px; color: #333333;">
                <h2 style="color: #4CAF50;">Login Successful</h2>
                <p>Hello,</p>
                <p>Thank you for logging in to your Skin.AI account! We're happy to have you back.</p>
                <p>If you have any questions, feel free to reply to this email. We're here to help!</p>
            </div>
            <div style="text-align: center; padding: 10px; background-color: #f4f4f4; border-radius: 0 0 8px 8px;">
                <p style="font-size: 12px; color: #777777;">&copy; 2024 Skin.AI. All rights reserved.</p>
            </div>
        </div>
        );

        return res.json({ message: 'Logged in successfully', token });
    } catch (error) {
        console.error('Login error:', error);
        return res.status(500).json({ message: 'Server error, please try again later.' });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
});
