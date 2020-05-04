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
app._router.stack.forEach(function(r){
  if (r.route && r.route.path){
    console.log(r.route.path)
  }
})
console.log(`Running on http://${HOST}:${PORT}`);
