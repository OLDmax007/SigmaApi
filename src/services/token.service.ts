import jwt from "jsonwebtoken";

import { config } from "../configs/configuration";
import { TokenEnum } from "../enums/token.enum";
import { ITokenPair, ITokenPayload } from "../interfaces/token.interface";

class TokenService {
  public generateTokens(tokenPayload: ITokenPayload): ITokenPair {
    const options = {
      algorithm: config.jwt.algorithm as jwt.Algorithm,
      issuer: config.jwt.issuer,
    };

    const accessToken = jwt.sign(tokenPayload, config.jwt.accessSecret, {
      ...options,
      expiresIn: config.jwt.accessExpiresIn,
    });

    const refreshToken = jwt.sign(tokenPayload, config.jwt.refreshSecret, {
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

    return jwt.verify(token, secret) as ITokenPayload;
  }
}

export const tokenService = new TokenService();
