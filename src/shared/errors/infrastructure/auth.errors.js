import ErrorCodes from "../errorCodes.js"

const authInfrastructureErrors = {
    passwordHashFailed: ErrorCodes.PASSWORD_HASH_FAILED,
    passwordCompareFailed: ErrorCodes.PASSWORD_COMPARE_FAILED,
    accessJwtSignFailure: "ACCESS_JWT_SIGN_FAILURE",
    accessJwtVerifyFailure: "ACCESS_JWT_VERIFY_FAILURE",
    refreshJwtSignFailure: "REFRESH_JWT_SIGN_FAILURE",
    refreshJwtVerifyFailure: "REFRESH_JWT_VERIFY_FAILURE",
    // Add these errors to ErrorCodes.
}

export default authInfrastructureErrors;