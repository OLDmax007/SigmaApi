import { NextFunction, Request, Response } from "express";

import logger from "../helpers/logger.helper";

class UserController {
  public async getItems(req: Request, res: Response, next: NextFunction) {
    try {
    } catch (e) {
      logger.error(e);
      next(e);
    }
  }

  public async getByFilters(req: Request, res: Response, next: NextFunction) {
    try {
    } catch (e) {
      logger.error(e);
      next(e);
    }
  }

  public async getById(req: Request, res: Response, next: NextFunction) {
    try {
    } catch (e) {
      logger.error(e);
      next(e);
    }
  }

  public async getByEmail(req: Request, res: Response, next: NextFunction) {
    try {
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
