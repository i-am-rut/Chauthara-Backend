class InfrastructureError extends Error {
    constructor({ statusCode = null, code, message, details = null, cause = null }) {
        super(message);

        this.statusCode = statusCode;
        this.code = code;
        this.details = details;
        this.cause = cause;

        Error.captureStackTrace(this, this.constructor);
    }
}

export default InfrastructureError;