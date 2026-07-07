const usernameConfig = {
  requiredMessage:
    "Username is required.",

  minLength: 3,

  minLengthMessage:
    "Username must contain at least 3 characters.",

  maxLength: 30,

  maxLengthMessage:
    "Username cannot exceed 30 characters.",

  pattern:
    /^[a-z][a-z0-9._]*$/,

  patternMessage:
    "Username must start with a lowercase letter and may only contain lowercase letters, numbers, underscores (_) and dots (.).",
};

export default usernameConfig;