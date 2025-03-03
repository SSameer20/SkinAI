import mongoose, { Schema, Document, Model } from "mongoose";

/**
 * Interface representing a User document in MongoDB.
 */
export interface IUser extends Document {
  name: string;
  email: string;
  password: string;
  mobile: string;
  profileImage: string;
}

/**
 * Mongoose schema for the User model.
 */
const userSchema: Schema<IUser> = new Schema({
  name: { type: String, required: true },
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  mobile: { type: String, required: true },
  profileImage: { type: String, required: true },
});

/**
 * Mongoose model for the User schema.
 */
const User: Model<IUser> = mongoose.model<IUser>("User", userSchema);

export default User;
