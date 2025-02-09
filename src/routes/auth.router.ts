import { Router } from "express";

import { authController } from "../controllers/auth.controller";
import { TokenTypeEnum } from "../enums/token-type.enum";
import { UserFieldsTypeEnum } from "../enums/user-fields-type.enum";
import { authMiddleware } from "../middlewares/auth.middleware";
import { baseMiddleware } from "../middlewares/base.middleware";
import { UserValidator } from "../validators/user.validator";

export const authRouter = Router();

authRouter.post(
  "/sign-up",
  baseMiddleware.validateBody(UserValidator.create),
  authMiddleware.checkUserFieldByType(UserFieldsTypeEnum.EMAIL),
  authMiddleware.checkUserFieldByType(UserFieldsTypeEnum.PHONE),
  authController.signUp
);
authRouter.post(
  "/sign-in",
  baseMiddleware.validateBody(UserValidator.login),
  authController.signIn
);

authRouter.delete(
  "/sign-out",
  authMiddleware.checkTokenByType(TokenTypeEnum.ACCESS),
  authController.signOut
);

authRouter.delete(
  "/sign-out/all",
  authMiddleware.checkTokenByType(TokenTypeEnum.ACCESS),
  authController.signOutAll
);
