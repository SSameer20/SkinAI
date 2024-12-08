const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const ConnectDB = require("./lib/db.config");
const UserRouter = require("./routes/UserRoutes");
const SubscriberRouter = require("./routes/SubscriberRoutes");
const path = require("path");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(bodyParser.json());

/** User Routes */
app.use("/api/v1/user", UserRouter);
app.use("/api/v1/launch", SubscriberRouter);

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "templates", "serverTemplate.html"));
});

// Catch-all route for undefined routes
app.use((req, res) => {
  res.status(404).json({ message: "Route not found" });
});

// Global error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: "Something went wrong!" });
});

// Connect to the database
const mongoURI = process.env.MONGO_URI;

ConnectDB(mongoURI)
  .then(() => {
    console.log("Database connected successfully!");
  })
  .catch((error) => {
    console.error("Database connection failed:", error);
  });

// Export the app for Vercel
module.exports = app;
