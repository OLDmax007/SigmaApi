import { Router } from "express";

import { postController } from "../controllers/post.controller";
import { TokenTypeEnum } from "../enums/token-type.enum";
import { authMiddleware } from "../middlewares/auth.middleware";
import { baseMiddleware } from "../middlewares/base.middleware";
import { PostValidator } from "../validators/post.validator";

export const postRouter = Router();

postRouter.post(
  "/post",
  authMiddleware.checkTokenByType(TokenTypeEnum.ACCESS),
  baseMiddleware.validateBody(PostValidator.create),
  postController.create
);

postRouter.get(
  "/",
  authMiddleware.checkTokenByType(TokenTypeEnum.ACCESS),
  postController.getByFilters
);

postRouter.get(
  "/:userId",

  authMiddleware.checkTokenByType(TokenTypeEnum.ACCESS),
  baseMiddleware.validateId("userId"),
  postController.getById
);

postRouter.put(
  "/post",

  authMiddleware.checkTokenByType(TokenTypeEnum.ACCESS),
  baseMiddleware.validateBody(PostValidator.update),
  postController.update
);
postRouter.delete(
  "/post",
  authMiddleware.checkTokenByType(TokenTypeEnum.ACCESS),
  postController.delete
);
