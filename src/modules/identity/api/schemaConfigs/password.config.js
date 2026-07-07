const passwordConfig = {
    requiredMessage: "Password is required.",

    minLength: 8,

    minLengthMessage: "Password must contain at least 8 characters.",

    maxLength: 64,

    maxLengthMessage: "Password cannot exceed 64 characters.",

    patternUppercase: /[A-Z]/,

    patternUppercaseMessage: "Password must contain at least one uppercase letter.",

    patternLowercase: /[a-z]/,

    patternLowercaseMessage: "Password must contain at least one lowercase letter.",

    patternNumber: /\d/,

    patternNumberMessage: "Password must contain at least one number.",

    patternSpecialCharacter: /[!@#$%^&*()_\-+=[\]{}|;:'",.<>/?`~\\]/,

    patternSpecialCharacterMessage: "Password must contain at least one special character.",

    patternAllowed: /^[A-Za-z0-9!@#$%^&*()_\-+=[\]{}|;:'",.<>/?`~\\]+$/,

    patternAllowedMessage: "Password contains unsupported characters.",

}

export default passwordConfig;