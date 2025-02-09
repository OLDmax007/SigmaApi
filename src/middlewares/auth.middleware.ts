import { NextFunction, Request, Response } from "express";
import { upperCaseFirst } from "text-case";

import { regexConstant } from "../constants/regex.constant";
import { TokenTypeEnum } from "../enums/token-type.enum";
import { UserFieldsTypeEnum } from "../enums/user-fields-type.enum";
import { ApiError } from "../errors/api.error";
import logger from "../helpers/logger.helper";
import { IUser } from "../interfaces/user.interface";
import { User } from "../models/user.model";
import { tokenRepository } from "../repositories/token.repository";
import { tokenService } from "../services/token.service";

class AuthMiddleware {
  public checkTokenByType(type: TokenTypeEnum) {
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

  public checkUserFieldByType(type: UserFieldsTypeEnum) {
    return async (req: Request, res: Response, next: NextFunction) => {
      try {
        let field: string;
        let fieldName: UserFieldsTypeEnum;

        switch (type) {
          case "email":
            field = req.body.email;
            fieldName = UserFieldsTypeEnum.EMAIL;
            break;
          case "phone":
            field = req.body.phone;
            fieldName = UserFieldsTypeEnum.PHONE;
            break;
          default:
            throw new ApiError("Field is unsupported", 400);
        }

        if (!field) {
          throw new ApiError(`${upperCaseFirst(fieldName)} is required`, 400);
        }

        const user: IUser = await User.findOne({ [fieldName]: field });
        if (user) {
          throw new ApiError(
            `${upperCaseFirst(fieldName)} is already in use`,
            400
          );
        }
        next();
      } catch (e) {
        logger.error(e.message);
        next(e);
      }
    };
  }
}

export const authMiddleware = new AuthMiddleware();
