import httpStatus from 'http-status';
import { appConfig } from '../../config/app';

/**
 *
 * Error handler, send stacktrace only during development
 */
export default (err, req, res, next) => {
  const result = {
    message: err.isPublic ? err.message : httpStatus[err.status],
  };

  if(appConfig.environment === 'development') {
    result.stack = err.stack
  }

  if(err.body) {
    result.errors = err.body;
  }

  return res.status(err.status).json(result)
}
