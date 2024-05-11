import { z } from "zod";

import { GENDERS } from "@/constants/modal-helpers";
import { passwordRegex } from "@/constants/regexes";

export const schema = z.object({
  displayName: z.string().min(3).max(20),
  gender: z.nativeEnum(GENDERS),
  status: z.string().optional(),
  password: z
    .string()
    .regex(new RegExp(passwordRegex.regex), passwordRegex.message),
});
