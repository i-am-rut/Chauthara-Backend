import InfrastructureError from "../InfrastructureError.js";

function createInfrastructureError(infraErrorCode, err) {
    return new InfrastructureError({
        code: infraErrorCode,
        message: err.message,
        cause: err,
    });
}

export default createInfrastructureError;