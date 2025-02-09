import express, { NextFunction, Request, Response } from "express";
import * as mongoose from "mongoose";

import { config } from "./configs/configuration";
import { ApiError } from "./errors/api.error";
import logger from "./helpers/logger.helper";
import { authRouter } from "./routes/auth.router";
import { userRouter } from "./routes/user.router";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const start = async () => {
  app.use("/api/auth", authRouter);
  app.use("/api/users", userRouter);

  app.use(
    "*",
    (error: ApiError, req: Request, res: Response, next: NextFunction) => {
      const status = error.status || 500;
      const message = error.message || "Something bad";
      res.status(status).json({ status, message });
    }
  );

  process.on("uncaughtException", (error) => {
    logger.error("Uncaught Exception: ", error);
    process.exit(1);
  });

  app.listen(config.basic.port, async () => {
    await mongoose.connect(config.database.url);
    console.log(config.basic.frontUrl + config.basic.port);
  });
};

void start();
