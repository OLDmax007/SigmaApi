import * as mongoose from "mongoose";

import { IPost } from "../interfaces/post.interface";
import { User } from "./user.model";

const Schema = mongoose.Schema;
const {
  Types: { ObjectId },
} = Schema;

const PostSchema = new Schema(
  {
    userId: { type: ObjectId, required: true, ref: User },
    title: { type: String, required: true },
    author: { type: String, required: true },
    description: { type: String, required: false },
    content: { type: String, required: true },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export const Post = mongoose.model<IPost>("posts", PostSchema);
