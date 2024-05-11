import { z } from "zod";

import { passwordRegex, phoneRegex } from "@/constants/regexes";

export const schema = z.object({
  displayName: z.string().min(3, "3-20 characters").max(20, "3-20 characters"),
  phone: z.string().regex(new RegExp(phoneRegex.regex), phoneRegex.message),
  email: z.string().email(),
  password: z
    .string()
    .regex(new RegExp(passwordRegex.regex), passwordRegex.message),
  year: z.string().min(4, "Choose your birth year"),
  month: z.string().min(3, "Choose your birth month"),
  day: z.string().min(1, "Choose your birth day"),
});