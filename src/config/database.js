import Joi from 'joi';

require('dotenv').config();
//
// // define validation for all the env vars
// const envVarsSchema = Joi.object({
//   NODE_ENV: Joi.string()
//     .allow(['development', 'production', 'test', 'provision'])
//     .default('development'),
//   PORT: Joi.number().default(4000),
//   JWT_SECRET: Joi.string()
//     .required()
//     .description('JWT Secret required to sign'),
//   PG_DB: Joi.string()
//     .required()
//     .description('Postgres database name'),
//   PG_PORT: Joi.number().default(5432),
//   PG_HOST: Joi.string().default('localhost'),
//   PG_USER: Joi.string()
//     .required()
//     .description('Postgres username'),
//   PG_PASSWORD: Joi.string()
//     .allow('')
//     .description('Postgres password'),
// })
//   .unknown()
//   .required();
//
// const { error, value: envVars } = Joi.validate(process.env, envVarsSchema);
// if (error) {
//   throw new Error(`Config validation error: ${error.message}`);
// }

export default {
  mysql: {
    db: process.env.DB_NAME,
    port: process.env.DB_PORT,
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: null
  },
};
