import { z } from "zod";

export const schema = z.object({
  text: z
    .string()
    .min(1, "Minimum 1 character")
    .max(1000, "Maximum 1000 characters"),
  // image: z.custom<File>(),
});
