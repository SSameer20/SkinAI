const mongoose = require("mongoose");

/**
 * MongoDB connection string from environment variables
 * @MongoURI connection string to connect project with MongoDB
 */

const ConnectDB = async (mongoURI) => {
  mongoose
    .connect(mongoURI)
    .then(() => console.log("MongoDB connected!"))
    .catch((err) => console.error("MongoDB connection error:", err));
};

module.exports = ConnectDB;
