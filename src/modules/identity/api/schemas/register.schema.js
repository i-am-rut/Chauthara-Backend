import { z } from "zod";

export const registerSchema = z.object({
  username: z
    .string()
    .trim()
    .min(3)
    .max(30),

  email: z
    .email()
    .trim(),

  password: z
    .string()
    .trim()
    .min(8)
    .max(20),

  name: z
    .string()
    .trim()
    .min(2)
    .max(100)
    .optional(),

  ageConfirmed: z
    .literal(true),

  termsAccepted: z 
    .literal(true),
  
  confirmPassword: z
    .string(),
})
.refine(
  (data) => data.password === data.confirmPassword,
  {
    path: ["confirmPassword"],
    message: "Passwords do not match",
  }
);