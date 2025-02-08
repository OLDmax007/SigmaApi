import express from "express";
import * as mongoose from "mongoose";

import { config } from "./configs/configuration";
import { userRouter } from "./routes/user.router";

const app = express();

const start = async () => {
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
    console.error("Uncaught Exception:", error);
    process.exit(1);
  });

  app.listen(config.basic.port, async () => {
    await mongoose.connect(config.database.url);
    console.log(config.basic.frontUrl + config.basic.port);
  });
};

void start();
