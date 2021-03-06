import expressValidation from 'express-validation';
import APIError from './APIError';

export default (err, req, res, next) => {
  console.log(err)
  if (err instanceof expressValidation.ValidationError) {
    const error = new APIError(err.message, err.statusCode, true, err.details);

    return next(error);
  } else if (!(err instanceof APIError)) {
    const apiError = new APIError(err.message, err.status, err.isPublic);

    return next(apiError);
  }
  return next(err);
}
