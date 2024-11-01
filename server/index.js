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
app.use("/api/v1/launch", SubscriberRouter);
app.use("/api/v1/user", UserRouter);

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "templates", "serverTemplate.html"));
});

// Start the server
const PORT = process.env.PORT || 8080;
const mongoURI = process.env.MONGO_URI;

app.listen(PORT, () => {
  ConnectDB(mongoURI);
  console.log(`Server running at http://localhost:${PORT}/`);
});
