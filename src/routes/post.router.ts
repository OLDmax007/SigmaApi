import {Router} from "express";

import {postController} from "../controllers/post.controller";
import {TokenTypeEnum} from "../enums/token-type.enum";
import {authMiddleware} from "../middlewares/auth.middleware";
import {baseMiddleware} from "../middlewares/base.middleware";
// import {postValidator} from "../validators/post.validator";

export const postRouter = Router();

postRouter.get(
  "/",
  authMiddleware.checkTokenByType(TokenTypeEnum.ACCESS),
  postController.getByFilters
);



postRouter.get(
  "/:postId",

  authMiddleware.checkTokenByType(TokenTypeEnum.ACCESS),
  baseMiddleware.validateId("postId"),
  postController.getById
);

postRouter.put(
  "/post",

  authMiddleware.checkTokenByType(TokenTypeEnum.ACCESS),
  // baseMiddleware.validateBody(postValidator.update),
  postController.update
);
postRouter.delete(
  "/post",
  authMiddleware.checkTokenByType(TokenTypeEnum.ACCESS),
  postController.delete
);
