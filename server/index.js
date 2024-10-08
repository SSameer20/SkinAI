const express = require('express');
const cors = require('cors');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
require('dotenv').config(); // Load .env file

const app = express();
const PORT = process.env.PORT || 8080;


app.use(cors());
app.use(express.json());

const mongoURI = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_CLUSTER}/${process.env.MONGO_DATABASE}?retryWrites=true&w=majority`;

mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected!'))
  .catch(err => console.error('MongoDB connection error:', err));


const User = require('./models/User'); 
const JWT_SECRET = process.env.JWT_SECRET || 'your_jwt_secret';

// Register Route
app.post('/auth/register', async (req, res) => {
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

    return res.status(201).json({ message: 'User registered successfully', user: { name, email, mobile, profileImage } });
});

// Login Route
app.post('/auth/login', async (req, res) => {
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

    return res.json({ message: 'Logged in successfully', token });
});


app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
});
