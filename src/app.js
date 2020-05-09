import 'babel-polyfill';
import {appConfig} from './config/app';
import app from './utils/express';
// import db from './utils/sequelize';

if (!module.parent) {
  // listen on port config.port
  app.listen(appConfig.port, () => {
    console.info(`server started on port ${appConfig.port} (${appConfig.env})`);
  });
}

export default app;
