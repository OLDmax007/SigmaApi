import jwt from "jsonwebtoken";

import { config } from "../configs/configuration";
import { TokenEnum } from "../enums/token.enum";
import { ITokenPair, ITokenPayload } from "../interfaces/token.interface";

class TokenService {
  public generateTokens(payload: ITokenPayload): ITokenPair {
    const options = {
      algorithm: config.jwt.algorithm as jwt.Algorithm,
      issuer: config.jwt.issuer,
    };

    const accessToken = jwt.sign(payload, config.jwt.accessSecret, {
      ...options,
      expiresIn: config.jwt.accessExpiresIn,
    });

    const refreshToken = jwt.sign(payload, config.jwt.refreshSecret, {
      ...options,
      expiresIn: config.jwt.refreshExpiresIn,
    });

    return { accessToken, refreshToken };
  }

  public verifyToken(token: string, type: TokenEnum): ITokenPayload {
    let secret: string;

    switch (type) {
      case "access":
        secret = config.jwt.accessSecret;
        break;
      case "refresh":
        secret = config.jwt.refreshSecret;
        break;
      default:
        throw new Error("Invalid token type");
    }

    const decode = jwt.verify(token, secret) as ITokenPayload;
    return decode;
  }
}

export const tokenService = new TokenService();
