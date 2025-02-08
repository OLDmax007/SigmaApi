import { GenderEnum } from "../enums/gender.enum";
import { RoleEnum } from "../enums/role.enum";

export interface IUser {
  _id: string;
  firstName: string;
  lastName: string;
  age: number;
  gender: GenderEnum;
  email: string;
  phone: string;
  password: string;
  statusMarried?: boolean;
  role?: RoleEnum;
  createdAt: Date;
  updatedAt: Date;
}

export type IUserCreate = Omit<IUser, "_id" | "createdAt" | "updatedAt">;
export type IUserLogin = Pick<IUser, "email" | "password">;
