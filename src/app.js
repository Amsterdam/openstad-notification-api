import 'babel-polyfill';

import {config} from './config/app';
import app from './bootstrap/express';

app.listen(config.port, () => {
  console.info(`server started on port ${config.port}`);
});

export default app;
