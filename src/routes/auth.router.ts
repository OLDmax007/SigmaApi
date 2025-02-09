import { Router } from "express";

import { authController } from "../controllers/auth.controller";

export const authRouter = Router();

authRouter.post("/sign-up", authController.signUp);
authRouter.post("/sign-in", authController.signIn);
