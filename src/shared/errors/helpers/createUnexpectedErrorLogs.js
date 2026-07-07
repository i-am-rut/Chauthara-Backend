import ErrorCodes from "../errorCodes.js";


export default function createUnexpectedErrorLogs(err, req) {
    return {
        code: ErrorCodes.UNEXPECTED_ERROR,
        message: err.message,
        stack: err.stack,
        method: req.method,
        path: req.originalUrl,
        ip: req.ip,
        requestId: req.requestId,
    };
}