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

// Start the server after connecting to the database
const PORT = process.env.PORT || 8080;
const mongoURI = process.env.MONGO_URI;

ConnectDB(mongoURI)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server running at http://localhost:${PORT}/`);
    });
  })
  .catch((error) => {
    console.error("Database connection failed:", error);
    process.exit(1); // Exit the process with an error
  });
