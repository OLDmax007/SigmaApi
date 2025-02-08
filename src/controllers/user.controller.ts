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
      const result = await userService.getByFilters(req.params.userId);
      res.status(200).json(result);
    } catch (e) {
      logger.error(e);
      next(e);
    }
  }

  public async getByEmail(req: Request, res: Response, next: NextFunction) {
    try {
      const result = await userService.getByEmail(req.body.email);
      res.status(200).json(result);
    } catch (e) {
      logger.error(e);
      next(e);
    }
  }

  public async update(req: Request, res: Response, next: NextFunction) {
    try {
    } catch (e) {
      logger.error(e);
      next(e);
    }
  }

  public async delete(req: Request, res: Response, next: NextFunction) {
    try {
    } catch (e) {
      logger.error(e);
      next(e);
    }
  }
}

export const userController = new UserController();
