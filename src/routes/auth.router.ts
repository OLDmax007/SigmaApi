import { Router } from "express";

import { authController } from "../controllers/auth.controller";
import { baseMiddleware } from "../middlewares/base.middleware";
import { UserValidator } from "../validators/user.validator";

export const authRouter = Router();

authRouter.post(
  "/sign-up",
  baseMiddleware.validateBody(UserValidator.create),
  authController.signUp
);
authRouter.post(
  "/sign-in",
  baseMiddleware.validateBody(UserValidator.login),
  authController.signIn
);
