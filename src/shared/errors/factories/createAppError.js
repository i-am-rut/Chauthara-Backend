import AppError from "../AppError.js";


function createAppError(appError, details = null) {
    return new AppError({
        statusCode: appError.statusCode,
        code: appError.code,
        message: appError.message,
        details,
    });
}

export default createAppError;