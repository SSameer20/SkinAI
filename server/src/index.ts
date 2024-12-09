import express, { Application, Request, Response, NextFunction } from "express";
import cors from "cors";
import bodyParser from "body-parser";
import path from "path";
import dotenv from "dotenv";
import ConnectDB from "./lib/db.config"; // Ensure `db.config.ts` exports `ConnectDB`
import UserRouter from "./routes/UserRoutes"; // Ensure `UserRoutes` exports `Router`
import SubscriberRouter from "./routes/SubscriberRoutes"; // Ensure `SubscriberRoutes` exports `Router`

// Load environment variables
dotenv.config();

const app: Application = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

/** User Routes */
app.use("/api/v1/user", UserRouter);
app.use("/api/v1/launch", SubscriberRouter);

// Serve an HTML file for the root route
app.get("/", (req: Request, res: Response): void => {
  res.sendFile(path.join(__dirname, "templates", "serverTemplate.html"));
});

// Catch-all route for undefined routes
app.use((req: Request, res: Response): void => {
  res.status(404).json({ message: "Route not found" });
});

// Global error handler
app.use((err: Error, req: Request, res: Response, next: NextFunction): void => {
  console.error(err.stack);
  res.status(500).json({ error: "Something went wrong!" });
});

// Connect to the database
const mongoURI: string | undefined = process.env.MONGO_URI;

if (!mongoURI) {
  console.error("MONGO_URI is not defined in environment variables");
  process.exit(1); // Exit if no connection string is provided
}

ConnectDB(mongoURI)
  .then((): void => {
    console.log("Database connected successfully!");
  })
  .catch((error: Error): void => {
    console.error("Database connection failed:", error);
  });

// Export the app for Vercel or other platforms
export default app;
