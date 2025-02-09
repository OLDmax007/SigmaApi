import { NextFunction, Request, Response } from "express";

import logger from "../helpers/logger.helper";
import { authService } from "../services/auth.service";

class AuthController {
  public async signUp(req: Request, res: Response, next: NextFunction) {
    try {
      const dto = req.body;
      const result = await authService.signUp(dto);
      console.log(result);
      res.status(200).json(result);
    } catch (e) {
      logger.error(e.message);
      next(e);
    }
  }

  public async signIn(req: Request, res: Response, next: NextFunction) {
    try {
      const dto = req.body;
      const result = await authService.signIn(dto);
      res.status(200).json(result);
    } catch (e) {
      logger.error(e);
      next(e);
    }
  }
}

export const authController = new AuthController();
