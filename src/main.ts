import express, { NextFunction, Request, Response } from "express";
import * as mongoose from "mongoose";
import swaggerUi from "swagger-ui-express";

import swaggerDocument from "../docs/swagger.json";
import { config } from "./configs/configuration";
import { ApiError } from "./errors/api.error";
import logger from "./helpers/logger.helper";
import { authRouter } from "./routes/auth.router";
import { postRouter } from "./routes/post.router";
import { userRouter } from "./routes/user.router";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const start = async () => {
  app.use(`/${config.basic.urlPrefix}/auth`, authRouter);
  app.use(`/${config.basic.urlPrefix}/users`, userRouter);
  app.use(`/${config.basic.urlPrefix}/posts`, postRouter);
  app.use(
    `/${config.basic.urlPrefix}/docs`,
    swaggerUi.serve,
    swaggerUi.setup(swaggerDocument)
  );

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
