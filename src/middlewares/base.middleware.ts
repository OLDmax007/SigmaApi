import { NextFunction, Request, Response } from "express";
import { ObjectSchema } from "joi";
import { isObjectIdOrHexString } from "mongoose";

import { ApiError } from "../errors/api.error";
import logger from "../helpers/logger.helper";

class BaseMiddleware {
  public validateId(uniqeId: string) {
    return (req: Request, res: Response, next: NextFunction) => {
      try {
        const id = req.params[uniqeId];
        if (!isObjectIdOrHexString(id)) {
          return next(new ApiError("Invalid ID format", 400));
        }
        next();
      } catch (e) {
        logger.error(e.message);
        next(new ApiError(e.details[0].message, 400));
      }
    };
  }

  public validateBody(validator: ObjectSchema) {
    return async (req: Request, res: Response, next: NextFunction) => {
      try {
        req.body = await validator.validateAsync(req.body);
        next();
      } catch (e) {
        {
          logger.error(e.message);
          next(new ApiError(e.details[0].message, 400));
        }
      }
    };
  }
}

export const baseMiddleware = new BaseMiddleware();
