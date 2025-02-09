import { Router } from "express";

import { userController } from "../controllers/user.controller";
import { TokenEnum } from "../enums/token.enum";
import { authMiddleware } from "../middlewares/auth.middleware";

export const userRouter = Router();

userRouter.get(
  "/",
  authMiddleware.checkTokenByType(TokenEnum.ACCESS),
  userController.getByFilters
);
userRouter.get(
  ":id",

  authMiddleware.checkTokenByType(TokenEnum.ACCESS),
  userController.getById
);

userRouter.get(
  "email",
  authMiddleware.checkTokenByType(TokenEnum.ACCESS),
  userController.getById
);

userRouter.put(
  "/me",

  authMiddleware.checkTokenByType(TokenEnum.ACCESS),
  userController.update
);
userRouter.delete(
  "/me",
  authMiddleware.checkTokenByType(TokenEnum.ACCESS),
  userController.delete
);
