import { NextFunction, Request, Response } from "express";

import { TokenEnum } from "../enums/token.enum";
import { ApiError } from "../errors/api.error";
import logger from "../helpers/logger.helper";
import { tokenRepository } from "../repositories/token.repository";
import { tokenService } from "../services/token.service";
import {regexConstant} from "../constants/regex.constant";

class AuthMiddleware {
  public checkTokenByType(type: TokenEnum) {
    return async (req: Request, res: Response, next: NextFunction) => {
      try {
        const header = req.headers.authorization;

        if (!header) {
          throw new ApiError("No token provided", 401);
        }

        const token = header.split("Bearer ")[1];

        if (!token) {
          throw new ApiError("No token provided", 401);
        }

        if (!regexConstant.jwt.test(token)) {
          throw new ApiError("Invalid token format", 401);
        }

        const tokenPayload = tokenService.verifyToken(token, type);

        const pair = await tokenRepository.getByParams({
          userId: tokenPayload.userId,
        });

        if (!pair) {
          throw new ApiError("Invalid token", 401);
        }

        res.locals.tokenPayload = tokenPayload;
        res.locals[`${type}Token`] = token;
        next();
      } catch (e) {
        logger.error(e.message);
        next(e);
      }
    };
  }
}

export const authMiddleware = new AuthMiddleware();
