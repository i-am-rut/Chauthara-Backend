import ErrorCodes from "../../../../shared/errors/errorCodes.js";

const registerErrors = {
  emailAlreadyExists: {
    statusCode: 409,
    code: ErrorCodes.EMAIL_ALREADY_EXISTS,
    message: "Email already registered.",
  },

  usernameAlreadyExists: {
    statusCode: 409,
    code: ErrorCodes.USERNAME_ALREADY_EXISTS,
    message: "Username already taken.",
  },
};

export default registerErrors;