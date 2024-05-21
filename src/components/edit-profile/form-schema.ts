import { z } from "zod";

import { GENDERS } from "@/constants/genders";
import { passwordRegex } from "@/constants/regexes";

export const schema = z.object({
  displayName: z.string().min(3, "3-20 characters").max(20, "3-20 characters"),
  gender: z.nativeEnum(GENDERS),
  status: z.string().optional(),
  currentPassword: z
    .string()
    .regex(new RegExp(passwordRegex.regex), passwordRegex.message),
  newPassword: z
    .string()
    .regex(new RegExp(passwordRegex.regex), passwordRegex.message),
});
