import express from "express";
import * as mongoose from "mongoose";

import { config } from "./configs/configuration";
import { userRouter } from "./routes/user.router";

const app = express();

const start = async () => {
  app.use("/api/users", userRouter);

  app.listen(config.basic.port, async () => {
    await mongoose.connect(config.database.url);
    console.log(config.basic.frontUrl + config.basic.port);
  });
};

void start();
