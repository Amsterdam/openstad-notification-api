import httpStatus from 'http-status';
import { config } from '../../config/app';

/**
 *
 * Error handler, send stacktrace only during development
 */
export default (err, req, res, next) => {
  console.log(err)
  const result = {
    message: err.isPublic ? err.message : httpStatus[err.status],
  };

  if(config.environment === 'development') {
    result.stack = err.stack
  }

  if(err.body) {
    result.errors = err.body;
  }

  return res.status(err.status).json(result)
}
