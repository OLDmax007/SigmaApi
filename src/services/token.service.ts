import jwt from "jsonwebtoken";

import { config } from "../configs/configuration";

class TokenService {
  public generateTokens(payload: any) {
    const options = {
      algorithm: config.jwt.algorithm as jwt.Algorithm,
      issuer: config.jwt.issuer,
    };

    const actionToken = jwt.sign(payload, config.jwt.accessSecret, {
      ...options,
      expiresIn: config.jwt.accessExpiresIn,
    });

    const refreshToken = jwt.sign(payload, config.jwt.refreshSecret, {
      ...options,
      expiresIn: config.jwt.refreshExpiresIn,
    });

    return { actionToken, refreshToken };
  }

  public verifyToken(payload: any, type: string) {
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

    return jwt.verify(payload, secret);
  }
}

export const tokenService = new TokenService();
