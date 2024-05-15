import { z } from "zod";

export const schema = z.object({
  content: z
    .string()
    .min(3, "Minimum 3 characters")
    .max(600, "Maximum 600 characters"),
  image: z.custom<File>(),
});
