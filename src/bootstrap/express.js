import express from 'express';
import logger from 'morgan';
import bodyParser from 'body-parser';
import cors from 'cors';
import httpStatus from 'http-status';
// import expressWinston from 'express-winston';
import expressValidation from 'express-validation';
import helmet from 'helmet';
import routes from '../routes/index.route';
import { config } from '../config/app';
import fourOFourHandler from './errorHandling/fourOFourHandler'
import APIErrorHandler from './errorHandling/APIErrorHandler';
import stackTraceHandler from './errorHandling/stackTraceHandler';

const app = express();

if (config.env === 'development') {
  app.use(logger('dev'));
}

// parse body params and attache them to req.body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// app.use(compress());
// app.use(methodOverride());

// secure apps by setting various HTTP headers
app.use(helmet());

// enable CORS - Cross Origin Resource Sharing
app.use(cors());

// enable detailed API logging in dev env
if (config.env === 'development') {
  expressWinston.requestWhitelist.push('body');
  expressWinston.responseWhitelist.push('body');
  app.use(expressWinston.logger({
    winstonInstance,
    meta: true, // optional: log meta data about request (defaults to true)
    msg: 'HTTP {{req.method}} {{req.url}} {{res.statusCode}} {{res.responseTime}}ms',
    colorStatus: true, // Color the status code (default green, 3XX cyan, 4XX yellow, 5XX red).
  }));
}

/**
 *
 * Register routes.
 */
app.use('/', routes);

/**
 *
 * Error handling.
 */
app.use(APIErrorHandler);
app.use(fourOFourHandler);
app.use(stackTraceHandler);

/**
 *
 * Export express app.
 */
export default app;
