const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const UserRouter = require("./routes/UserRoutes");
require("dotenv").config();

const app = express();

// Middleware setup
const allowedOrigins = [
  "http://localhost:5173", // Local development
  "https://skin-ai-seven.vercel.app", // Production frontend
];

const corsOptions = {
  origin: (origin, callback) => {
    if (allowedOrigins.includes(origin) || !origin) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  credentials: true,
};

app.use(cors(cors(corsOptions)));
app.use(bodyParser.json());

/** User Routes */
app.use("/api/v1/user", UserRouter);

/**
 * MongoDB connection string from environment variables
 * @MongoURI connection string to connect project with MongoDB
 */

const mongoURI = process.env.MONGO_URI;
mongoose
  .connect(mongoURI)
  .then(() => console.log("MongoDB connected!"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Start the server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
