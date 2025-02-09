import { NextFunction, Request, Response } from "express";

import logger from "../helpers/logger.helper";
import { userService } from "../services/user.service";

class UserController {
  public async getByFilters(req: Request, res: Response, next: NextFunction) {
    try {
      const query = req.query;
      const result = await userService.getByFilters(query);
      res.status(200).json(result);
    } catch (e) {
      logger.error(e);
      next(e);
    }
  }

  public async getById(req: Request, res: Response, next: NextFunction) {
    try {
      const userId = req.params.userId;
      const result = await userService.getByFilters(userId);
      res.status(200).json(result);
    } catch (e) {
      logger.error(e);
      next(e);
    }
  }

  public async getByEmail(req: Request, res: Response, next: NextFunction) {
    try {
      const email = req.body.email;
      const result = await userService.getByEmail(email);
      res.status(200).json(result);
    } catch (e) {
      logger.error(e);
      next(e);
    }
  }

  public async update(req: Request, res: Response, next: NextFunction) {
    try {
      const dto = req.body;
      const payload = req.res.locals.tokenPayload;
      const result = await userService.update(payload, dto);
      res.status(200).json(result);
    } catch (e) {
      logger.error(e);
      next(e);
    }
  }

  public async delete(req: Request, res: Response, next: NextFunction) {
    try {
      const tokenPayload = req.res.locals.tokenPayload;
      const result = await userService.delete(tokenPayload);
      res.status(204).json(result);
    } catch (e) {
      logger.error(e);
      next(e);
    }
  }
}

export const userController = new UserController();
