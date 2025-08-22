import mongoose, { Document, Schema } from "mongoose";

export interface IUser extends Document {
  name: String;
  email: String;
  password: String;
}

const userSchema = new Schema<IUser>({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

export default mongoose.model<IUser>("User", userSchema);
