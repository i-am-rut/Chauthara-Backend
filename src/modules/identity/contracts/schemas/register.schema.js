import { z } from "zod";

export const registerSchema = z.object({
  username: z
    .string()
    .min(3)
    .max(30),

  email: z
    .email(),

  password: z
    .string()
    .min(8),

  name: z
    .string()
    .min(2)
    .max(100),
});