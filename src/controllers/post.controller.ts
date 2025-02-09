import {NextFunction, Request, Response} from "express";

import logger from "../helpers/logger.helper";
import {ITokenPayload} from "../interfaces/token.interface";
import {IPostCreate, IPostUpdate} from "../interfaces/post.interface";
import {postService} from "../services/post.service";

class PostController {
  public async getByFilters(req: Request, res: Response, next: NextFunction) {
    try {
      const query = req.query;
      const result = await postService.getByFilters(query);
      res.status(200).json(result);
    } catch (e) {
      logger.error(e);
      next(e);
    }
  }

  public async getById(req: Request, res: Response, next: NextFunction) {
    try {
      const postId = req.params.postId as string;
      const result = await postService.getById(postId);
      res.status(200).json(result);
    } catch (e) {
      logger.error(e);
      next(e);
    }
  }

  public async create(req: Request, res: Response, next: NextFunction) {
    try {
      const dto = req.body as IPostCreate;
      const payload = req.res.locals.tokenPayload as ITokenPayload;
      const result = await postService.update(payload, dto);
      res.status(200).json(result);
    } catch (e) {
      logger.error(e);
      next(e);
    }
  }

  public async update(req: Request, res: Response, next: NextFunction) {
    try {
      const dto = req.body as IPostUpdate;
      const payload = req.res.locals.tokenPayload as ITokenPayload;
      const result = await postService.update(payload, dto);
      res.status(200).json(result);
    } catch (e) {
      logger.error(e);
      next(e);
    }
  }

  public async delete(req: Request, res: Response, next: NextFunction) {
    try {
      const tokenPayload = req.res.locals.tokenPayload as ITokenPayload;
      await postService.delete(tokenPayload);
      res.status(204).json({ message: "Post was deleted" });
    } catch (e) {
      logger.error(e);
      next(e);
    }
  }
}

export const postController = new PostController();
