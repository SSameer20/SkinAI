import mongoose, { Schema, Document, Model } from "mongoose";

/**
 * Interface representing a Subscriber document in MongoDB.
 */
export interface ISubscriber extends Document {
  email: string;
}

/**
 * Mongoose schema for the Subscriber model.
 */
const SubscriberSchema: Schema<ISubscriber> = new Schema({
  email: { type: String, unique: true, required: true },
});

/**
 * Mongoose model for the Subscriber schema.
 */
const Subscriber: Model<ISubscriber> = mongoose.model<ISubscriber>(
  "Subscriber",
  SubscriberSchema
);

export default Subscriber;
