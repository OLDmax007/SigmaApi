import * as mongoose from "mongoose";

import { User } from "./user.model";

const Schema = mongoose.Schema;
const {
  Types: { ObjectId },
} = Schema;

const TokenSchema = new Schema(
  {
    userId: { type: ObjectId, required: true, ref: User },
    accessToken: { type: String, required: true },
    refreshToken: { type: String, required: true },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export const Token = mongoose.model<any>("tokens", TokenSchema);
