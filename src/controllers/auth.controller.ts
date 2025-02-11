import { NextFunction, Request, Response } from "express";

import logger from "../helpers/logger.helper";
import { ITokenPayload } from "../interfaces/token.interface";
import { IUserCreate, IUserLogin } from "../interfaces/user.interface";
import { authService } from "../services/auth.service";

class AuthController {
  public async signUp(req: Request, res: Response, next: NextFunction) {
    try {
      const dto = req.body as IUserCreate;
      const result = await authService.signUp(dto);
      res.status(201).json(result);
    } catch (e) {
      logger.error(e.message);
      next(e);
    }
  }

  public async signIn(req: Request, res: Response, next: NextFunction) {
    try {
      const dto = req.body as IUserLogin;
      const result = await authService.signIn(dto);
      res.status(200).json(result);
    } catch (e) {
      logger.error(e);
      next(e);
    }
  }

  public async refresh(req: Request, res: Response, next: NextFunction) {
    try {
      const tokenPayload = req.res.locals.tokenPayload as ITokenPayload;
      const refreshToken = req.res.locals.refreshToken as string;
      const result = await authService.refresh(tokenPayload, refreshToken);
      res.status(201).json(result);
    } catch (e) {
      next(e);
    }
  }

  public async signOut(req: Request, res: Response, next: NextFunction) {
    try {
      const tokenPayload = req.res.locals.tokenPayload as ITokenPayload;
      await authService.signOut(tokenPayload);
      res.status(200).json({ message: "Successfully logged out" });
    } catch (e) {
      logger.error(e);
      next(e);
    }
  }

  public async signOutAll(req: Request, res: Response, next: NextFunction) {
    try {
      const tokenPayload = req.res.locals.tokenPayload as ITokenPayload;
      await authService.signOutAll(tokenPayload);
      res.status(200).json({ message: "Logged out from all devices" });
    } catch (e) {
      logger.error(e);
      next(e);
    }
  }
}

export const authController = new AuthController();
