import httpStatus from 'http-status';

/**
 * @extends Error
 */
class ExtendableError extends Error {
    constructor(message, status, isPublic) {
        super(message);
        this.name = this.constructor.name;
        this.message = message;
        this.status = status;
        this.isPublic = isPublic;
        this.isOperational = true; // This is required since bluebird 4 doesn't append it anymore.
        Error.captureStackTrace(this, this.constructor.name);
    }
}

/**
 * Class representing an API error.
 * @extends ExtendableError
 */
class APIError extends ExtendableError {
    /**
     *
     * @param message
     * @param status
     * @param body
     * @param isPublic
     */
    constructor(message, status = httpStatus.INTERNAL_SERVER_ERROR, isPublic = false, body= 'test') {
        super(message, status, isPublic);
        this.body = body;
    }
}

export default APIError;
