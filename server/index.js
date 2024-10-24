const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const ConnectDB = require("./db.config");
const UserRouter = require("./routes/UserRoutes");
const { template } = require("./templates/server");
require("dotenv").config();

const app = express();

// Middleware setup
const allowedOrigins = [
  "http://localhost:5173",
  "https://skin-ai-seven.vercel.app",
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

app.get("/", (req, res) => {
  res.send(template);
});

// Start the server
const PORT = process.env.PORT || 8080;
const mongoURI = process.env.MONGO_URI;

app.listen(PORT, () => {
  ConnectDB(mongoURI);
  console.log(`Server running at http://localhost:${PORT}/`);
});
