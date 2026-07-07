
export default function createErrorLogs(err, req) {
    return {
        code: err.code,
        message: err.message,
        method: req.method,
        path: req.originalUrl,
        ip: req.ip,
        requestId: req.requestId,
    }
}