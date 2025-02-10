import { NextFunction, Request, Response } from "express";

import logger from "../helpers/logger.helper";
import { IPostCreate, IPostUpdate } from "../interfaces/post.interface";
import { ITokenPayload } from "../interfaces/token.interface";
import { postService } from "../services/post.service";

class PostController {
  public async create(req: Request, res: Response, next: NextFunction) {
    try {
      const payload = req.res.locals.tokenPayload as ITokenPayload;
      const dto = req.body as IPostCreate;
      const result = await postService.create(dto, payload);
      res.status(201).json(result);
    } catch (e) {
      logger.error(e);
      next(e);
    }
  }

  public async getAllById(req: Request, res: Response, next: NextFunction) {
    try {
      const userId = req.params.userId as string;
      const result = await postService.getAllById(userId);
      res.json(result);
    } catch (e) {
      logger.error(e);
      next(e);
    }
  }

  public async updateById(req: Request, res: Response, next: NextFunction) {
    try {
      const dto = req.body as IPostUpdate;
      const postId = req.params.postId;
      const result = await postService.updateById(postId, dto);
      res.json(result);
    } catch (e) {
      logger.error(e);
      next(e);
    }
  }

  public async deleteById(req: Request, res: Response, next: NextFunction) {
    try {
      const postId = req.params.postId;
      await postService.deleteById(postId);
      res.sendStatus(204);
    } catch (e) {
      logger.error(e);
      next(e);
    }
  }
}

export const postController = new PostController();
