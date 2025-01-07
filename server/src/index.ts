import express, { Application, Request, Response, NextFunction } from "express";
import cors from "cors";
import bodyParser from "body-parser";
import path from "path";
import dotenv from "dotenv";
import ConnectDB from "./lib/db.config";
import UserRouter from "./routes/UserRoutes";
import SubscriberRouter from "./routes/SubscriberRoutes";
import { log } from "./lib/helper";

dotenv.config();

const app: Application = express();

app.use(cors());
app.use(bodyParser.json());

app.use("/api/v1/user", UserRouter);
app.use("/api/v1/launch", SubscriberRouter);

app.get("/", (req: Request, res: Response): void => {
  res.sendFile(path.join(__dirname, "templates", "serverTemplate.html"));
});

app.use((req: Request, res: Response): void => {
  res.status(404).json({ message: "Route not found" });
});

app.use((err: Error, req: Request, res: Response, next: NextFunction): void => {
  log.error(`${err.stack}`);
  res.status(500).json({ error: "Something went wrong!" });
});

const mongoURI = process.env.MONGO_URI;

if (!mongoURI) {
  throw new Error("MONGO_URI environment variable is not defined");
}

if (!mongoURI) {
  log.error("MONGO_URI is not defined in environment variables");
  process.exit(1);
}

ConnectDB(mongoURI)
  .then((): void => {
    const PORT = process.env.PORT || 8080;
    app.listen(PORT, () => {
      log.info(`Server is Running on http://localhost:${PORT}`);
    });
  })
  .catch((error: Error): void => {
    log.error(`Database connection failed: ${error}`);
  });

export default app;
