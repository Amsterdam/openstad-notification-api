import APIError from './APIError';
import httpStatus from 'http-status';

export default (req, res, next) => {
  const err = new APIError('404: address not found', httpStatus.NOT_FOUND);
  return next(err);
}
