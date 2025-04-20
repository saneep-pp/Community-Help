import mongoose, { Schema, Document } from "mongoose";
import { title } from "process";

interface IPost extends Document {
  title: string;
  description: string;
  type: "Need" | "Offer";
  userId: mongoose.Types.ObjectId;
  createdAt: Date;
}

const postSchema: Schema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  type: { type: String, enum: ["Need", "Offer"], required: true },
  userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
});

export default mongoose.model<IPost>("Post", postSchema);
