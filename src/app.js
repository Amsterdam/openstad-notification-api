import 'babel-polyfill';

import {appConfig} from './config/app';
import app from './bootstrap/express';

app.listen(appConfig.port, () => {
  console.info(`server started on port ${appConfig.port}`);
});

export default app;
