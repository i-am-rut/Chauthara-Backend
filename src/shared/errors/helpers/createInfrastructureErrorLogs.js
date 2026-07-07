
export default function createInfrastructureErrorLogs(err, req) {
    return {
        code: err.code,
        message: err.message,
        method: req.method,
        path: req.originalUrl,
        stack: err.cause.stack,
        ip: req.ip,
        requestId: req.requestId,
    }
}