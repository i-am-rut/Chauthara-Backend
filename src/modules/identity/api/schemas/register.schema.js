import { z } from "zod";
import { emailConfig, nameConfig, passwordConfig, registerConfig, usernameConfig } from "../schemaConfigs/index.js";

export const registerSchema = z.object({
  username: z
    .string({ error: usernameConfig.requiredMessage })
    .trim()
    .min(usernameConfig.minLength, usernameConfig.minLengthMessage)
    .max(usernameConfig.maxLength, usernameConfig.maxLengthMessage)
    .regex(usernameConfig.pattern, usernameConfig.patternMessage),

  email: z.string()
    .trim()
    .email({ error: emailConfig.requiresMessage }),

  password: z
    .string({ error: passwordConfig.requiredMessage })
    .trim()
    .min(passwordConfig.minLength, passwordConfig.minLengthMessage)
    .max(passwordConfig.maxLength, passwordConfig.maxLengthMessage)
    .regex(passwordConfig.patternUppercase, passwordConfig.patternUppercaseMessage)
    .regex(passwordConfig.patternLowercase, passwordConfig.patternLowercaseMessage)
    .regex(passwordConfig.patternNumber, passwordConfig.patternNumberMessage)
    .regex(passwordConfig.patternSpecialCharacter, passwordConfig.patternSpecialCharacterMessage)
    .regex(passwordConfig.patternAllowed, passwordConfig.patternAllowedMessage),

  name: z
    .string()
    .trim()
    .min(nameConfig.minLength, nameConfig.maxLengthMessage)
    .max(nameConfig.maxLength, nameConfig.maxLengthMessage)
    .optional(),

  ageConfirmed: z
    .literal(true, registerConfig.ageConfiremd),

  termsAccepted: z
    .literal(true, registerConfig.termsAccepted),

  confirmPassword: z
    .string({ error: registerConfig.confirmPasswordRequired }),
})
  .refine(
    (data) => data.password === data.confirmPassword,
    {
      path: ["confirmPassword"],
      message: "Passwords do not match",
    }
  );