import { Router } from "express";

import { userController } from "../controllers/user.controller";

export const userRouter = Router();

userRouter.get("/", userController.getByFilters);
userRouter.get("/:id", userController.getById);
userRouter.put("/me", userController.update);
userRouter.delete("/me", userController.delete);
