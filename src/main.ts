import dotenv from "dotenv";
import express from "express";
import * as mongoose from "mongoose";

import { config } from "./configs/configuration";

dotenv.config();

const app = express();

app.use("/api/", (req, res, next) => {});

app.listen(config.port, () => {
  mongoose.connect(config.database.url);
  console.log("http://localhost:" + config.port);
});
