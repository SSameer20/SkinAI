import mongoose from "mongoose";
import { log } from "./helper";

/**
 * Connect to MongoDB using the provided URI.
 * @param mongoURI - The MongoDB connection string.
 * @returns A promise indicating the success or failure of the connection.
 */
const ConnectDB = async (mongoURI: string): Promise<void> => {
  try {
    await mongoose.connect(mongoURI);
    log.info("MongoDB connected!");
  } catch (err) {
    log.error(`MongoDB connection error: ${err}`);
    throw new Error("Failed to connect to MongoDB");
  }
};

export default ConnectDB;
