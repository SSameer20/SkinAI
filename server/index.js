const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const UserRouter = require("./routes/UserRoutes");
require("dotenv").config();

const app = express();

// Middleware setup
app.use(cors());
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
