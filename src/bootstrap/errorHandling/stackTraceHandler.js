import httpStatus from 'http-status';
import { appConfig } from '../../config/app';

/**
 *
 * Error handler, send stacktrace only during development
 */
export default (err, req, res, next) =>
  res.status(err.status).json({
    message: err.isPublic ? err.message : httpStatus[err.status],
    stack: appConfig.environment === 'development' ? err.stack : {},
  })
