require('dotenv').config();

export const appConfig = {
  port: process.env.PORT,
  environment: process.env.ENVIRONMENT
};
