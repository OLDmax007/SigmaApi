import { NextFunction, Request, Response } from "express";

import logger from "../helpers/logger.helper";
import {userController} from "../controllers/user.controller";
import {userRepository} from "../repositories/user.repository";

class AuthService {
  public async singUp(req: Request, res: Response, next: NextFunction) {
    userRepository.
  }

  public async singIn(req: Request, res: Response, next: NextFunction) {
    try {
    } catch (e) {
      logger.error(e);
      next(e);
    }
  }
}

export const authController = new AuthService();
