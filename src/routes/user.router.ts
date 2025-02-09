import { Router } from "express";

import { userController } from "../controllers/user.controller";
import { TokenTypeEnum } from "../enums/token-type.enum";
import { authMiddleware } from "../middlewares/auth.middleware";
import { baseMiddleware } from "../middlewares/base.middleware";
import { UserValidator } from "../validators/user.validator";

export const userRouter = Router();

userRouter.get(
  "/",
  authMiddleware.checkTokenByType(TokenTypeEnum.ACCESS),
  userController.getByFilters
);

userRouter.get(
  "/email",
  authMiddleware.checkTokenByType(TokenTypeEnum.ACCESS),
  baseMiddleware.validateBody(UserValidator.checkEmail),
  userController.getByEmail
);

userRouter.get(
  "/:userId",

  authMiddleware.checkTokenByType(TokenTypeEnum.ACCESS),
  baseMiddleware.validateId("userId"),
  userController.getById
);

userRouter.put(
  "/me",

  authMiddleware.checkTokenByType(TokenTypeEnum.ACCESS),
  baseMiddleware.validateBody(UserValidator.update),
  userController.update
);
userRouter.delete(
  "/me",
  authMiddleware.checkTokenByType(TokenTypeEnum.ACCESS),
  userController.delete
);
