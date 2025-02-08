import { Router } from "express";

export const userRouter = Router();

userRouter.get("/", (req, res) => {
  console.log('dog')
  res.json({ dog: "alex" });
});
