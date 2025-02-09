import { RoleEnum } from "../enums/role.enum";

export interface IToken {
  _id: string;
  userId: string;
  accessToken: string;
  refreshToken: string;
  createdAt: Date;
  updatedAt: Date;
}

export type ITokenPair = Pick<IToken, "accessToken" | "refreshToken">;
export type ITokenPairAndId = Pick<
  IToken,
  "userId" | "accessToken" | "refreshToken"
>;

export interface ITokenPayload {
  userId: string;
  role: RoleEnum;
}
