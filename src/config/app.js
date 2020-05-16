import notification from './notification';
import database from './database';

require('dotenv').config();

export const config = {
  ...notification,
  ...database,
  port: process.env.PORT,
  environment: process.env.ENVIRONMENT,
  queuing: false,
};
