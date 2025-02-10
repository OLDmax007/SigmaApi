import { GenderEnum } from "../enums/gender.enum";
import { RoleEnum } from "../enums/role.enum";
import { ITokenPair } from "./token.interface";

export interface IUser {
  _id: string;
  firstName: string;
  lastName: string;
  age: number;
  gender: GenderEnum;
  email: string;
  phone: string;
  password: string;
  statusMarried: boolean;
  role: RoleEnum;
  createdAt: Date;
  updatedAt: Date;
}

export interface IUserWithTokens {
  user: IUser;
  tokens: ITokenPair;
}

export type IUserCreate = Omit<IUser, "_id" | "createdAt" | "updatedAt">;
export type IUserLogin = Pick<IUser, "email" | "password">;
export type IUserUpdate = Partial<
  Pick<IUser, "firstName" | "lastName" | "age" | "gender" | "statusMarried">
>;

export type IUserResponse = Omit<IUser, "phone" | "email" | "password">;
