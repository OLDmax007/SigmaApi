import { NextFunction, Request, Response } from "express";

import logger from "../helpers/logger.helper";

class AuthService {
  public async singUp(req: Request, res: Response, next: NextFunction) {
    try {
    } catch (e) {
      logger.error(e);
      next(e);
    }
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
