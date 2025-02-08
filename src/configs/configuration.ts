import dotenv from "dotenv";

dotenv.config();

export const config = {
  basic: {
    port: process.env.PORT,
    frontUrl: process.env.FRONT_ULR,
  },
  database: {
    url: process.env.DB_URL,
  },
  jwt: {
    algorithm: process.env.JWT_ALGORITHM,
    issuer: process.env.JWT_ISSUER,
    accessSecret: process.env.JWT_ACCESS_SECRET,
    refreshSecret: process.env.JWT_REFRESH_SECRET,
    accessExpiresIn: process.env.JWT_ACCESS_EXPIRES_IN,
    refreshExpiresIn: process.env.JWT_REFRESH_EXPIRES_IN,
  },
};
