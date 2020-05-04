import 'babel-polyfill';
import express from 'express';

import { registerRoutes } from './utils/registerRoutes';

// Constants
const PORT = 9090;
const HOST = '0.0.0.0';

// App
const app = express();

app.get('/', (req, res) => {
  res.send('Hello World');
});
registerRoutes(app);

app.listen(PORT, HOST);
console.log('routes: ' + app._router)
console.log(`Running on http://${HOST}:${PORT}`);
