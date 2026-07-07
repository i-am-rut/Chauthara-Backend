import ErrorCodes from "../errorCodes.js";

const InfrastructureErrorResponses = {
    // For the errors that are special cases.
    // It means the cases where internal services fail to process request but,
    // it is safe to let user know about it.
    // Example: Email service related failure, Cloudinary related failures, basically external responsibility
    // level failures. Error objects must be in format shown below.

    EMAIL_PROVIDER_ERROR: {
        statusCode: 500,
        code: ErrorCodes.EMAIL_PROVIDER_ERROR,
        message: "Unable to send verification email.",
    }
}

export default InfrastructureErrorResponses;