import * as mongoose from "mongoose";

import { GenderEnum } from "../enums/gender.enum";
import { RoleEnum } from "../enums/role.enum";
import { IUser } from "../interfaces/user.interface";

const Schema = mongoose.Schema;

const UserSchema = new Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    age: { type: Number, required: true },
    gender: { type: GenderEnum, required: true },
    email: { type: String, required: true, unique: true },
    phone: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    statusMarried: { type: Boolean, required: false, default: false },
    role: { type: RoleEnum, required: false, default: RoleEnum.GUEST },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export const User = mongoose.model<IUser>("users", UserSchema);
