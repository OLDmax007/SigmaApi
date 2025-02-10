import { NextFunction, Request, Response } from "express";

import logger from "../helpers/logger.helper";
import { ITokenPayload } from "../interfaces/token.interface";
import { IUserUpdate } from "../interfaces/user.interface";
import { userPresenter } from "../presents/user.presenter";
import { userService } from "../services/user.service";

class UserController {
  public async getByFilters(req: Request, res: Response, next: NextFunction) {
    try {
      const query = req.query;
      const result = await userService.getByFilters(query);
      res.json(result);
    } catch (e) {
      logger.error(e);
      next(e);
    }
  }

  public async getById(req: Request, res: Response, next: NextFunction) {
    try {
      const userId = req.params.userId as string;
      const result = await userService.getById(userId);
      const response = userPresenter.toResponse(result);
      res.json(response);
    } catch (e) {
      logger.error(e);
      next(e);
    }
  }

  public async getByEmail(req: Request, res: Response, next: NextFunction) {
    try {
      const email = req.body.email as string;
      const result = await userService.getByEmail(email);
      const response = userPresenter.toResponse(result);
      res.json(response);
    } catch (e) {
      logger.error(e);
      next(e);
    }
  }

  public async update(req: Request, res: Response, next: NextFunction) {
    try {
      const dto = req.body as IUserUpdate;
      const payload = req.res.locals.tokenPayload as ITokenPayload;
      const result = await userService.update(payload, dto);
      const response = userPresenter.toResponse(result);
      res.json(response);
    } catch (e) {
      logger.error(e);
      next(e);
    }
  }

  public async delete(req: Request, res: Response, next: NextFunction) {
    try {
      const tokenPayload = req.res.locals.tokenPayload as ITokenPayload;
      await userService.delete(tokenPayload);
      res.sendStatus(204);
    } catch (e) {
      logger.error(e);
      next(e);
    }
  }
}

export const userController = new UserController();
