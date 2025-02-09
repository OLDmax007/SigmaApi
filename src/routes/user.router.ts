import { Router } from "express";

import { userController } from "../controllers/user.controller";
import { TokenEnum } from "../enums/token.enum";
import { authMiddleware } from "../middlewares/auth.middleware";
import { baseMiddleware } from "../middlewares/base.middleware";
import {UserValidator} from "../validators/user.validator";

export const userRouter = Router();

userRouter.get(
  "/",
  authMiddleware.checkTokenByType(TokenEnum.ACCESS),
  userController.getByFilters
);

userRouter.get(
  "/email",
  authMiddleware.checkTokenByType(TokenEnum.ACCESS),
  baseMiddleware.validateBody(UserValidator.checkEmail),
  userController.getByEmail
);

userRouter.get(
  "/:userId",

  authMiddleware.checkTokenByType(TokenEnum.ACCESS),
  baseMiddleware.validateId("userId"),
  userController.getById
);

userRouter.put(
  "/me",

  authMiddleware.checkTokenByType(TokenEnum.ACCESS),
  baseMiddleware.validateBody(UserValidator.update),
  userController.update
);
userRouter.delete(
  "/me",
  authMiddleware.checkTokenByType(TokenEnum.ACCESS),
  userController.delete
);
