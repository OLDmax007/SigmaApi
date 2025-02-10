import { Router } from "express";
import { postController } from "../controllers/post.controller";
import { TokenTypeEnum } from "../enums/token-type.enum";
import { authMiddleware } from "../middlewares/auth.middleware";
import { baseMiddleware } from "../middlewares/base.middleware";
import { PostValidator } from "../validators/post.validator";

export const postRouter = Router();

postRouter.post(
    "/save-post",
    authMiddleware.checkTokenByType(TokenTypeEnum.ACCESS),
    baseMiddleware.validateBody(PostValidator.create),
    postController.create
);

postRouter.get(
    "/:userId",
    authMiddleware.checkTokenByType(TokenTypeEnum.ACCESS),
    baseMiddleware.validateId("userId"),
    postController.getAllById
);

postRouter.put(
    "/:postId",
    authMiddleware.checkTokenByType(TokenTypeEnum.ACCESS),
    baseMiddleware.validateBody(PostValidator.update),
    postController.update
);


postRouter.delete(
    "/:postId",
    authMiddleware.checkTokenByType(TokenTypeEnum.ACCESS),
    baseMiddleware.validateId("postId"),
    postController.delete
);
