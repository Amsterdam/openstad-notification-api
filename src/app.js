import 'babel-polyfill';

import {appConfig} from './config/app';
import app from './utils/express';
C
if (!module.parent) {
  // listen on port config.port
  app.listen(appConfig.port, () => {
    console.info(`server started on port ${appConfig.port}`);
  });
}

export default app;
